'use client'
import { useEffect } from 'react'

export default function HomeScripts() {
  useEffect(() => {
    const accs = Array.from(document.querySelectorAll<HTMLDetailsElement>('.acc details'))
    const onToggle = (e: Event) => { const d = e.target as HTMLDetailsElement; if (d.open) accs.forEach((o) => { if (o !== d) o.open = false }) }
    accs.forEach((d) => d.addEventListener('toggle', onToggle))
    const btn = document.querySelector<HTMLButtonElement>('.about-toggle')
    const onAbout = () => { const a = btn!.closest('.about')!; a.classList.toggle('open'); btn!.textContent = a.classList.contains('open') ? 'Show less ⌃' : 'Show all ⌄' }
    btn?.addEventListener('click', onAbout)
    return () => { accs.forEach((d) => d.removeEventListener('toggle', onToggle)); btn?.removeEventListener('click', onAbout) }
  }, [])
  return null
}
