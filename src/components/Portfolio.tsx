import type { ReactNode } from 'react'
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

function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <div className={styles.dots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <div className={styles.urlBar}>
          <span className={styles.urlText}>{url}</span>
        </div>
      </div>
      {children}
    </div>
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
          Every site we build is fast, beautiful, and built to rank.
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.mockupWrapper}>
            <BrowserChrome url="apexfitness.co.uk">
              <div className={`${styles.screen} ${styles.screenApex}`}>
                <div className={styles.navApex}>
                  <div className={styles.logoApex}>
                    APEX<span>.</span>
                  </div>
                  <span className={styles.btnLime}>Join now</span>
                </div>
                <div className={styles.heroApex}>
                  <div className={styles.heroLeftApex}>
                    <span className={styles.eyebrowApex}>South Wales Premier Gym</span>
                    <h3 className={styles.h1Apex}>
                      Train Like You <em>Mean It.</em>
                    </h3>
                    <span className={styles.ctaApex}>Start free trial</span>
                  </div>
                  <div className={styles.statsApex}>
                    <div className={styles.statApex}>
                      <span className={styles.statNum}>2,400+</span>
                      <span className={styles.statLabel}>Members</span>
                    </div>
                    <div className={styles.statApex}>
                      <span className={styles.statNum}>48</span>
                      <span className={styles.statLabel}>Classes/wk</span>
                    </div>
                    <div className={styles.statApex}>
                      <span className={styles.statNum}>£29</span>
                      <span className={styles.statLabel}>Per month</span>
                    </div>
                    <div className={styles.statApex}>
                      <span className={styles.statNum}>5★</span>
                      <span className={styles.statLabel}>Rating</span>
                    </div>
                  </div>
                </div>
                <div className={styles.servicesApex}>
                  <div className={styles.svcApex}>
                    <div className={styles.svcTitleApex}>Strength Training</div>
                    <p className={styles.svcDescApex}>Progressive overload programmes and expert coaching.</p>
                  </div>
                  <div className={styles.svcApex}>
                    <div className={styles.svcTitleApex}>Group Classes</div>
                    <p className={styles.svcDescApex}>HIIT, spin, and conditioning sessions all week.</p>
                  </div>
                  <div className={styles.svcApex}>
                    <div className={styles.svcTitleApex}>Personal Training</div>
                    <p className={styles.svcDescApex}>One-to-one plans tailored to your goals.</p>
                  </div>
                </div>
              </div>
            </BrowserChrome>
          </div>
          <div className={styles.gradient} aria-hidden="true" />
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.info}>
            <span className={`${styles.tag} ${styles.tagApex}`}>Fitness &amp; wellness</span>
            <h3 className={styles.titleCard}>Apex Fitness</h3>
            <p className={styles.desc}>High-energy dark gym site. Membership-first conversion flow.</p>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.mockupWrapper}>
            <BrowserChrome url="emberrestaurant.co.uk">
              <div className={`${styles.screen} ${styles.screenEmber}`}>
                <div className={styles.navEmber}>
                  <div className={styles.logoEmber}>
                    EM<span>B</span>ER
                  </div>
                  <span className={styles.btnOutlineGold}>Reserve</span>
                </div>
                <div className={styles.heroEmber}>
                  <p className={styles.eyebrowEmber}>Cardiff · Est. 2019</p>
                  <h3 className={styles.h1Ember}>
                    Where fire meets <em>flavour.</em>
                  </h3>
                  <p className={styles.subEmber}>
                    Seasonal plates, open flame, and an intimate dining room in the heart of the city.
                  </p>
                  <span className={styles.ctaGold}>Reserve a table</span>
                </div>
                <div className={styles.dishesEmber}>
                  <div className={styles.dishCard}>
                    <div className={styles.dishCat}>Starter</div>
                    <p className={styles.dishName}>Flame-seared scallops £16</p>
                  </div>
                  <div className={styles.dishCard}>
                    <div className={styles.dishCat}>Mains</div>
                    <p className={styles.dishName}>28-day aged ribeye £42</p>
                  </div>
                  <div className={styles.dishCard}>
                    <div className={styles.dishCat}>Dessert</div>
                    <p className={styles.dishName}>Burnt honey tart £11</p>
                  </div>
                </div>
              </div>
            </BrowserChrome>
          </div>
          <div className={styles.gradient} aria-hidden="true" />
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.info}>
            <span className={`${styles.tag} ${styles.tagEmber}`}>Hospitality &amp; dining</span>
            <h3 className={styles.titleCard}>Ember Restaurant</h3>
            <p className={styles.desc}>Dark luxury editorial design. Reservation-focused conversion flow.</p>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.mockupWrapper}>
            <BrowserChrome url="havenproperty.co.uk">
              <div className={`${styles.screen} ${styles.screenHaven}`}>
                <div className={styles.navHaven}>
                  <div className={styles.logoHaven}>Haven Property</div>
                  <span className={styles.btnDark}>Book valuation</span>
                </div>
                <div className={styles.heroHaven}>
                  <div className={styles.heroLeftHaven}>
                    <span className={styles.tagHavenScreen}>South Wales · Premium</span>
                    <h3 className={styles.h1Haven}>
                      Find your <em>perfect</em> home.
                    </h3>
                    <span className={styles.ctaHaven}>Book valuation</span>
                  </div>
                  <div className={styles.gridHaven}>
                    <div className={`${styles.cellHaven} ${styles.g1}`}>
                      <span>Cardiff Bay</span>
                    </div>
                    <div className={`${styles.cellHaven} ${styles.g2}`}>
                      <span>Penarth</span>
                    </div>
                    <div className={`${styles.cellHaven} ${styles.g3}`}>
                      <span>Cowbridge</span>
                    </div>
                    <div className={`${styles.cellHaven} ${styles.g4}`}>
                      <span>Pontcanna</span>
                    </div>
                  </div>
                </div>
                <div className={styles.propsHaven}>
                  <div className={styles.propCard}>
                    <div className={styles.propLoc}>Cardiff Bay</div>
                    <p className={styles.propTitle}>The Waterfront £875,000</p>
                  </div>
                  <div className={styles.propCard}>
                    <div className={styles.propLoc}>Penarth</div>
                    <p className={styles.propTitle}>Harbour View £1,200,000</p>
                  </div>
                  <div className={styles.propCard}>
                    <div className={styles.propLoc}>Cowbridge</div>
                    <p className={styles.propTitle}>The Manor £2,450,000</p>
                  </div>
                </div>
              </div>
            </BrowserChrome>
          </div>
          <div className={styles.gradient} aria-hidden="true" />
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.info}>
            <span className={`${styles.tag} ${styles.tagHaven}`}>Luxury property</span>
            <h3 className={styles.titleCard}>Haven Property</h3>
            <p className={styles.desc}>Light luxury estate agency. Premium listings, valuation-focused.</p>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.mockupWrapper}>
            <BrowserChrome url="bladeandco.co.uk">
              <div className={`${styles.screen} ${styles.screenBlade}`}>
                <div className={styles.bladeTop}>
                  <div className={styles.logoBladeNav}>BLADE &amp; CO.</div>
                  <span className={styles.btnBladeNav}>Book now</span>
                </div>
                <div className={styles.bladeCols}>
                  <div className={styles.bladeLeft}>
                    <p className={styles.eyebrowBlade}>Est. 1922 · Cardiff Wales</p>
                    <h3 className={styles.h1Blade}>
                      The art of <strong>the perfect cut.</strong>
                    </h3>
                    <p className={styles.quoteBlade}>
                      A great haircut isn&apos;t a luxury. It&apos;s a statement.
                    </p>
                  </div>
                  <div className={styles.bladeRight}>
                    <div className={styles.svcLabelBlade}>Our Services</div>
                    <div className={styles.svcRow}>
                      <span className={styles.svcNameBlade}>The Classic Cut</span>
                      <span className={styles.svcPriceBlade}>£28</span>
                    </div>
                    <div className={styles.svcRow}>
                      <span className={styles.svcNameBlade}>Cut &amp; Beard Trim</span>
                      <span className={styles.svcPriceBlade}>£38</span>
                    </div>
                    <div className={styles.svcRow}>
                      <span className={styles.svcNameBlade}>Hot Towel Shave</span>
                      <span className={styles.svcPriceBlade}>£32</span>
                    </div>
                    <div className={styles.svcRow}>
                      <span className={styles.svcNameBlade}>The Full Works</span>
                      <span className={styles.svcPriceBlade}>£55</span>
                    </div>
                  </div>
                </div>
                <div className={styles.bladeBottom}>
                  <p className={styles.quoteStrip}>
                    A great haircut isn&apos;t a luxury. It&apos;s a statement.
                  </p>
                  <div className={styles.pillsBlade}>
                    <span className={styles.pillBlade}>Walk-ins welcome</span>
                    <span className={styles.pillBlade}>4.9 ★ Google</span>
                    <span className={styles.pillBlade}>Cardiff centre</span>
                    <span className={styles.pillBlade}>Online booking</span>
                  </div>
                </div>
              </div>
            </BrowserChrome>
          </div>
          <div className={styles.gradient} aria-hidden="true" />
          <div className={styles.arrow} aria-hidden="true">
            <ArrowIcon />
          </div>
          <div className={styles.info}>
            <span className={`${styles.tag} ${styles.tagBlade}`}>Grooming &amp; barbershop</span>
            <h3 className={styles.titleCard}>Blade &amp; Co.</h3>
            <p className={styles.desc}>
              Editorial cream and black luxury barber. Serif typography, heritage feel.
            </p>
          </div>
        </article>

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
