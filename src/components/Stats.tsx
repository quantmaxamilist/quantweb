import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className={styles.stats} aria-label="Why choose us">
      <div className={styles.grid}>
        <div className={styles.item}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#0071e3"/>
            <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>No monthly retainers — pay per job</span>
        </div>
        <div className={styles.item}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#0071e3"/>
            <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>South Wales based, UK wide</span>
        </div>
        <div className={styles.item}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#0071e3"/>
            <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>98+ Lighthouse score on every build</span>
        </div>
      </div>
    </section>
  )
}
