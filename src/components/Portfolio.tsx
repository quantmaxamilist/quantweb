import Link from 'next/link'
import type { CSSProperties } from 'react'
import styles from './Portfolio.module.css'

function solidPreviewRoot(bg: string): CSSProperties {
  return {
    width: '100%',
    minHeight: '800px',
    backgroundColor: bg,
    display: 'flex',
    flexDirection: 'column',
  }
}

const bladeGridRoot: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
  minHeight: '800px',
}

const bladeColLeft: CSSProperties = {
  backgroundColor: '#f7f4ef',
  minHeight: '800px',
  display: 'flex',
  flexDirection: 'column',
}

const bladeColRight: CSSProperties = {
  backgroundColor: '#1a1a1a',
  minHeight: '800px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

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
          Hover to preview. Every site we build is fast, beautiful, and built to rank.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Card 1 — Apex */}
        <article className={`${styles.card} ${styles.cardApex}`}>
          <div className={`${styles.watermark} ${styles.wmApex}`}>APEX</div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagApex}`}>Fitness &amp; Wellness</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Apex Fitness</h3>
            <p className={`${styles.cardDesc} ${styles.descLight}`}>
              High-energy dark design for a premium South Wales gym. Membership-first conversion flow.
            </p>
          </div>
          <div className={styles.preview}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200%',
                height: '200%',
                transform: 'scale(0.5)',
                transformOrigin: '0 0',
              }}
            >
              <div className={styles.apexRoot} style={solidPreviewRoot('#0d0d0d')}>
                <nav className={styles.apexNav}>
                  <span>
                    APEX<span className={styles.apexLogoDot}>.</span>
                  </span>
                  <span className={styles.apexNavHint}>JOIN</span>
                </nav>
                <div className={styles.apexHero}>
                  <div>
                    <div className={styles.apexHeadline}>
                      Train Like You <span>Mean It.</span>
                    </div>
                  </div>
                  <div className={styles.apexStats}>
                    <div className={styles.apexStat}>
                      <div className={styles.apexStatNum}>2,400+</div>
                      <div className={styles.apexStatLabel}>Members</div>
                    </div>
                    <div className={styles.apexStat}>
                      <div className={styles.apexStatNum}>48</div>
                      <div className={styles.apexStatLabel}>Classes/week</div>
                    </div>
                    <div className={styles.apexStat}>
                      <div className={styles.apexStatNum}>£29</div>
                      <div className={styles.apexStatLabel}>Per month</div>
                    </div>
                    <div className={styles.apexStat}>
                      <div className={styles.apexStatNum}>5★</div>
                      <div className={styles.apexStatLabel}>Google rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card 2 — Ember */}
        <article className={`${styles.card} ${styles.cardEmber}`}>
          <div className={`${styles.watermark} ${styles.wmEmber}`}>EMBER</div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagEmber}`}>Hospitality &amp; Dining</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Ember Restaurant</h3>
            <p className={`${styles.cardDesc} ${styles.descLight}`}>
              Dark luxury editorial design for a Cardiff fine dining restaurant. Reservation-focused.
            </p>
          </div>
          <div className={styles.preview}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200%',
                height: '200%',
                transform: 'scale(0.5)',
                transformOrigin: '0 0',
              }}
            >
              <div className={styles.emberRoot} style={solidPreviewRoot('#0c0905')}>
                <nav className={styles.emberNav}>EMBER</nav>
                <div className={styles.emberHero}>
                  <h4 className={styles.emberH1}>
                    Where fire meets <span>flavour.</span>
                  </h4>
                  <p className={styles.emberSub}>Seasonal tasting menus · Open flame kitchen</p>
                  <div className={styles.emberCta}>Reserve a table</div>
                  <div className={styles.emberDishes}>
                    <div className={styles.emberDish}>
                      Flame-seared scallops
                      <div className={styles.emberPrice}>£16</div>
                    </div>
                    <div className={styles.emberDish}>
                      28-day aged ribeye
                      <div className={styles.emberPrice}>£42</div>
                    </div>
                    <div className={styles.emberDish}>
                      Burnt honey tart
                      <div className={styles.emberPrice}>£11</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card 3 — Haven */}
        <article className={`${styles.card} ${styles.cardHaven}`}>
          <div className={`${styles.watermark} ${styles.wmHaven}`}>HAVEN</div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagHaven}`}>Luxury Property</span>
            <h3 className={`${styles.cardTitle} ${styles.titleLight}`}>Haven Property</h3>
            <p className={`${styles.cardDesc} ${styles.descLight}`}>
              Light luxury estate agency site. Warm stone palette, premium listings, valuation-focused.
            </p>
          </div>
          <div className={styles.preview}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200%',
                height: '200%',
                transform: 'scale(0.5)',
                transformOrigin: '0 0',
              }}
            >
              <div className={styles.havenRoot} style={solidPreviewRoot('#f5f4f0')}>
                <nav className={styles.havenNav}>Haven Property</nav>
                <div className={styles.havenHero}>
                  <div>
                    <h4 className={styles.havenH1}>
                      Find your <span>perfect</span> home.
                    </h4>
                  </div>
                  <div className={styles.havenGrid}>
                    <div className={`${styles.havenPh} ${styles.havenPh1}`}>Cardiff Bay</div>
                    <div className={`${styles.havenPh} ${styles.havenPh2}`}>Penarth</div>
                    <div className={`${styles.havenPh} ${styles.havenPh3}`}>Cowbridge</div>
                    <div className={`${styles.havenPh} ${styles.havenPh4}`}>Pontcanna</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Card 4 — Blade */}
        <article className={`${styles.card} ${styles.cardBlade}`}>
          <div className={`${styles.watermark} ${styles.wmBlade}`}>BLADE</div>
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.default}>
            <span className={`${styles.tag} ${styles.tagBlade}`}>Grooming &amp; Barbershop</span>
            <h3 className={`${styles.cardTitle} ${styles.titleDark}`}>Blade &amp; Co.</h3>
            <p className={`${styles.cardDesc} ${styles.descDark}`}>
              Editorial cream and black luxury barber site. Serif typography, heritage feel, online booking.
            </p>
          </div>
          <div className={styles.preview}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '200%',
                height: '200%',
                transform: 'scale(0.5)',
                transformOrigin: '0 0',
              }}
            >
              <div className={styles.bladeRoot} style={bladeGridRoot}>
                <div style={bladeColLeft}>
                  <nav className={styles.bladeNav}>Blade &amp; Co.</nav>
                  <div className={styles.bladeLeft}>
                    <h4 className={styles.bladeH1}>The art of the perfect cut.</h4>
                  </div>
                  <div className={styles.bladeQuote}>
                    &ldquo;A great haircut isn&apos;t a luxury. It&apos;s a statement.&rdquo;
                  </div>
                </div>
                <div style={bladeColRight}>
                  <div className={styles.bladeRight}>
                    <div className={styles.bladeRow}>
                      <span className={styles.bladeSvc}>The Classic Cut</span>
                      <span className={styles.bladePrice}>£28</span>
                    </div>
                    <div className={styles.bladeRow}>
                      <span className={styles.bladeSvc}>Cut &amp; Beard Trim</span>
                      <span className={styles.bladePrice}>£38</span>
                    </div>
                    <div className={styles.bladeRow}>
                      <span className={styles.bladeSvc}>Hot Towel Shave</span>
                      <span className={styles.bladePrice}>£32</span>
                    </div>
                    <div className={styles.bladeRow}>
                      <span className={styles.bladeSvc}>The Full Works</span>
                      <span className={styles.bladePrice}>£55</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Full-width CTA */}
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
