'use client'
import { useState } from 'react'

export const serviceMenu = [
  { href: '/work', t: 'Web design & development', d: 'Hand-coded, mobile-first websites built to convert.', icon: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></> },
  { href: '/#services', t: 'Web platforms, apps & software', d: 'Client portals, dashboards, booking systems and bespoke tools.', icon: <><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M3 8h18M8 8v13M11.5 12.5h6M11.5 16h4" /></> },
  { href: '/web-design', t: 'Local SEO & AI search', d: 'Town pages, schema and Google Business Profile help.', icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></> },
  { href: '/#services', t: 'Hosting & ongoing support', d: 'Fast hosting, updates and changes — no monthly retainers.', icon: <><path d="M4 7h16v5H4zM4 12h16v5H4z" /><path d="M8 9.5h.01M8 14.5h.01" /></> },
  { href: '/#contact', t: 'Website audits', d: 'A clear look at what’s holding your current site back.', icon: <><path d="M9 11l2 2 4-4" /><path d="M5 4h14v16H5z" /></> },
  { href: '/#contact', t: 'Rebuilds & redesigns', d: 'Turn a dated site into one that ranks and brings in enquiries.', icon: <><path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5" /><path d="M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5" /></> },
]

const links = [
  { href: '/work', label: 'Our work' },
  { href: '/web-design', label: 'Areas' },
  { href: '/#why', label: 'Why QuantWeb?' },
]

const Ico = ({ children }: { children: React.ReactNode }) => (
  <span className="mm-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</svg></span>
)

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="hdr">
        <div className="wide">
          <a className="logo" href="/" aria-label="QuantWeb home"><img src="/qw-logo-dark.svg" alt="QuantWeb" width="58" height="30" /></a>
          <nav className="nav" aria-label="Main">
            <div className="dd">
              <a className="ch" href="/#services" aria-haspopup="true">Services</a>
              <div className="mega" role="menu">
                <div className="mega-in">
                  <div className="mega-grid">
                    {serviceMenu.map((s) => (
                      <a key={s.t} className="mm" href={s.href} role="menuitem"><Ico>{s.icon}</Ico><span><b>{s.t}</b><small>{s.d}</small></span></a>
                    ))}
                  </div>
                  <div className="mega-cta">
                    <span className="pill">From £550 · no retainers</span>
                    <p>Not sure what you need? Tell us about your business and we&apos;ll suggest the right setup.</p>
                    <a className="btn p" href="/#contact">Get a free quote</a>
                  </div>
                </div>
              </div>
            </div>
            {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
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
        <div className="mnav-h">Services</div>
        {serviceMenu.map((s) => <a key={s.t} className="mnav-s" href={s.href}><Ico>{s.icon}</Ico>{s.t}</a>)}
        {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a className="btn p" href="/#contact">Get a quote</a>
      </div>
    </>
  )
}
