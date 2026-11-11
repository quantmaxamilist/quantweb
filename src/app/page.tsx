import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import QuoteForm from '@/components/QuoteForm'
import HomeScripts from '@/components/HomeScripts'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="top">
      {/* HERO */}
      <section className="hero"><div className="hero-stage">
        <svg className="lines" viewBox="0 0 1180 620" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="lg" x1="0" x2="1"><stop offset="0" stopColor="#4d94ff" stopOpacity=".05" /><stop offset=".5" stopColor="#4d94ff" stopOpacity=".75" /><stop offset="1" stopColor="#4d94ff" stopOpacity=".05" /></linearGradient></defs>
          <path d="M60 110 C220 110 260 300 310 300" /><path d="M40 250 C200 250 240 330 310 330" /><path d="M60 420 C200 420 250 360 310 360" /><path d="M90 560 C230 560 260 390 310 390" />
          <path d="M1120 110 C960 110 920 300 870 300" /><path d="M1140 250 C980 250 940 330 870 330" /><path d="M1120 420 C980 420 930 360 870 360" /><path d="M1090 560 C950 560 920 390 870 390" />
        </svg>
        <div className="trust"><span>Trusted by</span><div className="avs"><span style={{background: '#5f6b3a'}}>AS</span><span style={{background: '#111111'}}>VC</span><span style={{background: '#b98f00'}}>DH</span><span style={{background: '#13294b'}}>VS</span><span style={{background: '#0066ff'}}>RS</span></div><span>25+ businesses across the UK</span></div>
        <div className="stem"></div>
        <div className="hbox reveal">
          <h1>Websites that <b>actually perform.</b></h1>
          <p>A South Wales web studio building fast, hand-coded websites that bring in real customers — from £550.</p>
          <div className="ctas"><a className="btn p" href="#contact">Start your project</a><a className="btn w" href="#services">Our services</a></div>
          <div className="mstats"><span>98+ Lighthouse</span><span>5.0★ Google</span><span>~7-day launch</span></div>
        </div>
        {/* left nodes */}
        <div className="node" style={{left: '3.5%', top: '88px'}}><img src="/qw-logo-dark.svg" alt="" style={{width: '26px'}} /></div>
        <div className="stat" style={{left: '14%', top: '150px'}}><b>98+</b> Lighthouse</div>
        <div className="node" style={{left: '2%', top: '228px', animationDelay: '-1s'}}><svg viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" /><path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" /><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6z" /></svg></div>
        <div className="stat" style={{left: '12%', top: '310px', animationDelay: '-2s'}}><b>5.0★</b> Google rating</div>
        <div className="node" style={{left: '3.5%', top: '398px', animationDelay: '-2s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="1.8"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.6" /></svg></div>
        <div className="stat" style={{left: '15%', top: '470px', animationDelay: '-3s'}}><b>62</b> Welsh towns covered</div>
        <div className="node" style={{left: '6%', top: '538px', animationDelay: '-3s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0a1230" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg></div>
        {/* right nodes */}
        <div className="node" style={{right: '3.5%', top: '88px', animationDelay: '-1.5s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0a1230" strokeWidth="1.7"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></svg></div>
        <div className="stat" style={{right: '13%', top: '150px', animationDelay: '-1s'}}><b>Built</b> for AI search</div>
        <div className="node" style={{right: '2%', top: '228px', animationDelay: '-2.5s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="1.8"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg></div>
        <div className="stat" style={{right: '12%', top: '310px', animationDelay: '-2.5s'}}><b>~7 days</b> to launch</div>
        <div className="node" style={{right: '3.5%', top: '398px', animationDelay: '-.5s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0a1230" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="3" /><path d="M10 18h4" /></svg></div>
        <div className="stat" style={{right: '14.5%', top: '470px', animationDelay: '-4s'}}><b>From £550</b> · no retainers</div>
        <div className="node" style={{right: '6%', top: '538px', animationDelay: '-4s'}}><svg viewBox="0 0 24 24" fill="none" stroke="#0a1230" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 9h10M7 13h6" /></svg></div>
      </div></section>
      
      {/* LOGOS */}
      <div className="logos"><div className="mq"><div className="tr">
        <span className="wm"><i>A</i>Asteria</span><span className="wm"><i>V</i>Voyager</span><span className="wm"><i>D</i>Dream Home Mortgages</span><span className="wm"><i>V</i>Vector Specialist</span><span className="wm"><i>R</i>RS1 Capital</span><span className="wm"><i>S</i>Scarlatt</span><span className="wm"><i>B</i>Boxed Fresh</span><span className="wm"><i>E</i>EcoHeat</span><span className="wm"><i>J</i>Jaggerz</span>
        <span className="wm"><i>A</i>Asteria</span><span className="wm"><i>V</i>Voyager</span><span className="wm"><i>D</i>Dream Home Mortgages</span><span className="wm"><i>V</i>Vector Specialist</span><span className="wm"><i>R</i>RS1 Capital</span><span className="wm"><i>S</i>Scarlatt</span><span className="wm"><i>B</i>Boxed Fresh</span><span className="wm"><i>E</i>EcoHeat</span><span className="wm"><i>J</i>Jaggerz</span>
      </div></div></div>
      
      {/* SERVICES */}
      <section id="services"><div className="wrap">
        <h2 className="h2c reveal">What we do to get you results.</h2>
        <div className="bento">
          <a className="frame tall reveal" href="/work"><div className="inner svc">
            <div className="vis collage">
              <div className="col"><img src="/work/jaggerz-mobile.jpg" alt="" /><img src="/work-asteria.jpg" alt="" /></div>
              <div className="col"><img src="/work-rs1.jpg" alt="" /><img src="/work-voyager.jpg" alt="" /><img src="/work-jaggerz.jpg" alt="" /></div>
              <div className="col"><img src="/work-dreamhome.jpg" alt="" /><img src="/work-vector.jpg" alt="" /></div>
            </div>
            <div className="cap"><div><h3>Web design &amp; development</h3><p>Hand-coded, mobile-first websites built to convert — never a template or page builder.</p></div><span className="more">View</span></div>
          </div></a>
          <a className="frame reveal" href="/web-design"><div className="inner svc">
            <div className="vis"><div className="serp"><div className="q"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a92a3" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>web designer near Carmarthen</div><div className="r me">Your Business — Carmarthen<small>yourbusiness.co.uk › services</small></div><div className="r dim">Another Company Ltd<small>another-company.co.uk</small></div></div></div>
            <div className="cap"><div><h3>Local SEO &amp; AI search</h3><p>Town pages, schema and Google Business Profile help so customers — and AI assistants — find you.</p></div><span className="more">View</span></div>
          </div></a>
          <a className="frame reveal" href="#contact"><div className="inner svc">
            <div className="vis"><div className="week"><div>MON<span className="f"></span></div><div>TUE<span></span></div><div className="on">WED<span className="f b"></span></div><div>THU<span></span></div><div>FRI<span className="f"></span></div></div></div>
            <div className="cap"><div><h3>Hosting &amp; ongoing support</h3><p>Fast hosting, updates and changes when you need them — no monthly retainers.</p></div><span className="more">View</span></div>
          </div></a>
          <a className="frame span2 reveal" href="#contact"><div className="inner svc">
            <div className="vis"><div className="app"><div className="sb"><i className="on"></i><i></i><i></i><i></i><i></i></div><div className="main"><div className="kpis"><span></span><span></span><span></span></div><div className="bars"><b style={{height: '38%'}}></b><b style={{height: '55%'}}></b><b style={{height: '46%'}}></b><b style={{height: '70%'}}></b><b style={{height: '62%'}}></b><b style={{height: '84%'}}></b><b style={{height: '76%'}}></b></div></div></div></div>
            <div className="cap"><div><h3>Web platforms, apps &amp; software</h3><p>Custom web platforms, apps and bespoke software — client portals, dashboards, booking systems and internal tools built around how your business works.</p></div><span className="more">View</span></div>
          </div></a>
        </div>
      </div></section>
      
      {/* DARK STATEMENT */}
      <section style={{paddingTop: '20px'}}><div className="wide"><div className="dark reveal">
        <span className="pill">From first call to page one</span>
        <h2>With <b>QuantWeb</b>, your website stops being a brochure and starts <b>bringing in customers</b>.</h2>
        <div className="shot"><img src="/hero-laptop.jpg" alt="A QuantWeb website on a laptop" /></div>
      </div></div></section>
      
      {/* CASES */}
      <section id="work"><div className="wrap">
        <h2 className="h2c reveal">Real sites for real businesses.</h2>
        <div className="cases">
          <article className="case frame"><div className="inner"><div><span className="pill">Wedding platform</span><h3>Launching Asteria, a new way to plan a wedding</h3><div className="sub">Wedding planning platform · UK</div><p>A calm, editorial site with an interactive wedding builder and clickable previews of both the couple and supplier apps.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-asteria.jpg" alt="Asteria website" loading="lazy" /></div></div></article>
          <article className="case frame"><div className="inner"><div><span className="pill">Automotive</span><h3>A full rebrand for Voyager Camper Conversions</h3><div className="sub">Bespoke camper vans · Wrexham, North Wales</div><p>Black-and-white rebrand, a cinematic hero of their own van and a stock page where every van gets its own detail page.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-voyager.jpg" alt="Voyager Camper Conversions website" loading="lazy" /></div></div></article>
          <article className="case frame"><div className="inner"><div><span className="pill">Mortgages &amp; finance</span><h3>A bold, compliant site for Dream Home Mortgages</h3><div className="sub">Fee-free mortgage broker · Wakefield</div><p>Gold-and-black design, a clear who-we-help section and full FCA regulatory text — live on their own domain.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-dreamhome.jpg" alt="Dream Home Mortgages website" loading="lazy" /></div></div></article>
          <article className="case frame"><div className="inner"><div><span className="pill">Removals &amp; logistics</span><h3>Repositioning Vector Specialist for homes and businesses</h3><div className="sub">Removals, transport &amp; installation · London</div><p>Rebuilt around reliable removals, transport and installation, with clear service pages and quote buttons everywhere.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-vector.jpg" alt="Vector Specialist website" loading="lazy" /></div></div></article>
          <article className="case frame"><div className="inner"><div><span className="pill">Finance &amp; investment</span><h3>Giving RS1 Capital the gravitas of a major institution</h3><div className="sub">Investment, lending &amp; advisory · London / Spain</div><p>A refined black-and-gold, multi-page build with an Acquisitions offering, FAQ and full structured data — migrated with zero email downtime.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-rs1.jpg" alt="RS1 Capital website" /></div></div></article>
          <article className="case frame"><div className="inner"><div><span className="pill">Local takeaway</span><h3>Putting Jaggerz on the map in Narberth</h3><div className="sub">Fresh food &amp; coffee · Narberth, Pembrokeshire</div><p>A warm one-page site with the real menu, opening hours, Google reviews and click-to-call — built to rank for &quot;takeaway Narberth&quot;.</p><a className="more" href="/work">View case study</a></div><div className="img"><img src="/work-jaggerz.jpg" alt="Jaggerz website" /></div></div></article>
        </div>
        <a className="btn p bar" href="/work">Browse all our work</a>
      </div></section>
      
      {/* ESSENTIALS */}
      <section><div className="wrap">
        <h2 className="h2c reveal">The essentials every business<br />needs to be found today.</h2>
        <div className="ess">
          <div className="frame reveal"><div className="inner">
            <div className="vis">
              <span className="ghost" style={{left: '4%', top: '8%'}}></span><span className="ghost" style={{left: '4%', top: '42%'}}></span><span className="ghost" style={{left: '4%', bottom: '6%'}}></span>
              <span className="ghost" style={{right: '4%', top: '14%'}}></span><span className="ghost" style={{right: '4%', bottom: '12%'}}></span>
              <div className="wf"><div className="dots"><i></i><i></i><i></i></div><h5>Your Website</h5><div className="row"><span></span><span></span></div><div className="load">98+ Lighthouse ⚡</div></div>
              <span className="fl" style={{left: '8%', top: '14%'}}>Mobile-first</span><span className="fl" style={{right: '7%', top: '9%', animationDelay: '-1s'}}>Schema markup</span>
              <span className="fl" style={{left: '3%', top: '56%', animationDelay: '-2s'}}>Accessibility</span><span className="fl" style={{right: '5%', top: '62%', animationDelay: '-3s'}}>Privacy &amp; GDPR</span>
              <span className="fl" style={{left: '20%', bottom: '8%', animationDelay: '-1.5s'}}>Contact forms</span>
            </div>
            <h3>Hand-coded website</h3><p>Without a fast website, visitors leave before they call. We build sites that load instantly, rank locally and make it easy to get in touch.</p><a className="more" href="/work">See our web design work</a>
          </div></div>
          <div className="frame reveal"><div className="inner">
            <div className="vis">
              <svg className="web" viewBox="0 0 400 270" preserveAspectRatio="none"><path d="M200 135 L80 50" /><path d="M200 135 L320 50" /><path d="M200 135 L60 200" /><path d="M200 135 L340 205" /><path d="M200 135 L200 245" /></svg>
              <div className="hub"><div><b>QuantWeb</b><small>Local SEO</small></div></div>
              <span className="sat" style={{left: '8%', top: '12%'}}><i style={{background: '#4285f4'}}>G</i>Google Search</span>
              <span className="sat" style={{right: '6%', top: '12%'}}><i style={{background: '#34a853'}}>◎</i>Google Maps</span>
              <span className="sat" style={{left: '4%', bottom: '18%'}}><i style={{background: '#0a1230'}}>✦</i>ChatGPT &amp; AI</span>
              <span className="sat" style={{right: '3%', bottom: '16%'}}><i>62</i>Town pages</span>
              <span className="sat" style={{left: '50%', bottom: '4%', transform: 'translateX(-50%)'}}><i style={{background: '#fbbc04'}}>★</i>Reviews</span>
            </div>
            <h3>Local SEO &amp; AI search</h3><p>Without local signals, customers find your competitors first. We give you town pages, structured data and AI-search files so you show up everywhere people look.</p><a className="more" href="/web-design">See the areas we cover</a>
          </div></div>
        </div>
      </div></section>
      
      {/* REVIEWS */}
      <section><div className="wide">
        <div className="rv-top reveal"><h2 className="h2c" style={{marginBottom: '0'}}>Hear from our clients.</h2><span className="pill">Rated 5.0 on Google</span></div>
        <div className="rv-stage">
          <svg viewBox="0 0 1180 60" preserveAspectRatio="none"><path d="M590 0 V20 Q590 30 580 30 H210 Q200 30 200 40 V60" /><path d="M590 20 V60" /><path d="M590 0 V20 Q590 30 600 30 H970 Q980 30 980 40 V60" /></svg>
          <div className="rv-row">
            <div className="rv side stat-c"><b>5.0</b><span className="stars">★★★★★</span><p>Average Google rating</p></div>
            <div className="rv reveal"><div className="who"><span className="g"><svg width="22" height="22" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" /><path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" /><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6z" /></svg></span><div><strong>QuantWeb on Google</strong><span>5.0 average rating</span></div></div><p>Real reviews from the businesses we&apos;ve built for — tradespeople, takeaways, property firms and more across Wales and the UK. If we&apos;ve built yours, a short review helps others find us.</p><div className="rv-ctas"><a className="btn p" href="https://www.google.com/maps/search/?api=1&query=QuantWeb+web+design+Wales" target="_blank" rel="noopener" style={{padding: '12px 22px', fontSize: '14px'}}>Read our reviews</a><a className="btn w" href="https://www.google.com/search?q=QuantWeb+web+design+Wales+reviews" target="_blank" rel="noopener" style={{padding: '12px 22px', fontSize: '14px'}}>★ Leave a review</a></div></div>
            <div className="rv side stat-c"><b>25+</b><span className="stars" style={{color: 'var(--blue)'}}>● ● ●</span><p>Websites live across the UK</p></div>
          </div>
          <div className="arrows"><span>‹</span><span>›</span></div>
        </div>
      </div></section>
      
      {/* WHY */}
      <section id="why"><div className="wrap">
        <h2 className="h2c reveal" style={{marginBottom: '10px'}}>Why choose QuantWeb?</h2>
        <p className="sub-c reveal" style={{margin: '0 0 36px'}}>Helping businesses look their best online and turn more visitors into enquiries.</p>
        <div className="why">
          <div className="frame reveal"><div className="inner"><h3>Speed you can actually measure</h3><p>98+ Google Lighthouse as standard. Fast sites rank higher and convert better.</p><div className="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#e7f0ff" strokeWidth="10" /><circle cx="60" cy="60" r="50" fill="none" stroke="#0066ff" strokeWidth="10" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="6" transform="rotate(-90 60 60)" /></svg><b>98+</b><small>Performance</small></div></div></div>
          <div className="mid">
            <div className="frame reveal"><div className="inner"><h3>See it before you commit</h3><p>We design your site before our first call.</p><div className="knob">✓</div></div></div>
            <div className="frame reveal"><div className="inner"><h3>Pricing without surprises</h3><p>What you see is what you pay.</p><div className="price"><b>£550</b><i></i></div></div></div>
          </div>
          <div className="frame reveal"><div className="inner"><h3>One person, start to finish</h3><p>You deal directly with Keeron — the person designing and building your site.</p><div className="avrow"><span style={{background: '#5f6b3a'}}>AS</span><span style={{background: '#111111'}}>VC</span><span style={{background: '#b98f00'}}>DH</span><span style={{background: '#13294b'}}>VS</span><span style={{background: '#0066ff'}}>RS</span><em>25+</em></div><a className="btn p cta" href="#contact">Be one of them</a></div></div>
        </div>
      </div></section>
      
      {/* AREAS */}
      <section id="areas"><div className="wrap">
        <h2 className="h2c reveal" style={{marginBottom: '34px'}}>From South Wales to everywhere.</h2>
        <p className="sub-c">Web design and local SEO across 62 towns in South &amp; West Wales — each with its own page.</p>
        <div className="areas reveal"><a href="/web-design/haverfordwest">Haverfordwest</a><a href="/web-design/narberth">Narberth</a><a href="/web-design/tenby">Tenby</a><a href="/web-design/pembroke">Pembroke</a><a href="/web-design/milford-haven">Milford Haven</a><a href="/web-design/st-davids">St Davids</a><a href="/web-design/carmarthen">Carmarthen</a><a href="/web-design/llanelli">Llanelli</a><a href="/web-design/ammanford">Ammanford</a><a href="/web-design/llandeilo">Llandeilo</a><a href="/web-design/aberystwyth">Aberystwyth</a><a href="/web-design/cardigan">Cardigan</a><a href="/web-design/swansea">Swansea</a><a href="/web-design/mumbles">Mumbles</a><a href="/web-design/neath">Neath</a><a href="/web-design/port-talbot">Port Talbot</a><a href="/web-design/bridgend">Bridgend</a><a href="/web-design/porthcawl">Porthcawl</a><a href="/web-design/barry">Barry</a><a href="/web-design/penarth">Penarth</a><a href="/web-design/cardiff">Cardiff</a><a href="/web-design/pontypridd">Pontypridd</a><a href="/web-design/caerphilly">Caerphilly</a><a href="/web-design/newport">Newport</a><a href="/web-design/cwmbran">Cwmbran</a><a href="/web-design/abergavenny">Abergavenny</a><a href="/web-design/chepstow">Chepstow</a><a className="all" href="/web-design">All 62 towns →</a></div>
      </div></section>
      
      {/* FAQ */}
      <section id="faq"><div className="wrap faqx">
        <div className="l reveal"><h2>What people<br />usually ask us</h2><p>We&apos;ve covered the questions we hear most. If there&apos;s something else on your mind, we&apos;d love to hear it.</p><a className="btn p" href="#contact">Let&apos;s talk</a></div>
        <div className="acc reveal">
          <details open><summary>How much does a website cost?</summary><p>A professional business website typically costs between £550 and £8,000 depending on complexity. At QuantWeb, pricing starts from £550 for a clean, fast, fully optimised site — with no monthly retainers.</p></details>
          <details><summary>I already have a website. Can you still help?</summary><p>Yes — we can rebuild it so it loads fast, ranks locally and brings in enquiries, or start with a website audit showing what&apos;s holding it back.</p></details>
          <details><summary>How long does SEO take to work?</summary><p>Local SEO can show movement within 6–8 weeks. Competitive UK-wide rankings typically take 3–6 months. We focus on quick local wins first, then build long-term authority.</p></details>
          <details><summary>Which areas do you cover?</summary><p>All of South and West Wales — Pembrokeshire, Carmarthenshire, Ceredigion, Swansea, Neath Port Talbot, Bridgend, Cardiff, the Vale, the valleys, Newport and Monmouthshire — plus clients across the UK.</p></details>
          <details><summary>What makes QuantWeb different?</summary><p>We combine web design and SEO under one roof, and hand-code every site for performance — 98+ Lighthouse as standard. You deal directly with the person building your site, with no lock-in.</p></details>
        </div>
      </div></section>
      
      {/* ABOUT */}
      <section style={{paddingTop: '20px'}}><div className="wrap about" id="about"><div className="inner frame">
        <h2>QuantWeb</h2>
        <div className="txt">
          <p>At <b>QuantWeb</b>, we build websites that bring in customers. Founded in South Wales by Keeron John, we hand-code fast, SEO-ready sites for tradespeople, local businesses and growing companies across South and West Wales and the UK.</p>
          <h3>Building websites that last</h3>
          <p>Every site is designed before our first call, built for speed (98+ Lighthouse as standard), and launched with local SEO, structured data and AI-search files already in place — so you&apos;re found on Google, Maps and AI assistants from day one.</p>
          <h3>Why businesses choose QuantWeb</h3>
          <p><b>Clear pricing:</b> websites from £550 with simple annual hosting — no monthly retainers. <b>Direct contact:</b> you deal with the person building your site. <b>Real results:</b> 25+ sites live and a 5.0 Google rating.</p>
        </div>
        <button type="button" className="about-toggle">Show all ⌄</button>
      </div></div></section>
      
      {/* CTA */}
      <section id="contact" style={{paddingTop: '20px'}}><div className="wide"><div className="dark reveal" style={{paddingBottom: '70px'}}>
        <span className="pill">Free quote · reply within one business day</span>
        <h2 style={{marginBottom: '30px'}}>Ready to <b>grow your business</b>?</h2>
        <QuoteForm />
      <p className="qalt">Prefer email? <a href="mailto:admin@quantweb.co.uk">admin@quantweb.co.uk</a></p>
      </div></div></section>
      
      </main>
      <SiteFooter />
      <a className="wa" href="#contact" aria-label="Get a quote"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" /></svg></a>
      <HomeScripts />
    </>
  )
}
