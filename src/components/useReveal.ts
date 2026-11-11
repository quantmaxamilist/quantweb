'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useReveal() {
  const path = usePathname()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [path])
}
