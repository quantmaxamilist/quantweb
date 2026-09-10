'use client'
import { useState } from 'react'
import { submitToWeb3Forms } from '@/lib/web3forms'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  const submit = async () => {
    if (!email.includes('@') || !email.includes('.')) {
      setErr('Please enter a valid email address')
      return
    }
    setErr('')
    setBusy(true)
    const ok = await submitToWeb3Forms({
      subject: `New enquiry from QuantWeb — ${email}`,
      email,
      from_name: 'QuantWeb website',
    })
    setBusy(false)
    if (ok) {
      setSent(true)
      setEmail('')
    } else {
      setErr('Something went wrong — please email admin@quantweb.co.uk directly')
    }
  }

  if (sent) {
    return (
      <p className="form-thanks" role="status" aria-live="polite">
        Thanks — we&apos;ll be in touch within one business day. ✓
      </p>
    )
  }

  return (
    <div className="quote-form">
      <input
        className="quote-input"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        aria-label="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !busy && submit()}
        disabled={busy}
      />
      <button className="btn primary" type="button" onClick={submit} disabled={busy}>
        {busy ? 'Sending…' : 'Get a quote'} <span className="arrow">→</span>
      </button>
      {err && (
        <p className="form-err" role="alert">
          {err}
        </p>
      )}
    </div>
  )
}
