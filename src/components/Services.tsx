import Link from 'next/link'
import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="18" height="13" rx="2" stroke="#0071e3" strokeWidth="1.5"/>
        <path d="M7 19h8M11 16v3" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Design & Development',
    desc: 'Pixel-perfect, performance-first websites built from scratch. Fast-loading, accessible, and crafted to convert. Every site ships with 98+ Lighthouse scores as standard.',
    cta: 'Start a project',
  },
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="#0071e3" strokeWidth="1.5"/>
        <path d="M8.5 11l2 2 3-3" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Search Engine Optimisation',
    desc: 'Technical SEO, content strategy, and link building engineered to land you on page one. We target South Wales local search and UK-wide organic traffic.',
    cta: 'Grow your traffic',
  },
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 16l4-4 3 3 4-5 3 3" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="18" height="16" rx="2" stroke="#0071e3" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Performance Audits',
    desc: 'Deep-dive audits on Core Web Vitals, crawlability, and conversion paths — with a clear, prioritised fix-it roadmap you can act on immediately.',
    cta: 'Audit my site',
  },
  {
    icon: (
      <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L13.5 8H20L14.5 12L17 18L11 14.5L5 18L7.5 12L2 8H8.5L11 2Z" stroke="#0071e3" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Updates & Changes',
    desc: 'Need something changed after launch? Just come back to us. We quote per job — no retainers, no monthly fees. Pay only for what you need, when you need it.',
    cta: 'Get a quote',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={`${styles.head} reveal`}>
        <p className={styles.eyebrow}>What we do</p>
        <h2 className={styles.title} id="services-heading">Design. Build. Rank.</h2>
        <p className={styles.sub}>Two disciplines, one studio — we build your site and make sure the world finds it.</p>
      </div>

      <div className={`${styles.grid} reveal d1`}>
        {services.map((s, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <Link href="#contact" className={styles.link}>
              {s.cta} <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
