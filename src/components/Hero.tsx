'use client'

import { useState } from 'react'
import styles from './Hero.module.css'

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
    <section
      className={styles.hero}
      style={{ overflow: 'hidden' }}
      aria-labelledby="hero-heading"
    >
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </linearGradient>
          <style>{`
      @keyframes draw { to { stroke-dashoffset: 0; } }
      @keyframes fin { to { opacity: 1; } }
      .cl { stroke-dasharray: 2800; stroke-dashoffset: 2800; animation: draw 12s cubic-bezier(0.4,0,0.2,1) 0.5s forwards; }
      .cf { opacity: 0; animation: fin 3s ease 9s forwards; }
      .cd { opacity: 0; animation: fin 0.5s ease 12s forwards; }
    `}</style>
        </defs>
        <line x1="0" y1="150" x2="1200" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <path
          className="cf"
          d="M0 560 C100 540,150 560,220 530 C290 500,340 510,410 475 C480 440,530 455,600 410 C670 365,720 385,790 335 C860 285,910 310,980 255 C1050 200,1100 225,1170 165 L1200 150 L1200 600 L0 600Z"
          fill="url(#fg)"
        />
        <path
          className="cl"
          d="M0 560 C100 540,150 560,220 530 C290 500,340 510,410 475 C480 440,530 455,600 410 C670 365,720 385,790 335 C860 285,910 310,980 255 C1050 200,1100 225,1170 165 L1200 150"
          fill="none"
          stroke="url(#lg)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle className="cd" cx="1200" cy="150" r="4" fill="#0071e3" />
        <circle className="cd" cx="1200" cy="150" r="10" fill="none" stroke="#0071e3" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="r" from="6" to="20" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
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
