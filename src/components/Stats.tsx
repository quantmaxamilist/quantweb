'use client'
import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

const stats = [
  { num: 40, sfx: '+', label: 'Projects delivered' },
  { num: 3,  sfx: '×', label: 'Average traffic lift' },
  { num: 98, sfx: '',  label: 'Avg Lighthouse score' },
]

export default function Stats() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    refs.current.forEach((el, i) => {
      if (!el) return
      const numEl = el.querySelector('[data-num]') as HTMLElement
      if (!numEl) return
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !numEl.dataset.done) {
            numEl.dataset.done = '1'
            const to = stats[i].num
            const sfx = stats[i].sfx
            let start: number | null = null
            const step = (ts: number) => {
              if (!start) start = ts
              const p = Math.min((ts - start) / 1600, 1)
              const ease = 1 - Math.pow(1 - p, 3)
              numEl.textContent = Math.round(ease * to) + sfx
              if (p < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      }, { threshold: 0.3 })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className={styles.stats} aria-label="Studio stats">
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`${styles.item} reveal`}
            ref={el => { refs.current[i] = el }}
          >
            <div className={styles.num} data-num>{s.num}{s.sfx}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
