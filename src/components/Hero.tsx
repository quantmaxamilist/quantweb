'use client'

import { useState } from 'react'
import { submitToWeb3Forms } from '@/lib/web3forms'
import styles from './Hero.module.css'

const SUBMIT_ERROR =
  'Something went wrong — please email admin@quantweb.co.uk directly'

export default function Hero() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    setSubmitting(true)
    const ok = await submitToWeb3Forms({
      subject: `New enquiry from QuantWeb site — ${name}`,
      name,
      company,
      email,
      message,
    })
    setSubmitting(false)

    if (ok) {
      setSent(true)
      return
    }

    setSubmitError(SUBMIT_ERROR)
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
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <style>{`
    @keyframes drawChart { to { stroke-dashoffset: 0; } }
    @keyframes showFill { to { opacity: 1; } }
    @keyframes showDot { to { opacity: 1; } }
    #qw-line { stroke-dasharray: 2800; stroke-dashoffset: 2800; animation: drawChart 12s cubic-bezier(0.4,0,0.2,1) 0.5s forwards; }
    #qw-fill { opacity: 0; animation: showFill 3s ease 9s forwards; }
    #qw-dot { opacity: 0; animation: showDot 0.5s ease 12s forwards; }
  `}</style>
        <line x1="0" y1="150" x2="1200" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <path
          id="qw-fill"
          d="M0 580 C100 560,150 575,220 545 C290 515,340 525,410 490 C480 455,530 468,600 425 C670 382,720 398,790 348 C860 298,910 318,980 265 C1050 212,1100 232,1170 178 L1200 165 L1200 600 L0 600Z"
          fill="url(#fillGrad)"
        />
        <path
          id="qw-line"
          d="M0 580 C100 560,150 575,220 545 C290 515,340 525,410 490 C480 455,530 468,600 425 C670 382,720 398,790 348 C860 298,910 318,980 265 C1050 212,1100 232,1170 178 L1200 165"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle id="qw-dot" cx="1200" cy="165" r="4" fill="#0071e3" />
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                  disabled={submitting}
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
                  disabled={submitting}
                />
              </div>
              {submitError && (
                <p className={styles.submitError} role="alert">
                  {submitError}
                </p>
              )}
              <button type="submit" className={styles.submit} disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
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
