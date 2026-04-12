import styles from './Ticker.module.css'

const words = [
  'Web Design', 'South Wales', 'SEO', 'Cardiff',
  'Core Web Vitals', 'Swansea', 'Performance', 'Newport',
  'Google Rankings', 'Wales', 'Page Speed', 'UK',
]

export default function Ticker() {
  const items = [...words, ...words] // duplicate for seamless loop

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {items.map((word, i) => (
          <span key={i} className={styles.item}>
            {word}
            <span className={styles.dot}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
