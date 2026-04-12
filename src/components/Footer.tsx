import Link from 'next/link'
import Logo from './Logo'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>

          <div>
            <div className={styles.brand}>
              <Logo />
            </div>
            <p className={styles.tagline}>
              Beautiful websites and SEO that gets you found.<br />South Wales &amp; UK.
            </p>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.links} role="list">
              <li><Link href="#services">Web Design</Link></li>
              <li><Link href="#services">SEO</Link></li>
              <li><Link href="#services">Performance Audits</Link></li>
              <li><Link href="#services">Updates & Changes</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.links} role="list">
              <li><Link href="#why-us">Why QuantWeb</Link></li>
              <li><Link href="#location">Location</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <ul className={styles.links} role="list">
              <li><a href="mailto:admin@quantweb.co.uk">admin@quantweb.co.uk</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} QuantWeb Studio. All rights reserved.
          </p>
          <ul className={styles.legal} role="list">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
