import Link from 'next/link'
import styles from './Portfolio.module.css'

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M5 9h8M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio" aria-labelledby="portfolio-heading">
      <div className={styles.head}>
        <p className={styles.eyebrow}>What we build</p>
        <h2 className={styles.title} id="portfolio-heading">
          Work that speaks for itself.
        </h2>
        <p className={styles.sub}>
          Hover each card to see sector focus — fast, beautiful, built to rank.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.cardApex}`}>
          <div className={`${styles.hoverMark} ${styles.hoverMarkApex}`} aria-hidden>
            A
          </div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagApex}`}>Fitness &amp; Wellness</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Apex Fitness</h3>
            <div className={styles.copySwitcher}>
              <p className={`${styles.cardDesc} ${styles.descLight}`}>
                High-energy dark design for a premium South Wales gym. Membership-first conversion flow.
              </p>
              <div className={`${styles.pills} ${styles.pillsApex}`}>
                <span>Dark UI</span>
                <span>Gym sector</span>
                <span>Conversion-first</span>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardEmber}`}>
          <div className={`${styles.hoverMark} ${styles.hoverMarkEmber}`} aria-hidden>
            E
          </div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagEmber}`}>Hospitality &amp; Dining</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Ember Restaurant</h3>
            <div className={styles.copySwitcher}>
              <p className={`${styles.cardDesc} ${styles.descLight}`}>
                Dark luxury editorial design for a Cardiff fine dining restaurant. Reservation-focused.
              </p>
              <div className={`${styles.pills} ${styles.pillsEmber}`}>
                <span>Editorial</span>
                <span>Hospitality</span>
                <span>Reservation flow</span>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardHaven}`}>
          <div className={`${styles.hoverMark} ${styles.hoverMarkHaven}`} aria-hidden>
            H
          </div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagHaven}`}>Luxury Property</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Haven Property</h3>
            <div className={styles.copySwitcher}>
              <p className={`${styles.cardDesc} ${styles.descLight}`}>
                Light luxury estate agency site. Warm stone palette, premium listings, valuation-focused.
              </p>
              <div className={`${styles.pills} ${styles.pillsHaven}`}>
                <span>Light luxury</span>
                <span>Property</span>
                <span>Listings</span>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardBlade}`}>
          <div className={`${styles.hoverMark} ${styles.hoverMarkBlade}`} aria-hidden>
            B
          </div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagBlade}`}>Grooming &amp; Barbershop</span>
            <h3 className={`${styles.cardTitle} ${styles.titleDark}`}>Blade &amp; Co.</h3>
            <div className={styles.copySwitcher}>
              <p className={`${styles.cardDesc} ${styles.descDark}`}>
                Editorial cream and black luxury barber site. Serif typography, heritage feel, online booking.
              </p>
              <div className={`${styles.pills} ${styles.pillsBlade}`}>
                <span>Editorial</span>
                <span>Barbershop</span>
                <span>Serif UI</span>
              </div>
            </div>
          </div>
        </article>

        <div className={styles.ctaCard}>
          <div className={`${styles.watermark} ${styles.wmCta}`}>YOUR PROJECT</div>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className={styles.ctaTag}>Your business</p>
              <h3 className={styles.ctaTitle}>Your site could be next.</h3>
              <p className={styles.ctaDesc}>
                Tell us what you need — we&apos;ll build something that makes your competitors jealous.
              </p>
            </div>
            <Link href="#contact" className={styles.ctaBtn}>
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
