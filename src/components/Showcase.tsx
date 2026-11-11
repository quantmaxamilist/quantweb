'use client'
import { useEffect, useRef, useState } from 'react'

const slides = [
  { name: 'Asteria', domain: 'asteria-events.com', d: '/work-asteria.jpg', m: '/work/m-asteria.jpg' },
  { name: 'Voyager Camper Conversions', domain: 'voyagercamperconversions.com', d: '/work-voyager.jpg', m: '/work/m-voyager.jpg' },
  { name: 'Dream Home Mortgages', domain: 'dreamhomemortgages.co.uk', d: '/work-dreamhome.jpg', m: '/work/m-dreamhome.jpg' },
  { name: 'Vector Specialist', domain: 'vectorspecialist.co.uk', d: '/work-vector.jpg', m: '/work/m-vector.jpg' },
  { name: 'Jaggerz Takeaway', domain: 'jaggerztakeaway.co.uk', d: '/work/jaggerz-desktop.jpg', m: '/work/jaggerz-mobile.jpg' },
]

export default function Showcase() {
  const [i, setI] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const paused = useRef(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let visible = false
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    const t = setInterval(() => { if (visible && !paused.current) setI((n) => (n + 1) % slides.length) }, 3200)
    return () => { clearInterval(t); io.disconnect() }
  }, [])

  return (
    <div className="showcase" ref={ref} onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="sc-stage">
      <div className="sc-browser">
        <div className="sc-bar"><i /><i /><i /><span>{slides[i].domain}</span></div>
        <div className="sc-screen">
          {slides.map((s, n) => <img key={s.d} src={s.d} alt={n === i ? `${s.name} website` : ''} className={n === i ? 'on' : ''} loading={n ? 'lazy' : undefined} />)}
        </div>
      </div>
      <div className="sc-phone">
        <div className="sc-notch" />
        {slides.map((s, n) => <img key={s.m} src={s.m} alt="" className={n === i ? 'on' : ''} loading={n ? 'lazy' : undefined} />)}
      </div>
      </div>
      <div className="sc-meta"><span className="sc-label">{slides[i].name}</span><span className="sc-dots" aria-hidden="true">{slides.map((s, n) => <span key={s.name} className={n === i ? 'on' : ''} />)}</span></div>
    </div>
  )
}
