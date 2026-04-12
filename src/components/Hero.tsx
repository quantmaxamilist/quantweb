'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const pts: { x: number; y: number; vx: number; vy: number; r: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 44; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.4,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,113,227,0.22)'
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,113,227,${0.07 * (1 - d / 150)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <p className={styles.eyebrow}>
        <span className={styles.eyebrowDot} aria-hidden="true" />
        Web Studio · South Wales
      </p>

      <h1 className={styles.headline} id="hero-heading">
        Websites that<br />
        <span className={styles.accentWord}>work harder.</span>
      </h1>

      <p className={styles.sub}>
        QuantWeb builds beautiful, high-performance websites and drives the organic
        traffic to fill them — for businesses across South Wales and the UK.
      </p>

      <div className={styles.actions}>
        <Link href="#contact" className={styles.btnPrimary}>Start a project</Link>
        <Link href="#services" className={styles.btnGhost}>
          See our services <span aria-hidden="true">›</span>
        </Link>
      </div>
    </section>
  )
}
