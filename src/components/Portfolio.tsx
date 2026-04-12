import Image from 'next/image'
import Link from 'next/link'
import styles from './Portfolio.module.css'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

const cards = [
  {
    src: '/apex.png',
    alt: 'Apex Fitness website screenshot',
    tag: 'Fitness & wellness',
    tagClass: styles.tagApex,
    title: 'Apex Fitness',
    desc: 'High-energy dark gym site. Membership-first conversion flow.',
  },
  {
    src: '/ember.png',
    alt: 'Ember Restaurant website screenshot',
    tag: 'Hospitality & dining',
    tagClass: styles.tagEmber,
    title: 'Ember Restaurant',
    desc: 'Dark luxury editorial design. Reservation-focused conversion flow.',
  },
  {
    src: '/haven.png',
    alt: 'Haven Property website screenshot',
    tag: 'Luxury property',
    tagClass: styles.tagHaven,
    title: 'Haven Property',
    desc: 'Light luxury estate agency. Premium listings, valuation-focused.',
  },
  {
    src: '/blade.png',
    alt: 'Blade & Co. website screenshot',
    tag: 'Grooming & barbershop',
    tagClass: styles.tagBlade,
    title: 'Blade & Co.',
    desc: 'Editorial cream and black luxury barber. Serif typography, heritage feel.',
  },
] as const

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio" aria-labelledby="portfolio-heading">
      <div className={styles.head}>
        <p className={styles.eyebrow}>What we build</p>
        <h2 className={styles.title} id="portfolio-heading">
          Work that speaks for itself.
        </h2>
        <p className={styles.sub}>
          Every site we build is fast, beautiful, and built to rank.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <article key={card.src} className={styles.card}>
            <div className={styles.imageHoverWrap}>
              <div className={styles.imageCover}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={index === 0}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.gradient} aria-hidden="true" />
            <div className={styles.arrow} aria-hidden="true">
              <ArrowIcon />
            </div>
            <div className={styles.info}>
              <span className={`${styles.tag} ${card.tagClass}`}>{card.tag}</span>
              <h3 className={styles.titleCard}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </div>
          </article>
        ))}

        <div className={styles.ctaCard}>
          <div className={styles.watermark} aria-hidden="true">
            YOUR PROJECT
          </div>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className={styles.ctaTag}>Your business</p>
              <h3 className={styles.ctaTitle}>Your site could be next.</h3>
              <p className={styles.ctaDesc}>
                Share your goals and timeline — we&apos;ll reply with a clear plan and quote.
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
