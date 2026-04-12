'use client'
import { useEffect, useRef } from 'react'
import styles from './WhyUs.module.css'

const points = [
  { n: '01', title: 'Built to rank from day one', desc: 'Schema markup, Core Web Vitals, and keyword-targeted content are baked into every build — not bolted on later.' },
  { n: '02', title: 'Local expertise, UK reach', desc: 'We know South Wales search landscapes — Cardiff, Swansea, Newport. And we scale nationally when you\'re ready.' },
  { n: '03', title: 'Transparent reporting', desc: 'Live dashboard access, monthly calls, and plain-English reports. You always know exactly what\'s happening.' },
  { n: '04', title: 'E-E-A-T from the ground up', desc: 'Google\'s 2026 trust signals — Experience, Expertise, Authority, Trust — built into your content strategy from day one.' },
]

const rankings = [
  { pos: 1, kw: 'web design south wales', w: 92, trend: '+4 ↑' },
  { pos: 2, kw: 'seo agency wales',       w: 78, trend: '+7 ↑' },
  { pos: 3, kw: 'web studio cardiff',     w: 65, trend: '+3 ↑' },
  { pos: 4, kw: 'website design swansea', w: 54, trend: '+9 ↑' },
  { pos: 5, kw: 'local seo south wales',  w: 44, trend: '+11 ↑' },
]

export default function WhyUs() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          cardRef.current?.querySelectorAll<HTMLElement>('[data-w]').forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.w + '%' }, 300)
          })
        }
      })
    }, { threshold: 0.2 })
    obs.observe(cardRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} id="why-us" aria-labelledby="why-heading">
      <div className={styles.inner}>
        <div className="reveal">
          <p className={styles.eyebrow}>Why QuantWeb</p>
          <h2 className={styles.title} id="why-heading">Rank higher.<br />Stay there.</h2>
          <p className={styles.sub}>Most agencies do design or SEO. We do both — built to work together from day one.</p>
          <div className={styles.points} role="list">
            {points.map(p => (
              <div key={p.n} className={styles.point} role="listitem">
                <span className={styles.num}>{p.n}</span>
                <div>
                  <div className={styles.ptTitle}>{p.title}</div>
                  <div className={styles.ptDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal d2" ref={cardRef}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Live keyword rankings</div>
            {rankings.map(r => (
              <div key={r.pos} className={styles.row}>
                <div className={styles.pos}>{r.pos}</div>
                <div className={styles.kw}>{r.kw}</div>
                <div className={styles.barWrap}>
                  <div className={styles.bar} data-w={r.w} style={{ width: 0 }} />
                </div>
                <div className={styles.trend}>{r.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
