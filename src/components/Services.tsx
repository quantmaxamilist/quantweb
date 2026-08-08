import Link from 'next/link'
import styles from './Services.module.css'

const services = [
  {
    title: 'Web Design & Development',
    desc: 'Pixel-perfect, performance-first websites built from scratch. Fast-loading, accessible, and crafted to convert. Every site ships with 98+ Lighthouse scores as standard.',
    cta: 'Start a project',
  },
  {
    title: 'Search Engine Optimisation',
    desc: 'Technical SEO, content strategy, and link building engineered to land you on page one. We target South Wales local search and UK-wide organic traffic.',
    cta: 'Grow your traffic',
  },
  {
    title: 'Performance Audits',
    desc: 'Deep-dive audits on Core Web Vitals, crawlability, and conversion paths — with a clear, prioritised fix-it roadmap you can act on immediately.',
    cta: 'Audit my site',
  },
  {
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
        <span className="eyebrowRule eyebrowRuleCenter" aria-hidden="true" />
        <h2 className={styles.title} id="services-heading">
          Design. Build. <span className="accentItalic">Rank.</span>
        </h2>
        <p className={styles.sub}>Two disciplines, one studio — we build your site and make sure the world finds it.</p>
      </div>

      <div className={`${styles.grid} reveal d1`}>
        {services.map((s, i) => (
          <article key={s.title} className={styles.card}>
            <div className={styles.cardNum}>{String(i + 1).padStart(2, '0')}</div>
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
