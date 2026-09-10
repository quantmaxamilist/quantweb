import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

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

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'A professional business website typically costs between £350 and £8,000 depending on complexity. At QuantWeb, pricing starts from £350 for a clean, fast, fully optimised site — with no monthly retainers.',
  },
  {
    q: 'How long does SEO take to work?',
    a: 'Local SEO can show movement within 6–8 weeks. Competitive UK-wide rankings typically take 3–6 months. We focus on quick local wins first, then build long-term authority.',
  },
  {
    q: 'Do you work with businesses outside South Wales?',
    a: 'Yes — while based in South Wales, we work with businesses across the UK. All project work runs remotely with regular calls and clear communication throughout.',
  },
  {
    q: 'What makes QuantWeb different?',
    a: 'We combine web design and SEO under one roof, and hand-code every site for performance — 98+ Lighthouse as standard. You deal directly with the person building your site, with no lock-in.',
  },
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
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
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
              <div className="hero-copy reveal">
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
              <div className="hero-art reveal">
                <img src="/hero-laptop.jpg" alt="QuantWeb laptop showing the QW mark" />
              </div>
            </div>
            <div className="proof-grid reveal">
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div><strong>No monthly retainers</strong><small>Pay per job, no lock-in</small></div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                </span>
                <div><strong>South Wales based</strong><small>Serving the whole UK</small></div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>
                </span>
                <div><strong>98+ Lighthouse score</strong><small>On every single build</small></div>
              </div>
              <div className="proof">
                <span className="iconbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /></svg>
                </span>
                <div><strong>Ongoing support</strong><small>We&apos;re with you for the long run.</small></div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work" id="work">
          <div className="container">
            <div className="section-top reveal">
              <div className="eyebrow">Selected work</div>
              <a className="link-blue" href="/work">View all projects →</a>
            </div>
            <div className="work-grid reveal">
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
        <section className="results" id="results">
          <div className="container">
            <div className="results-grid">
              <div className="result-copy reveal">
                <div className="eyebrow">High-performance web design</div>
                <h2>Designed to<br />deliver real results.</h2>
                <p>
                  Beautiful websites, built for speed, SEO and real business growth. Every site we create is optimised
                  to perform — because a great website should do more than just look good.
                </p>
                <div style={{ marginTop: '22px' }}>
                  <a className="btn primary" href="#services">Explore our services →</a>
                </div>
              </div>
              <div className="visual-stage reveal">
                <div className="score-card">
                  <div className="ring" />
                  <strong>Performance</strong>
                  <small>Google Lighthouse — every build</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="services" id="what">
          <div className="container">
            <div className="services-head reveal">
              <div><div className="eyebrow">What we do</div><h2>From idea<br />to impact.</h2></div>
              <p className="services-intro">A streamlined process built around your goals — designed, built and optimised to rank.</p>
            </div>
            <div className="trio reveal">
              <article className="service-card"><div className="step-num">01 — DESIGN</div><h3>Design</h3><p>Clean, on-brand and conversion-focused — designed around your goals, never a template.</p></article>
              <article className="service-card"><div className="step-num">02 — BUILD</div><h3>Build</h3><p>Hand-coded and lightning fast, mobile-first, with 98+ Lighthouse scores as standard.</p></article>
              <article className="service-card"><div className="step-num">03 — RANK</div><h3>Rank</h3><p>SEO foundations baked in from day one, so the right people actually find you.</p></article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="services-head reveal">
              <div><div className="eyebrow">Services</div><h2>Everything you need<br />to grow online.</h2></div>
              <p className="services-intro">From high-converting websites to ongoing SEO support, we offer a complete solution to help your business succeed online.</p>
            </div>
            <div className="service-grid reveal">
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                <h3>Web Design &amp; Development</h3><p>High-performance websites built to convert.</p><a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="12" width="3.2" height="8" rx="1" /><rect x="10.4" y="7" width="3.2" height="13" rx="1" /><rect x="16.8" y="9.5" width="3.2" height="10.5" rx="1" /></svg></div>
                <h3>SEO &amp; Performance</h3><p>Rank higher. Stay there.</p><a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3.2" /><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 01-4 0v-.1A1.6 1.6 0 006 19.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 004.4 15H4a2 2 0 010-4h.4A1.6 1.6 0 006 8.6l-.1-.1a2 2 0 112.8-2.8l.1.1A1.6 1.6 0 0011 4.4V4a2 2 0 014 0v.4a1.6 1.6 0 002.6 1.1l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8" /></svg></div>
                <h3>Ongoing Support</h3><p>Website changes, updates and support when you need it.</p><a className="link-blue" href="#contact">Learn more →</a>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg></div>
                <h3>Website Audits</h3><p>Find opportunities and uncover what&apos;s holding you back.</p><a className="link-blue" href="#contact">Learn more →</a>
              </article>
            </div>
          </div>
        </section>

        {/* PERFORMANCE */}
        <section className="performance">
          <div className="container">
            <div className="perf-grid">
              <div className="phone-stage reveal"><img src="/phone-mockup.jpg" alt="QuantWeb performance dashboard on a phone" /></div>
              <div className="perf-copy reveal">
                <div className="eyebrow">Speed. SEO. Results.</div>
                <h2>Performance<br />built in.</h2>
                <p>Every QuantWeb website is built with performance in mind — achieving 98+ Lighthouse scores as standard, with clean code, optimised assets and best-in-class SEO foundations.</p>
                <div style={{ marginTop: '20px' }}><a className="btn primary" href="#contact">See how we do it →</a></div>
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

        {/* WHY QUANTWEB */}
        <section className="services" id="why">
          <div className="container">
            <div className="services-head reveal">
              <div><div className="eyebrow">Why QuantWeb</div><h2>Why businesses<br />choose us.</h2></div>
              <p className="services-intro">Performance, honesty and results — without the agency bloat or lock-in contracts.</p>
            </div>
            <div className="service-grid reveal">
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg></div>
                <h3>Built for performance</h3><p>Hand-coded, not page-builder bloat — 98+ Lighthouse on every build.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 6 9 17l-5-5" /></svg></div>
                <h3>No monthly retainers</h3><p>Pay per project, no lock-in. You own everything we build.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg></div>
                <h3>SEO from day one</h3><p>Design, code and content aligned to rank from launch — not bolted on later.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg></div>
                <h3>Local &amp; personal</h3><p>South Wales based — you deal directly with the person building your site.</p>
              </article>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location" id="location">
          <div className="container">
            <div className="location-grid">
              <div className="location-copy reveal">
                <div className="eyebrow">South Wales roots. UK wide reach.</div>
                <h2>Proudly based<br />in South Wales.</h2>
                <p>We work with businesses in Cardiff, Swansea, Newport, Bridgend and across the UK, helping them grow with effective, results-driven websites.</p>
                <div style={{ marginTop: '20px' }}><a className="btn primary" href="#contact">Start your project →</a></div>
              </div>
              <div className="map-stage reveal">
                <img src="/uk-map.png" alt="UK map highlighting QuantWeb's South Wales base and UK-wide reach" />
                <div className="location-pill"><span className="pin" /><span><strong>Based in South Wales</strong><br /><span style={{ color: 'var(--muted)' }}>Working across the UK</span></span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="services-head reveal">
              <div><div className="eyebrow">FAQ</div><h2>Questions,<br />answered.</h2></div>
              <p className="services-intro">The things businesses most often ask before starting a project with us.</p>
            </div>
            <div className="faq-list reveal">
              {faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + QUOTE FORM */}
        <section className="cta" id="contact">
          <div className="container reveal">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Ready to grow your business?</h2>
            <p>Drop your email and we&apos;ll be in touch within one business day with a clear plan and quote.</p>
            <ContactForm />
            <p className="cta-alt">Prefer email? <a href="mailto:admin@quantweb.co.uk">admin@quantweb.co.uk</a></p>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top"><img src="/qw-logo.svg" alt="" /><span>QuantWeb</span></a>
              <p className="footer-copy">Web design, SEO and high-performance websites for ambitious businesses across South Wales and the UK.</p>
            </div>
            <div>
              <div className="footer-head">Quick links</div>
              <div className="footer-links">
                <a href="#work">Our work</a>
                <a href="#services">Services</a>
                <a href="#why">Why us</a>
                <a href="#faq">FAQ</a>
                <a href="/work">Case studies</a>
              </div>
            </div>
            <div>
              <div className="footer-head">Get in touch</div>
              <div className="footer-links">
                <a href="mailto:admin@quantweb.co.uk">✉ &nbsp; admin@quantweb.co.uk</a>
                <span>◎ &nbsp; South Wales, UK</span>
                <a href="#contact">Start your project →</a>
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
