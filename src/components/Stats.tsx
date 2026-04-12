import styles from './Stats.module.css'

const items = [
  { title: 'No monthly retainers', sub: 'Pay per job, no lock-in' },
  { title: 'South Wales based', sub: 'Serving the whole UK' },
  { title: '98+ Lighthouse score', sub: 'On every single build' },
]

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Why choose us">
      <div className={styles.grid}>
        {items.map(({ title, sub }) => (
          <div key={title} className={styles.item}>
            <div className={styles.iconSquare} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7l2.5 2.5L11 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.textCol}>
              <div className={styles.title}>{title}</div>
              <div className={styles.sub}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
