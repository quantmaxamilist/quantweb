'use client'
import { useState } from 'react'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/work', label: 'Our work' },
  { href: '/web-design', label: 'Areas' },
  { href: '/#why', label: 'Why QuantWeb?' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="hdr">
        <div className="wide">
          <a className="logo" href="/" aria-label="QuantWeb home"><img src="/qw-logo-dark.svg" alt="QuantWeb" width="58" height="30" /></a>
          <nav className="nav" aria-label="Main">{links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</nav>
          <div className="right">
            <a className="btn p" href="/#contact">Get a quote</a>
            <a className="ico" href="mailto:admin@quantweb.co.uk" aria-label="Email us"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a1230" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M4 7l8 6 8-6" /></svg></a>
            <button type="button" className="ico burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="#0a1230" strokeWidth="2">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
            </button>
          </div>
        </div>
      </header>
      <div className={`mnav${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a className="btn p" href="/#contact">Get a quote</a>
      </div>
    </>
  )
}
