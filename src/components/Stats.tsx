import styles from './Stats.module.css'

const highlights = [
  'No monthly retainers — pay per job',
  'South Wales based, UK wide',
  '98+ Lighthouse score on every build',
]

function CheckIcon() {
  return (
    <svg
      className={styles.check}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8.25" fill="var(--accent)" />
      <path
        d="M5 9 7.5 11.5 13 5.5"
        stroke="white"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Stats() {
  return (
    <section className={styles.bar} aria-label="Service highlights">
      <div className={styles.inner} role="list">
        {highlights.map(text => (
          <div key={text} className={styles.item} role="listitem">
            <CheckIcon />
            <span className={styles.text}>{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
