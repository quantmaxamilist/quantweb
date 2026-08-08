import Nav from '@/components/Nav'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import Portfolio from '@/components/Portfolio'
import WhyUs from '@/components/WhyUs'
import Location from '@/components/Location'
import Faq from '@/components/Faq'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <Ticker />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <OurWork />
        <Portfolio />
        <WhyUs />
        <Location />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
