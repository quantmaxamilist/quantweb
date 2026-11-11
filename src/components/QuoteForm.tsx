'use client'
import { useState } from 'react'
import { submitToWeb3Forms } from '@/lib/web3forms'

export default function QuoteForm() {
  const [busy, setBusy] = useState(false)
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    if (f.get('botcheck')) return
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    if (!name || !/^\S+@\S+\.\S+$/.test(email)) { setErr('Please add your name and a valid email address.'); return }
    setErr(''); setBusy(true)
    const ok = await submitToWeb3Forms({
      subject: `New QuantWeb enquiry — ${name}`,
      from_name: 'QuantWeb website',
      name,
      email,
      phone: String(f.get('phone') || ''),
      message: String(f.get('message') || ''),
    })
    setBusy(false)
    if (ok) setSent(true)
    else setErr('Something went wrong — please email admin@quantweb.co.uk directly.')
  }

  if (sent) return <p className="qsent" role="status">Thanks — we&apos;ll be in touch within one business day. ✓</p>

  return (
    <form className="qform" onSubmit={onSubmit} noValidate>
      <input className="hp" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div><label htmlFor="q-name">Name</label><input id="q-name" name="name" autoComplete="name" required /></div>
      <div><label htmlFor="q-email">Email</label><input id="q-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="full"><label htmlFor="q-phone">Phone (optional)</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" /></div>
      <div className="full"><label htmlFor="q-msg">What do you need?</label><textarea id="q-msg" name="message" placeholder="A new website, a rebuild, an app, local SEO…" /></div>
      {err && <p className="err full" role="alert">{err}</p>}
      <div className="full"><button className="btn p" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Start your project'}</button></div>
      <p className="legal full">By sending this form you agree to our <a href="/privacy">Privacy Policy</a>.</p>
    </form>
  )
}
