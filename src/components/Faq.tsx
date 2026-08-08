'use client'
import { useState } from 'react'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'How much does a website cost in South Wales?',
    a: 'A professional business website in South Wales typically costs between £500 and £8,000 depending on complexity, number of pages, and integrations. At QuantWeb, we offer transparent, project-based pricing starting from £350 for a clean, fast, fully SEO-optimised site. We\'ll give you a detailed quote after a free consultation — no hidden costs.',
  },
  {
    q: 'How long does SEO take to work in the UK?',
    a: 'Local SEO — like ranking for "web design south wales" — can show real movement within 6–8 weeks. Competitive UK-wide terms typically take 3–6 months of consistent effort. We always focus on local wins first to get you visible fast, then build long-term authority.',
  },
  {
    q: 'Do you work with businesses outside South Wales?',
    a: 'Absolutely. While we\'re based in South Wales, we work with businesses across the whole of the UK. All project work runs remotely with regular video calls, shared project boards, and clear communication at every step.',
  },
  {
    q: 'What makes QuantWeb different from other web agencies?',
    a: 'Most agencies either do web design or SEO. We do both under one roof — meaning your site is built to rank from day one. The design, code, and content strategy are all aligned from the start. No expensive bolt-ons later.',
  },
  {
    q: 'How do you handle updates and changes after launch?',
    a: 'We don\'t do monthly retainers — we believe in simple, honest pricing. You pay once for the work, and if you need changes or updates down the line, you just come back to us and we quote per job. No subscriptions, no ongoing fees, no surprises.',
  },
  {
    q: 'Do I own my website after the project?',
    a: 'Yes, 100%. You own everything — the design, the code, the domain, the content. We can hand over full access at the end of every project, or we can handle everything for you — hosting, updates, maintenance — so you never have to think about it. No lock-in, no surprises.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <div className={`${styles.head} reveal`}>
          <p className={styles.eyebrow}>FAQ</p>
          <span className="eyebrowRule eyebrowRuleCenter" aria-hidden="true" />
          <h2 className={styles.title} id="faq-heading">
            Common <span className="accentItalic">questions</span>
          </h2>
          <p className={styles.sub}>Everything you need to know before working with us.</p>
        </div>

        <div role="list">
          {faqs.map((f, i) => (
            <div key={i} className={styles.item} role="listitem">
              <button
                className={styles.question}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span
                  className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={styles.answer}
                style={{ maxHeight: open === i ? '560px' : '0' }}
                role="region"
                aria-hidden={open !== i}
              >
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
