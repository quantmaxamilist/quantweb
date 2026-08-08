'use client'
import { useState } from 'react'
import { submitToWeb3Forms } from '@/lib/web3forms'
import styles from './Cta.module.css'

const SUBMIT_ERROR =
  'Something went wrong — please email admin@quantweb.co.uk directly'

export default function Cta() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      setValidationError(true)
      setTimeout(() => setValidationError(false), 1600)
      return
    }

    setSubmitError('')

    setSubmitting(true)
    const ok = await submitToWeb3Forms({
      subject: `New enquiry from QuantWeb site — ${email}`,
      email,
    })
    setSubmitting(false)

    if (ok) {
      setSent(true)
      setEmail('')
      return
    }

    setSubmitError(SUBMIT_ERROR)
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Get started</p>
        <span className="eyebrowRule eyebrowRuleCenter" aria-hidden="true" />
        <h2 className={styles.title} id="contact-heading">
          Ready to build<br />
          <span className="accentItalic">something great?</span>
        </h2>
        <p className={styles.sub}>
          Drop us your email and we&apos;ll be in touch within one business day.
        </p>

        {!sent ? (
          <>
            <div className={styles.form} role="form" aria-label="Contact form">
              <label htmlFor="cta-email" className="sr-only">Your email address</label>
              <input
                id="cta-email"
                className={`${styles.input} ${validationError ? styles.inputError : ''}`}
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                aria-required="true"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !submitting && handleSubmit()}
                disabled={submitting}
              />
              <button
                className={styles.btn}
                onClick={handleSubmit}
                type="button"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Get in touch'}
              </button>
            </div>
            {submitError && (
              <p className={styles.submitError} role="alert">
                {submitError}
              </p>
            )}
          </>
        ) : (
          <p className={styles.thanks} role="status" aria-live="polite">
            Thanks — we&apos;ll be in touch soon. ✓
          </p>
        )}
      </div>
    </section>
  )
}
