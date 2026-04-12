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
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'red',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
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
