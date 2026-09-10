import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Websites that actually perform',
  description:
    'QuantWeb builds high-performance websites and SEO foundations for ambitious businesses across South Wales and the UK.',
}

const projects = [
  { img: '/work-rs1.jpg', title: 'RS1 Capital', tag: 'Finance & Investment' },
  { img: '/work-scarlatt.jpg', title: 'Scarlatt Property Development', tag: 'Property & Development' },
  { img: '/work-boxedfresh.jpg', title: 'Boxed Fresh', tag: 'Food & E-commerce' },
  { img: '/work-ecoheat.jpg', title: 'EcoHeat', tag: 'Renewable Energy' },
  { img: '/work-jaggerz.jpg', title: 'Jaggerz', tag: 'Barbers & Local Business' },
]

export default function Home() {
  return (
    <div className="qwhome">
      <nav>
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="QuantWeb home">
            <img src="/qw-logo.svg" alt="" />
            <span>QuantWeb</span>
          </a>
          <div className="nav-links">
            <a href="#work">Our work</a>
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#location">Location</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="btn primary nav-cta" href="#contact">
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Web design &amp; SEO agency</div>
                <h1>
                  Websites that
                  <br />
                  <span className="blue">actually perform.</span>
                </h1>
                <p>We design and build high-performance websites that help ambitious businesses grow.</p>
                <div className="actions">
                  <a className="btn primary" href="#contact">
                    Start your project <span className="arrow">→</span>
                  </a>
                  <a className="btn secondary" href="#work">
                    View our work
                  </a>
                </div>
              </div>
              <div className="hero-art">
                <img src="/hero-laptop.jpg" alt="QuantWeb laptop showing the QW mark" />
              </div>
            </div>
            <div className="proof-grid">
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <strong>No monthly retainers</strong>
                  <small>Pay per job, no lock-in</small>
                </div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                </span>
                <div>
                  <strong>South Wales based</strong>
                  <small>Serving the whole UK</small>
                </div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>
                </span>
                <div>
                  <strong>98+ Lighthouse score</strong>
                  <small>On every single build</small>
                </div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /></svg>
                </span>
                <div>
                  <strong>Ongoing support</strong>
                  <small>We&apos;re with you for the long run.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work" id="work">
          <div className="container">
            <div className="section-top">
              <div className="eyebrow">Selected work</div>
              <a className="link-blue" href="/work">View all projects →</a>
            </div>
            <div className="work-grid">
              {projects.map((p) => (
                <article className="project" key={p.title}>
                  <div className="project-media" style={{ backgroundImage: `url('${p.img}')` }} />
                  <div className="project-body">
                    <h3>{p.title}</h3>
                    <p>{p.tag}</p>
                    <a className="mini-btn" href="/work">View project →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="results" id="why">
          <div className="container">
            <div className="results-grid">
              <div className="result-copy">
                <div className="eyebrow">High-performance web design</div>
                <h2>
                  Designed to
                  <br />
                  deliver real results.
                </h2>
                <p>
                  Beautiful websites, built for speed, SEO and real business growth. Every site we create is optimised
                  to perform — because a great website should do more than just look good.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <a className="btn primary" href="#services">Explore our services →</a>
                </div>
              </div>
              <div className="visual-stage">
                <div className="browser">
                  <div className="browser-top">
                    <i className="dot" />
                    <i className="dot" />
                    <i className="dot" />
                  </div>
                  <div className="browser-body">
                    <div className="browser-brand">
                      <img src="/qw-logo.svg" alt="" />
                      QuantWeb
                    </div>
                    <h3>
                      Your business.
                      <br />
                      next level.
                    </h3>
                    <p>Performance-first web design and SEO foundations engineered around measurable growth.</p>
                  </div>
                  <div className="score">
                    <div className="ring" />
                    <strong>Performance</strong>
                    <small>Google Lighthouse</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="container">
            <div className="services-head">
              <div>
                <div className="eyebrow">Services</div>
                <h2>
                  Everything you need
                  <br />
                  to grow online.
                </h2>
              </div>
              <p className="services-intro">
                From high-converting websites to ongoing SEO support, we offer a complete solution to help your business
                succeed online.
              </p>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                </div>
                <h3>Web Design &amp; Development</h3>
                <p>High-performance websites built to convert.</p>
                <a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="12" width="3.2" height="8" rx="1" /><rect x="10.4" y="7" width="3.2" height="13" rx="1" /><rect x="16.8" y="9.5" width="3.2" height="10.5" rx="1" /></svg>
                </div>
                <h3>SEO &amp; Performance</h3>
                <p>Rank higher. Stay there.</p>
                <a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3.2" /><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 01-4 0v-.1A1.6 1.6 0 006 19.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 004.4 15H4a2 2 0 010-4h.4A1.6 1.6 0 006 8.6l-.1-.1a2 2 0 112.8-2.8l.1.1A1.6 1.6 0 0011 4.4V4a2 2 0 014 0v.4a1.6 1.6 0 002.6 1.1l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8" /></svg>
                </div>
                <h3>Ongoing Support</h3>
                <p>Website changes, updates and support when you need it.</p>
                <a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                </div>
                <h3>Website Audits</h3>
                <p>Find opportunities and uncover what&apos;s holding you back.</p>
                <a className="link-blue" href="#contact">Learn more →</a>
              </article>
            </div>
          </div>
        </section>

        {/* PERFORMANCE */}
        <section className="performance">
          <div className="container">
            <div className="perf-grid">
              <div className="phone-stage">
                <img src="/phone-mockup.jpg" alt="QuantWeb performance dashboard on a phone" />
              </div>
              <div className="perf-copy">
                <div className="eyebrow">Speed. SEO. Results.</div>
                <h2>
                  Performance
                  <br />
                  built in.
                </h2>
                <p>
                  Every QuantWeb website is built with performance in mind — achieving 98+ Lighthouse scores as standard,
                  with clean code, optimised assets and best-in-class SEO foundations.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <a className="btn primary" href="#contact">See how we do it →</a>
                </div>
                <div className="metrics">
                  <div className="metric"><strong>98+</strong><span>Lighthouse score</span></div>
                  <div className="metric"><strong>100</strong><span>SEO score</span></div>
                  <div className="metric"><strong>100</strong><span>Best practices</span></div>
                  <div className="metric"><strong>100</strong><span>Accessibility</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location" id="location">
          <div className="container">
            <div className="location-grid">
              <div className="location-copy">
                <div className="eyebrow">South Wales roots. UK wide reach.</div>
                <h2>
                  Proudly based
                  <br />
                  in South Wales.
                </h2>
                <p>
                  We work with businesses in Cardiff, Swansea, Newport, Bridgend and across the UK, helping them grow
                  with effective, results-driven websites.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <a className="btn primary" href="#contact">Our story →</a>
                </div>
              </div>
              <div className="map-stage">
                <img src="/uk-map.png" alt="UK map highlighting QuantWeb's South Wales base and UK-wide reach" />
                <div className="location-pill">
                  <span className="pin" />
                  <span>
                    <strong>Based in South Wales</strong>
                    <br />
                    <span style={{ color: 'var(--muted)' }}>Working across the UK</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contact">
          <div className="container">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Ready to grow your business?</h2>
            <p>Get in touch today and let&apos;s create a website that actually performs.</p>
            <div className="actions">
              <a className="btn primary" href="mailto:hello@quantweb.co.uk">Start your project →</a>
              <a className="btn secondary" href="#work">View our work</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="faq">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top">
                <img src="/qw-logo.svg" alt="" />
                <span>QuantWeb</span>
              </a>
              <p className="footer-copy">Web design, SEO and high-performance websites for ambitious businesses.</p>
            </div>
            <div>
              <div className="footer-head">Quick links</div>
              <div className="footer-links">
                <a href="#work">Our work</a>
                <a href="#services">Services</a>
                <a href="#why">Why us</a>
                <a href="#location">Location</a>
                <a href="/work">FAQ</a>
              </div>
            </div>
            <div>
              <div className="footer-head">Get in touch</div>
              <div className="footer-links">
                <a href="mailto:hello@quantweb.co.uk">✉ &nbsp; hello@quantweb.co.uk</a>
                <span>☎ &nbsp; +44 0000 000000</span>
                <span>◎ &nbsp; South Wales, UK</span>
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
