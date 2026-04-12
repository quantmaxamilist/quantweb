'use client'
import { useState } from 'react'
import styles from './Cta.module.css'

export default function Cta() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError(true)
      setTimeout(() => setError(false), 1600)
      return
    }

    // TODO: Replace with your form endpoint
    // Option A — Formspree: POST to https://formspree.io/f/YOUR_ID
    // Option B — Netlify Forms: add data-netlify="true" to the form
    // Option C — your own API route at /api/contact

    // Example Formspree integration:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // })
    // if (res.ok) { setSent(true); setEmail('') }

    // For now, simulate success:
    setSent(true)
    setEmail('')
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Get started</p>
        <h2 className={styles.title} id="contact-heading">
          Ready to build<br />something great?
        </h2>
        <p className={styles.sub}>
          Drop us your email and we&apos;ll be in touch within one business day.
        </p>

        {!sent ? (
          <div className={styles.form} role="form" aria-label="Contact form">
            <label htmlFor="cta-email" className="sr-only">Your email address</label>
            <input
              id="cta-email"
              className={`${styles.input} ${error ? styles.inputError : ''}`}
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              aria-required="true"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
            <button className={styles.btn} onClick={handleSubmit} type="button">
              Get in touch
            </button>
          </div>
        ) : (
          <p className={styles.thanks} role="status" aria-live="polite">
            Thanks — we&apos;ll be in touch soon. ✓
          </p>
        )}
      </div>
    </section>
  )
}
