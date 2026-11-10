export default function SiteNav() {
  return (
    <nav>
      <div className="nav-inner">
        <a className="brand" href="/" aria-label="QuantWeb home">
          <img src="/qw-logo.svg" alt="" />
          <span>QuantWeb</span>
        </a>
        <div className="nav-links">
          <a href="/work">Our work</a>
          <a href="/#services">Services</a>
          <a href="/web-design">Areas</a>
          <a href="/#reviews">Reviews</a>
          <a href="/#faq">FAQ</a>
        </div>
        <a className="btn primary nav-cta" href="/#contact">
          Get in touch <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  )
}
