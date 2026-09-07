import Link from 'next/link'
import styles from './Portfolio.module.css'

type Card = {
  href?: string
  domain: string
  gradient: string
  mono: string
  tag: string
  tagClass: string
  title: string
  desc: string
  live?: boolean
}

const cards: Card[] = [
  {
    href: 'https://getintokeepingandfootball.co.uk',
    domain: 'getintokeepingandfootball.co.uk',
    gradient: 'linear-gradient(135deg, #0a0a0a, #262626)',
    mono: 'GIKF',
    tag: 'Coaching · North West',
    tagClass: styles.tagAccent,
    title: 'Get Into Keeping & Football',
    desc: 'Cinematic video hero, membership plans and a live social feed for a fast-growing coaching academy.',
    live: true,
  },
  {
    href: 'https://rs1.uk',
    domain: 'rs1.uk',
    gradient: 'linear-gradient(135deg, #0a0a0a, #3a2e0a)',
    mono: 'RS1',
    tag: 'Investment & Advisory · London',
    tagClass: styles.tagGold,
    title: 'RS1 Capital',
    desc: 'A refined black-and-gold, multi-page site for a specialist investment and turnaround firm.',
    live: true,
  },
  {
    href: 'https://scarlatt.co.uk',
    domain: 'scarlatt.co.uk',
    gradient: 'linear-gradient(135deg, #160607, #3a0d10)',
    mono: 'Scarlatt',
    tag: 'Renovations · Cheshire',
    tagClass: styles.tagRed,
    title: 'Scarlatt Property Development',
    desc: 'Editorial build with per-project case pages, mobile carousels and Cheshire-targeted local SEO.',
    live: true,
  },
  {
    href: 'https://boxed-fresh.vercel.app',
    domain: 'boxed-fresh.vercel.app',
    gradient: 'linear-gradient(135deg, #0c1f12, #123a1f)',
    mono: 'Boxed\nFresh',
    tag: 'Meal Prep · West Yorkshire',
    tagClass: styles.tagGreen,
    title: 'The Boxed Fresh Meals Co.',
    desc: 'Interactive menu with real macro data, studio food photography and a clean ordering flow.',
    live: true,
  },
  {
    href: 'https://ecoheatashp.co.uk',
    domain: 'ecoheatashp.co.uk',
    gradient: 'linear-gradient(135deg, #07231a, #0c4a34)',
    mono: 'EcoHeat',
    tag: 'Renewable Heating · Lancashire',
    tagClass: styles.tagGreen,
    title: 'EcoHeat ASHP',
    desc: 'Modern rebuild with service pages, an accreditations bar and an Our Work gallery for an MCS installer.',
    live: true,
  },
  {
    href: 'https://voyagercamperconversions.com',
    domain: 'voyagercamperconversions.com',
    gradient: 'linear-gradient(135deg, #0f1a1c, #1c3b40)',
    mono: 'Voyager',
    tag: 'Camper Conversions · UK',
    tagClass: styles.tagAccent,
    title: 'Voyager Camper Conversions',
    desc: 'A rugged, gallery-led site for a bespoke campervan and motorhome conversion and hire business.',
    live: true,
  },
]

function FrameBar({ domain }: { domain: string }) {
  return (
    <div className={styles.frameBarUrl} aria-hidden="true">
      <div className={styles.trafficLights}>
        <span className={styles.dotRed} />
        <span className={styles.dotAmber} />
        <span className={styles.dotGreen} />
      </div>
      <div className={styles.urlPill}>{domain}</div>
      <div className={styles.frameBarSpacer} />
    </div>
  )
}

function CardContent({ card }: { card: Card }) {
  return (
    <>
      <div className={styles.frame}>
        <FrameBar domain={card.domain} />
        <div className={styles.preview}>
          <div
            className={styles.panelFill}
            style={{ background: card.gradient }}
            aria-hidden="true"
          >
            <span className={styles.panelMono}>{card.mono}</span>
          </div>
          {card.live && (
            <span className={styles.liveBadge}>
              <span className={styles.liveDot} /> Live
            </span>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <span className={`${styles.tag} ${card.tagClass}`}>{card.tag}</span>
        <h3 className={styles.titleCard}>{card.title}</h3>
        <p className={styles.desc}>{card.desc}</p>
        {card.href && (
          <span className={styles.visitLink}>
            Visit site <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  )
}

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio" aria-labelledby="portfolio-heading">
      <div className={styles.head}>
        <p className={styles.eyebrow}>What we build</p>
        <span className="eyebrowRule" aria-hidden="true" />
        <h2 className={styles.title} id="portfolio-heading">
          Work that speaks for <span className="accentItalic">itself.</span>
        </h2>
        <p className={styles.sub}>
          Real client sites, live across the UK — fast, beautiful, and built to rank.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map(card =>
          card.href ? (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.cardLink}`}
            >
              <CardContent card={card} />
            </a>
          ) : (
            <article key={card.title} className={styles.card}>
              <CardContent card={card} />
            </article>
          ),
        )}

        <div className={styles.ctaCard}>
          <div className={styles.watermark} aria-hidden="true">
            YOUR PROJECT
          </div>
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <p className={styles.ctaTag}>Your business</p>
              <h3 className={styles.ctaTitle}>
                Your site could be <span className="accentItalic">next.</span>
              </h3>
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

      <div className={styles.viewMoreWrap}>
        <Link href="/work" className={styles.viewMoreBtn}>
          View case studies
        </Link>
      </div>
    </section>
  )
}
