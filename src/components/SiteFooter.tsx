import { business, google, regions } from '@/data/site'

export default function SiteFooter() {
  return (
    <footer>
      <div className="wide">
        <div className="fg">
          <div>
            <img src="/qw-logo.svg" alt="QuantWeb" style={{ height: 34, width: 'auto' }} />
            <a className="ct" href={`mailto:${business.email}`}><i>✉</i>{business.email}</a>
            <div className="ct"><i>◎</i>South Wales · UK wide</div>
          </div>
          <div className="col"><h4>Services</h4><a href="/work">Web design</a><a href="/#services">Web platforms &amp; apps</a><a href="/web-design">Local SEO &amp; AI search</a><a href="/#services">Hosting &amp; support</a><a href="/#contact">Website audits</a></div>
          <div className="col"><h4>Areas</h4>{regions.filter((r) => r.slug !== 'south-west-wales').map((r) => <a key={r.slug} href={`/web-design/${r.slug}`}>{r.name}</a>)}<a href="/web-design/pembrokeshire">Pembrokeshire</a><a href="/web-design/carmarthenshire">Carmarthenshire</a><a href="/web-design">All areas</a></div>
          <div className="col"><h4>Resources</h4><a href="/#faq">Website costs</a><a href="/work">Case studies</a><a href={google.url} target="_blank" rel="noopener">Google reviews</a><a href="/llms.txt">llms.txt</a></div>
          <div className="col"><h4>Company</h4><a href="/work">Our work</a><a href="/#about">About</a><a href="/#contact">Contact</a><a href="/privacy">Privacy Policy</a></div>
        </div>
        <div className="fb">
          <div className="soc"><a href={business.instagram} target="_blank" rel="noopener">Instagram</a><a href={google.url} target="_blank" rel="noopener">Google</a></div>
          <span>© {new Date().getFullYear()} QuantWeb</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
