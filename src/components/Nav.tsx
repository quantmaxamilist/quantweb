'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="QuantWeb Studio home">
          <Logo />
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ''}`} role="list">
          <li><Link href="/work" onClick={() => setOpen(false)}>Our work</Link></li>
          <li><Link href="#services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="#why-us" onClick={() => setOpen(false)}>Why us</Link></li>
          <li><Link href="#location" onClick={() => setOpen(false)}>Location</Link></li>
          <li><Link href="#faq" onClick={() => setOpen(false)}>FAQ</Link></li>
        </ul>

        <Link href="#contact" className={styles.cta}>Get in touch</Link>

        <button
          className={styles.toggle}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </nav>
    </header>
  )
}
