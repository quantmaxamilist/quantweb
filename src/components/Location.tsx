import styles from './Location.module.css'

const areas = ['Cardiff', 'Swansea', 'Newport', 'Bridgend', 'Merthyr Tydfil', 'Barry', 'Neath', 'All UK']

export default function Location() {
  return (
    <section className={styles.section} id="location" aria-labelledby="location-heading">
      <div className={styles.inner}>
        <div className="reveal">
          <p className={styles.eyebrow}>Where we work</p>
          <h2 className={styles.title} id="location-heading">Based in South Wales.<br />Built for the UK.</h2>
          <p className={styles.sub}>
            We&apos;re a South Wales web studio working with businesses across Cardiff, Swansea, Newport, Bridgend, and beyond.
            All projects run remotely with clear, consistent communication.
          </p>
          <div className={styles.pills} role="list" aria-label="Locations we serve">
            {areas.map(a => <span key={a} className={styles.pill} role="listitem">{a}</span>)}
          </div>
        </div>

        <div className={`${styles.mapBox} reveal d1`} role="img" aria-label="South Wales service area map placeholder">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="18" r="8" stroke="#0071e3" strokeWidth="2" />
            <circle cx="20" cy="18" r="3" fill="#0071e3" />
            <path d="M20 26c0 0-10 8-10 14" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 26c0 0 10 8 10 14" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>South Wales &amp; UK</span>
          {/* TODO: Replace with a real Google Maps iframe */}
          {/* <iframe src="https://www.google.com/maps/embed?..." ... /> */}
        </div>
      </div>
    </section>
  )
}
