import type { Metadata } from 'next'
import { caseStudies } from '@/data/caseStudies'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Our Work — QuantWeb',
  description:
    'Real client websites designed, built and shipped by QuantWeb — high-performance web design and SEO for businesses across South Wales and the UK.',
  alternates: { canonical: 'https://www.quantweb.co.uk/work' },
}

const sectors: Record<string, string> = {
  rs1: 'Finance & Investment',
  scarlatt: 'Property & Renovation',
  'boxed-fresh': 'Food & E-commerce',
  ecoheat: 'Renewable Energy',
  jaggerz: 'Food & Takeaway',
}

const shots: Record<string, string> = {
  rs1: '/work-rs1.jpg',
  scarlatt: '/work-scarlatt.jpg',
  'boxed-fresh': '/work-boxedfresh.jpg',
  ecoheat: '/work-ecoheat.jpg',
  jaggerz: '/work-jaggerz.jpg',
}

export default function WorkPage() {
  return (
    <div className="qwhome">
      <nav>
        <div className="nav-inner">
          <a className="brand" href="/" aria-label="QuantWeb home">
            <img src="/qw-logo.svg" alt="" />
            <span>QuantWeb</span>
          </a>
          <div className="nav-links">
            <a href="/work">Our work</a>
            <a href="/#services">Services</a>
            <a href="/#why">Why us</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Contact</a>
          </div>
          <a className="btn primary nav-cta" href="/#contact">
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="work-hero">
          <div className="container">
            <div className="eyebrow">Our work</div>
            <h1>
              Websites that
              <br />
              <span className="blue">actually perform.</span>
            </h1>
            <p>
              Real client sites we&apos;ve designed, built and shipped — for ambitious businesses across South Wales and
              the UK.
            </p>
          </div>
        </section>

        <section className="work-body" style={{ borderBottom: 'none' }}>
          <div className="container">
            <div className="case-list">
              {caseStudies.map((cs) => (
                <article className="case-card reveal" key={cs.id}>
                  <div className="case-media" style={{ backgroundImage: `url('${shots[cs.id] ?? ''}')` }} />
                  <div className="case-body">
                    <div className="eyebrow">{sectors[cs.id] ?? cs.subtitle}</div>
                    <h3>
                      {cs.title} {cs.accentWord && <span className="accent">{cs.accentWord}</span>}
                    </h3>
                    <p>{cs.challenge}</p>
                    <div className="case-tags">
                      {cs.services.slice(0, 5).map((s) => (
                        <span className="case-tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="case-actions">
                      <a className="btn primary" href={cs.url} target="_blank" rel="noopener noreferrer">
                        Visit live site ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container reveal">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Ready to grow your business?</h2>
            <p>Drop your email and we&apos;ll be in touch within one business day with a clear plan and quote.</p>
            <ContactForm />
            <p className="cta-alt">
              Prefer email? <a href="mailto:admin@quantweb.co.uk">admin@quantweb.co.uk</a>
            </p>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="/">
                <img src="/qw-logo.svg" alt="" />
                <span>QuantWeb</span>
              </a>
              <p className="footer-copy">
                Web design, SEO and high-performance websites for ambitious businesses across South Wales and the UK.
              </p>
            </div>
            <div>
              <div className="footer-head">Quick links</div>
              <div className="footer-links">
                <a href="/work">Our work</a>
                <a href="/#services">Services</a>
                <a href="/#why">Why us</a>
                <a href="/#faq">FAQ</a>
              </div>
            </div>
            <div>
              <div className="footer-head">Get in touch</div>
              <div className="footer-links">
                <a href="mailto:admin@quantweb.co.uk">✉ &nbsp; admin@quantweb.co.uk</a>
                <span>◎ &nbsp; South Wales, UK</span>
                <a href="/#contact">Start your project →</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 QuantWeb. All rights reserved.</span>
            <span>Modern. Trusted. High performance.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
