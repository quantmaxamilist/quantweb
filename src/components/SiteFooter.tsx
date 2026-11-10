import { towns, google, business } from '@/data/site'

const top = ['haverfordwest', 'tenby', 'carmarthen', 'llanelli', 'aberystwyth', 'swansea', 'neath', 'bridgend', 'cardiff', 'pontypridd', 'newport', 'abergavenny']

export default function SiteFooter() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid footer-grid--4">
          <div>
            <a className="brand" href="/"><img src="/qw-logo.svg" alt="" /><span>QuantWeb</span></a>
            <p className="footer-copy">Web design, SEO and high-performance websites for ambitious businesses across South &amp; West Wales and the UK.</p>
          </div>
          <div>
            <div className="footer-head">Quick links</div>
            <div className="footer-links">
              <a href="/work">Our work</a>
              <a href="/#services">Services</a>
              <a href="/#faq">FAQ</a>
              <a href={google.url} target="_blank" rel="noopener">Google reviews</a>
              <a href={google.writeUrl} target="_blank" rel="noopener">Leave a review</a>
            </div>
          </div>
          <div>
            <div className="footer-head">Web design in</div>
            <div className="footer-links footer-links--2">
              {towns.filter((t) => top.includes(t.slug)).map((t) => <a key={t.slug} href={`/web-design/${t.slug}`}>{t.name}</a>)}
              <a href="/web-design/west-wales">West Wales</a>
              <a href="/web-design/south-wales">South Wales</a>
              <a href="/web-design">All areas →</a>
            </div>
          </div>
          <div>
            <div className="footer-head">Get in touch</div>
            <div className="footer-links">
              <a href={`mailto:${business.email}`}>✉ &nbsp; {business.email}</a>
              <a href={business.instagram} target="_blank" rel="noopener">Instagram @quantweb.studio</a>
              <span>◎ &nbsp; Pembrokeshire · South &amp; West Wales</span>
              <a href="/#contact">Start your project →</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} QuantWeb. All rights reserved.</span>
          <span>Modern. Trusted. High performance.</span>
        </div>
      </div>
    </footer>
  )
}
