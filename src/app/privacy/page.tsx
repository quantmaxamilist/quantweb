import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { business, SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy — QuantWeb',
  description: 'How QuantWeb collects, uses and protects the personal information you send through this website.',
  alternates: { canonical: `${SITE}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div className="qp">
      <SiteNav />
      <main id="top">
        <section className="work-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Privacy Policy</span></nav>
            <h1>Privacy Policy</h1>
            <p>Last updated November 2026.</p>
          </div>
        </section>
        <section style={{ paddingTop: 10 }}>
          <div className="container legal-doc">
            <h2>Who we are</h2>
            <p>This website is run by {business.legal} (&ldquo;QuantWeb&rdquo;, &ldquo;we&rdquo;). We are the data controller for personal information collected through it. Contact: <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
            <h2>What we collect</h2>
            <p>When you use our enquiry form we collect your name, email address, phone number (if given) and your message. We don&apos;t collect anything else through the site and we don&apos;t use advertising or analytics cookies.</p>
            <h2>How we use it</h2>
            <p>Only to reply to your enquiry, prepare a quote and, if you become a client, deliver your project. Our lawful basis is legitimate interests (answering a request you made) and, for clients, performing a contract. We never sell your details or add you to a mailing list.</p>
            <h2>Who processes it for us</h2>
            <ul>
              <li><strong>Web3Forms</strong> — delivers form submissions to our inbox.</li>
              <li><strong>Vercel</strong> — hosts this website and keeps standard server logs for security.</li>
            </ul>
            <h2>How long we keep it</h2>
            <p>Enquiries that don&apos;t become projects are deleted within 12 months. Client records are kept for as long as the law requires for tax and accounting.</p>
            <h2>Your rights</h2>
            <p>You can ask to see, correct or delete the information we hold about you, or object to how we use it, by emailing <a href={`mailto:${business.email}`}>{business.email}</a>. If you&apos;re unhappy with how we&apos;ve handled your data you can complain to the Information Commissioner&apos;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.</p>
            <h2>Cookies</h2>
            <p>This site only uses what&apos;s strictly needed for it to work. It sets no tracking, analytics or advertising cookies, so there&apos;s no cookie banner.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
