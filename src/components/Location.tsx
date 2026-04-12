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

        <div className={`${styles.mapBox} reveal d1`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156732.87590942!2d-3.3194061!3d51.5307407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb43f504f3b%3A0x7b8e3d2e1d5c4e3a!2sSouth%20Wales!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '18px', filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="QuantWeb Studio - South Wales"
          />
        </div>
      </div>
    </section>
  )
}
