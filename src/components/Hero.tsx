'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

/** Normalized points: x 0→1, y fraction from top (0.85 ≈ bottom, 0.05 ≈ top). */
const CHART_KEYS = [
  { x: 0, y: 0.85 },
  { x: 0.07, y: 0.8 },
  { x: 0.14, y: 0.83 },
  { x: 0.21, y: 0.76 },
  { x: 0.28, y: 0.79 },
  { x: 0.35, y: 0.7 },
  { x: 0.42, y: 0.74 },
  { x: 0.49, y: 0.62 },
  { x: 0.56, y: 0.66 },
  { x: 0.63, y: 0.52 },
  { x: 0.7, y: 0.56 },
  { x: 0.77, y: 0.4 },
  { x: 0.84, y: 0.44 },
  { x: 0.9, y: 0.28 },
  { x: 0.95, y: 0.2 },
  { x: 1, y: 0.05 },
]

function catmull(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number },
  t: number
) {
  const t2 = t * t
  const t3 = t2 * t
  return {
    x:
      0.5 *
      (2 * p1.x +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y:
      0.5 *
      (2 * p1.y +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  }
}

function buildSmoothPath(keys: { x: number; y: number }[], stepsPerSeg = 14) {
  if (keys.length < 2) return keys.map(p => ({ ...p }))
  const e = [keys[0], keys[0], ...keys, keys[keys.length - 1], keys[keys.length - 1]]
  const out: { x: number; y: number }[] = []
  for (let i = 0; i < e.length - 3; i++) {
    for (let s = 0; s < stepsPerSeg; s++) {
      const t = s / stepsPerSeg
      if (i > 0 && s === 0) continue
      out.push(catmull(e[i], e[i + 1], e[i + 2], e[i + 3], t))
    }
  }
  out.push(keys[keys.length - 1])
  return out
}

function cumulativeLengths(points: { x: number; y: number }[]) {
  const len: number[] = [0]
  let acc = 0
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x
    const dy = points[i].y - points[i - 1].y
    acc += Math.hypot(dx, dy)
    len.push(acc)
  }
  return len
}

function slicePathByLength(
  points: { x: number; y: number }[],
  cum: number[],
  maxLen: number
): { x: number; y: number }[] {
  if (maxLen <= 0) return [points[0]]
  const out: { x: number; y: number }[] = [points[0]]
  for (let i = 1; i < points.length; i++) {
    if (cum[i] <= maxLen) {
      out.push(points[i])
    } else {
      const prev = cum[i - 1]
      const seg = cum[i] - prev
      const t = seg > 0 ? (maxLen - prev) / seg : 0
      const p0 = points[i - 1]
      const p1 = points[i]
      out.push({
        x: p0.x + (p1.x - p0.x) * t,
        y: p0.y + (p1.y - p0.y) * t,
      })
      break
    }
  }
  return out
}

const DURATION_MS = 12_000

function HeroChartCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const normPath = buildSmoothPath(CHART_KEYS)

    const drawFrame = (wCss: number, hCss: number, progress: number) => {
      if (wCss < 1 || hCss < 1) return

      const points = normPath.map(p => ({ x: p.x * wCss, y: p.y * hCss }))
      const cum = cumulativeLengths(points)
      const total = cum[cum.length - 1] || 1
      const targetLen = progress * total
      const partial = slicePathByLength(points, cum, targetLen)
      const tip = partial[partial.length - 1]

      const px = canvas.width / wCss
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.setTransform(px, 0, 0, px, 0, 0)

      const gridYs = [0.2, 0.4, 0.6, 0.8].map(f => f * hCss)
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      ctx.lineWidth = 1
      for (const gy of gridYs) {
        ctx.beginPath()
        ctx.moveTo(0, gy)
        ctx.lineTo(wCss, gy)
        ctx.stroke()
      }

      if (partial.length < 2) {
        if (progress > 0 && tip) {
          ctx.save()
          ctx.shadowBlur = 16
          ctx.shadowColor = 'rgba(0,113,227,0.85)'
          ctx.fillStyle = '#0071e3'
          ctx.globalAlpha = 0.95
          ctx.beginPath()
          ctx.arc(tip.x, tip.y, 4, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
        return
      }

      ctx.beginPath()
      ctx.moveTo(partial[0].x, partial[0].y)
      for (let i = 1; i < partial.length; i++) {
        ctx.lineTo(partial[i].x, partial[i].y)
      }
      ctx.lineTo(partial[partial.length - 1].x, hCss)
      ctx.lineTo(partial[0].x, hCss)
      ctx.closePath()
      ctx.fillStyle = 'rgba(0,113,227,0.08)'
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(partial[0].x, partial[0].y)
      for (let i = 1; i < partial.length; i++) {
        ctx.lineTo(partial[i].x, partial[i].y)
      }
      ctx.strokeStyle = '#0071e3'
      ctx.globalAlpha = 0.7
      ctx.lineWidth = 2
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.stroke()
      ctx.globalAlpha = 1

      ctx.save()
      ctx.shadowBlur = 18
      ctx.shadowColor = 'rgba(0,113,227,0.9)'
      ctx.fillStyle = '#0071e3'
      ctx.globalAlpha = 0.95
      ctx.beginPath()
      ctx.arc(tip.x, tip.y, 4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      const elapsed = startRef.current == null ? 0 : performance.now() - startRef.current
      const progress = Math.min(1, elapsed / DURATION_MS)
      drawFrame(w, h, progress)
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas)
    resize()

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const progress = Math.min(1, (now - startRef.current) / DURATION_MS)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      drawFrame(w, h, progress)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      startRef.current = null
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.chartCanvas} aria-hidden="true" />
}

export default function Hero() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.chartBackdrop} style={{ background: 'red' }}>
        <HeroChartCanvas />
      </div>
      <div className={styles.split}>
        <div className={styles.left}>
          <h1 className={styles.headline} id="hero-heading">
            We build websites that
            <br />
            <span className={styles.accentLine}>actually perform.</span>
          </h1>
          <p className={styles.sub}>
            QuantWeb builds beautiful, high-performance websites and drives the organic
            traffic to fill them — for businesses across South Wales and the UK.
          </p>
          <div className={styles.trustPills} aria-label="Highlights">
            <span>No monthly retainers</span>
            <span className={styles.trustDot} aria-hidden="true">
              ·
            </span>
            <span>Pay per project</span>
            <span className={styles.trustDot} aria-hidden="true">
              ·
            </span>
            <span>Free consultation</span>
          </div>
        </div>

        <div className={styles.panel}>
          <h2 className={styles.formTitle}>Let&apos;s build something great</h2>
          {!sent ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="hero-name">Full name</label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="hero-company">Company</label>
                <input
                  id="hero-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="hero-email">Email</label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="hero-message">Message</label>
                <textarea
                  id="hero-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send message
              </button>
            </form>
          ) : (
            <p className={styles.thanks} role="status">
              Thanks — we&apos;ll be in touch soon.
            </p>
          )}
          <p className={styles.formNote}>We reply within one business day</p>
        </div>
      </div>
    </section>
  )
}
