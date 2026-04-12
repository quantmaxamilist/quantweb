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
      <div className={styles.chartBackdrop}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 460"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0071e3" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="1" />
            </linearGradient>
          </defs>
          <line x1="0" y1="100" x2="1200" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <path
            className={styles.chartFill}
            d="M0 440 L0 400 C50 392,70 408,110 392 C150 376,170 362,210 342 C250 322,270 338,310 315 C355 290,375 305,415 278 C458 250,478 268,518 242 C558 216,578 234,618 205 C660 174,678 192,718 162 C760 130,778 148,818 118 C862 86,880 106,920 76 C962 44,982 64,1022 38 C1058 14,1080 24,1120 14 C1150 6,1175 4,1200 2 L1200 440 Z"
            fill="url(#chartFill)"
          />
          <path
            className={styles.chartLine}
            d="M0 400 C50 392,70 408,110 392 C150 376,170 362,210 342 C250 322,270 338,310 315 C355 290,375 305,415 278 C458 250,478 268,518 242 C558 216,578 234,618 205 C660 174,678 192,718 162 C760 130,778 148,818 118 C862 86,880 106,920 76 C962 44,982 64,1022 38 C1058 14,1080 24,1120 14 C1150 6,1175 4,1200 2"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className={styles.chartDot} cx="1200" cy="2" r="4" fill="#0071e3" />
          <circle className={styles.chartDot} cx="310" cy="315" r="2.5" fill="#0071e3" opacity="0.4" />
          <circle className={styles.chartDot} cx="618" cy="205" r="2.5" fill="#0071e3" opacity="0.4" />
          <circle className={styles.chartDot} cx="920" cy="76" r="2.5" fill="#0071e3" opacity="0.4" />
        </svg>
      </div>
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
