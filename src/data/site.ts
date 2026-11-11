// QuantWeb — shared business facts, Google profile and South West Wales towns (local SEO + AI search).
export const SITE = 'https://www.quantweb.co.uk'

export const business = {
  name: 'QuantWeb',
  altName: 'QuantWeb Studio',
  owner: 'Keeron John',
  legal: 'Keeron John, trading as QuantWeb (sole trader)',
  email: 'admin@quantweb.co.uk',
  instagram: 'https://www.instagram.com/quantweb.studio/',
  priceFrom: '£550',
  region: 'South & West Wales',
  base: 'South Wales',
}

// Google Business Profile — TODO: replace with the profile's own share link + "write a review" link.
// Until then these open Google's listing search for QuantWeb.
export const google = {
  url: 'https://www.google.com/maps/search/?api=1&query=QuantWeb+web+design+Wales',
  writeUrl: 'https://www.google.com/search?q=QuantWeb+web+design+Wales+reviews',
}

export type Region = 'West Wales' | 'South Wales'
export type Town = { slug: string; name: string; county: string; lat: number; lng: number; note?: string }
export type County = { name: string; slug: string; region: Region; page: boolean; intro: string }

// page: true = gets its own /web-design/<slug> county page (false where the county shares its name with a town page)
export const countyList: County[] = [
  { name: 'Pembrokeshire', slug: 'pembrokeshire', region: 'West Wales', page: true, intro: 'Pembrokeshire runs on small, owner-run businesses — trades, holiday lets, hospitality, farms and coastal tourism — and most of their customers find them on a phone. A fast, mobile-first website is the difference between being found and being skipped.' },
  { name: 'Carmarthenshire', slug: 'carmarthenshire', region: 'West Wales', page: true, intro: 'From Llanelli and Carmarthen to the Amman and Tywi valleys, Carmarthenshire businesses compete on reputation and word of mouth. A fast website with clear service pages turns that reputation into enquiries from Google.' },
  { name: 'Ceredigion', slug: 'ceredigion', region: 'West Wales', page: true, intro: 'Ceredigion’s coastal and market towns depend on visitors and loyal local customers alike. We build sites that work on patchy rural mobile signal and show up when people search for what you do in Cardigan Bay.' },
  { name: 'Swansea', slug: 'swansea', region: 'West Wales', page: false, intro: 'Swansea is Wales’ second city, with a busy mix of trades, retail, hospitality and professional services — a competitive search market where speed and local SEO make the difference.' },
  { name: 'Neath Port Talbot', slug: 'neath-port-talbot', region: 'West Wales', page: true, intro: 'Neath Port Talbot is home to strong trades and industrial-supply businesses. We build straightforward, fast websites that make it easy to call, quote and book.' },
  { name: 'Bridgend', slug: 'bridgend', region: 'South Wales', page: false, intro: 'Bridgend county sits between Cardiff and Swansea along the M4, so local businesses need to be found by customers searching in both directions.' },
  { name: 'Vale of Glamorgan', slug: 'vale-of-glamorgan', region: 'South Wales', page: true, intro: 'From Barry and Penarth to Cowbridge and Llantwit Major, Vale of Glamorgan businesses serve both their own towns and the Cardiff market next door.' },
  { name: 'Cardiff', slug: 'cardiff', region: 'South Wales', page: false, intro: 'Cardiff is the capital of Wales and its most competitive search market. We help independent Cardiff businesses compete with bigger names through speed, clear copy and local SEO.' },
  { name: 'Rhondda Cynon Taf', slug: 'rhondda-cynon-taf', region: 'South Wales', page: true, intro: 'Rhondda Cynon Taf’s valley towns are full of trusted local trades and services. We build websites that make it easy to find you, see your work and get in touch.' },
  { name: 'Merthyr Tydfil', slug: 'merthyr-tydfil-county', region: 'South Wales', page: false, intro: 'Merthyr Tydfil businesses serve the heads of the valleys and beyond — a fast, mobile-first site helps you reach customers across the whole area.' },
  { name: 'Caerphilly', slug: 'caerphilly-county', region: 'South Wales', page: false, intro: 'Caerphilly county borough stretches from Caerphilly town up through Ystrad Mynach and Blackwood, with plenty of trades and local services competing for the same searches.' },
  { name: 'Newport', slug: 'newport-county', region: 'South Wales', page: false, intro: 'Newport sits on the M4 gateway to Wales, so its businesses compete with Cardiff and Bristol for local searches. A quick, well-structured site gives you an edge.' },
  { name: 'Torfaen', slug: 'torfaen', region: 'South Wales', page: true, intro: 'Torfaen’s businesses in Cwmbran and Pontypool serve a wide area of south-east Wales. We build sites that rank locally and convert visits into calls.' },
  { name: 'Monmouthshire', slug: 'monmouthshire', region: 'South Wales', page: true, intro: 'Monmouthshire’s market towns — Abergavenny, Monmouth and Chepstow — attract visitors and discerning local customers. Your website should look as good as your work.' },
  { name: 'Blaenau Gwent', slug: 'blaenau-gwent', region: 'South Wales', page: true, intro: 'Blaenau Gwent businesses in Ebbw Vale, Tredegar and the surrounding valleys rely on local customers finding them fast — on Google and on their phone.' },
]
export const counties = countyList.map((c) => c.name)
export const county = (name: string) => countyList.find((c) => c.name === name)!

export const towns: Town[] = [
  // Pembrokeshire
  { slug: 'haverfordwest', name: 'Haverfordwest', county: 'Pembrokeshire', lat: 51.8016, lng: -4.9691, note: 'Pembrokeshire’s county town' },
  { slug: 'narberth', name: 'Narberth', county: 'Pembrokeshire', lat: 51.7987, lng: -4.7445, note: 'an independent market town' },
  { slug: 'pembroke', name: 'Pembroke', county: 'Pembrokeshire', lat: 51.674, lng: -4.9157, note: 'a historic castle town' },
  { slug: 'pembroke-dock', name: 'Pembroke Dock', county: 'Pembrokeshire', lat: 51.6932, lng: -4.942, note: 'a port town on the Cleddau' },
  { slug: 'milford-haven', name: 'Milford Haven', county: 'Pembrokeshire', lat: 51.7142, lng: -5.0427, note: 'a port and marina town' },
  { slug: 'tenby', name: 'Tenby', county: 'Pembrokeshire', lat: 51.6729, lng: -4.7037, note: 'a busy harbour and holiday town' },
  { slug: 'saundersfoot', name: 'Saundersfoot', county: 'Pembrokeshire', lat: 51.7097, lng: -4.6967, note: 'a coastal holiday village' },
  { slug: 'fishguard', name: 'Fishguard', county: 'Pembrokeshire', lat: 51.9934, lng: -4.976, note: 'a north Pembrokeshire ferry port town' },
  { slug: 'st-davids', name: 'St Davids', county: 'Pembrokeshire', lat: 51.8812, lng: -5.266, note: 'the UK’s smallest city' },
  { slug: 'neyland', name: 'Neyland', county: 'Pembrokeshire', lat: 51.7117, lng: -4.9497 },
  { slug: 'kilgetty', name: 'Kilgetty', county: 'Pembrokeshire', lat: 51.733, lng: -4.718 },
  // Carmarthenshire
  { slug: 'carmarthen', name: 'Carmarthen', county: 'Carmarthenshire', lat: 51.859, lng: -4.3116, note: 'Carmarthenshire’s county town' },
  { slug: 'llanelli', name: 'Llanelli', county: 'Carmarthenshire', lat: 51.684, lng: -4.163, note: 'Carmarthenshire’s largest town' },
  { slug: 'ammanford', name: 'Ammanford', county: 'Carmarthenshire', lat: 51.7937, lng: -3.9884, note: 'the main town of the Amman Valley' },
  { slug: 'llandeilo', name: 'Llandeilo', county: 'Carmarthenshire', lat: 51.8845, lng: -3.9934, note: 'an independent market town in the Tywi Valley' },
  { slug: 'llandovery', name: 'Llandovery', county: 'Carmarthenshire', lat: 51.9946, lng: -3.7955, note: 'a market town in the upper Tywi Valley' },
  { slug: 'burry-port', name: 'Burry Port', county: 'Carmarthenshire', lat: 51.683, lng: -4.247, note: 'a harbour town' },
  { slug: 'kidwelly', name: 'Kidwelly', county: 'Carmarthenshire', lat: 51.736, lng: -4.306 },
  { slug: 'st-clears', name: 'St Clears', county: 'Carmarthenshire', lat: 51.819, lng: -4.499 },
  { slug: 'whitland', name: 'Whitland', county: 'Carmarthenshire', lat: 51.8186, lng: -4.6155 },
  { slug: 'newcastle-emlyn', name: 'Newcastle Emlyn', county: 'Carmarthenshire', lat: 52.0383, lng: -4.4675, note: 'a market town on the Teifi' },
  { slug: 'cross-hands', name: 'Cross Hands', county: 'Carmarthenshire', lat: 51.796, lng: -4.088 },
  { slug: 'pontyberem', name: 'Pontyberem', county: 'Carmarthenshire', lat: 51.77, lng: -4.165 },
  { slug: 'garnant', name: 'Garnant', county: 'Carmarthenshire', lat: 51.793, lng: -3.899 },
  // Ceredigion
  { slug: 'aberystwyth', name: 'Aberystwyth', county: 'Ceredigion', lat: 52.4153, lng: -4.0829, note: 'a university and seaside town' },
  { slug: 'cardigan', name: 'Cardigan', county: 'Ceredigion', lat: 52.0838, lng: -4.6597, note: 'a market town on the Teifi estuary' },
  { slug: 'lampeter', name: 'Lampeter', county: 'Ceredigion', lat: 52.1137, lng: -4.0809, note: 'a university market town' },
  { slug: 'aberaeron', name: 'Aberaeron', county: 'Ceredigion', lat: 52.2433, lng: -4.2589, note: 'a harbour town' },
  { slug: 'new-quay', name: 'New Quay', county: 'Ceredigion', lat: 52.2142, lng: -4.3594, note: 'a seaside holiday town' },
  // Swansea
  { slug: 'swansea', name: 'Swansea', county: 'Swansea', lat: 51.6214, lng: -3.9436, note: 'Wales’ second city' },
  { slug: 'mumbles', name: 'Mumbles', county: 'Swansea', lat: 51.574, lng: -3.997, note: 'a seaside village on the edge of Gower' },
  { slug: 'gorseinon', name: 'Gorseinon', county: 'Swansea', lat: 51.669, lng: -4.041 },
  { slug: 'pontarddulais', name: 'Pontarddulais', county: 'Swansea', lat: 51.717, lng: -4.042 },
  // Neath Port Talbot
  { slug: 'neath', name: 'Neath', county: 'Neath Port Talbot', lat: 51.663, lng: -3.804, note: 'a market town' },
  { slug: 'port-talbot', name: 'Port Talbot', county: 'Neath Port Talbot', lat: 51.593, lng: -3.78, note: 'an industrial town' },
  { slug: 'pontardawe', name: 'Pontardawe', county: 'Neath Port Talbot', lat: 51.723, lng: -3.852 },
  { slug: 'glynneath', name: 'Glynneath', county: 'Neath Port Talbot', lat: 51.7486, lng: -3.6328 },
  // Bridgend
  { slug: 'bridgend', name: 'Bridgend', county: 'Bridgend', lat: 51.5045, lng: -3.577, note: 'a county town on the M4 corridor' },
  { slug: 'porthcawl', name: 'Porthcawl', county: 'Bridgend', lat: 51.4793, lng: -3.7053, note: 'a seaside resort town' },
  { slug: 'maesteg', name: 'Maesteg', county: 'Bridgend', lat: 51.6097, lng: -3.6583, note: 'the main town of the Llynfi Valley' },
  { slug: 'pencoed', name: 'Pencoed', county: 'Bridgend', lat: 51.5246, lng: -3.5014 },
  // Vale of Glamorgan
  { slug: 'barry', name: 'Barry', county: 'Vale of Glamorgan', lat: 51.3996, lng: -3.2836, note: 'a seaside town and the Vale’s largest' },
  { slug: 'penarth', name: 'Penarth', county: 'Vale of Glamorgan', lat: 51.4386, lng: -3.1734, note: 'a seaside town next to Cardiff' },
  { slug: 'cowbridge', name: 'Cowbridge', county: 'Vale of Glamorgan', lat: 51.4617, lng: -3.4478, note: 'an independent market town' },
  { slug: 'llantwit-major', name: 'Llantwit Major', county: 'Vale of Glamorgan', lat: 51.4084, lng: -3.4858 },
  // Cardiff
  { slug: 'cardiff', name: 'Cardiff', county: 'Cardiff', lat: 51.4816, lng: -3.1791, note: 'the capital of Wales' },
  // Rhondda Cynon Taf
  { slug: 'pontypridd', name: 'Pontypridd', county: 'Rhondda Cynon Taf', lat: 51.6022, lng: -3.3426, note: 'a market town at the foot of the Rhondda' },
  { slug: 'llantrisant', name: 'Llantrisant', county: 'Rhondda Cynon Taf', lat: 51.542, lng: -3.3755 },
  { slug: 'aberdare', name: 'Aberdare', county: 'Rhondda Cynon Taf', lat: 51.7146, lng: -3.4465, note: 'the main town of the Cynon Valley' },
  { slug: 'tonypandy', name: 'Tonypandy', county: 'Rhondda Cynon Taf', lat: 51.6214, lng: -3.456 },
  // Merthyr Tydfil
  { slug: 'merthyr-tydfil', name: 'Merthyr Tydfil', county: 'Merthyr Tydfil', lat: 51.7487, lng: -3.3816 },
  // Caerphilly
  { slug: 'caerphilly', name: 'Caerphilly', county: 'Caerphilly', lat: 51.5749, lng: -3.2194, note: 'a castle town north of Cardiff' },
  { slug: 'blackwood', name: 'Blackwood', county: 'Caerphilly', lat: 51.6676, lng: -3.1953 },
  { slug: 'ystrad-mynach', name: 'Ystrad Mynach', county: 'Caerphilly', lat: 51.6418, lng: -3.2394 },
  // Newport
  { slug: 'newport', name: 'Newport', county: 'Newport', lat: 51.5842, lng: -2.9977, note: 'a city on the M4 gateway to Wales' },
  // Torfaen
  { slug: 'cwmbran', name: 'Cwmbran', county: 'Torfaen', lat: 51.6537, lng: -3.0213, note: 'Torfaen’s largest town' },
  { slug: 'pontypool', name: 'Pontypool', county: 'Torfaen', lat: 51.7016, lng: -3.0447 },
  // Monmouthshire
  { slug: 'abergavenny', name: 'Abergavenny', county: 'Monmouthshire', lat: 51.824, lng: -3.0168, note: 'a market town known for its food scene' },
  { slug: 'monmouth', name: 'Monmouth', county: 'Monmouthshire', lat: 51.8116, lng: -2.7163, note: 'a historic market town' },
  { slug: 'chepstow', name: 'Chepstow', county: 'Monmouthshire', lat: 51.6418, lng: -2.6754, note: 'a border town on the Wye' },
  // Blaenau Gwent
  { slug: 'ebbw-vale', name: 'Ebbw Vale', county: 'Blaenau Gwent', lat: 51.7779, lng: -3.2065 },
  { slug: 'tredegar', name: 'Tredegar', county: 'Blaenau Gwent', lat: 51.7719, lng: -3.247 },
]
export const regionOf = (t: Town) => county(t.county).region

// Region hub pages (/web-design/<slug>)
export const regions = [
  { slug: 'west-wales', name: 'West Wales', title: 'Web Design West Wales', filter: (t: Town) => regionOf(t) === 'West Wales', intro: 'Pembrokeshire, Carmarthenshire, Ceredigion, Swansea and Neath Port Talbot — where QuantWeb started and where most of our clients are.' },
  { slug: 'south-wales', name: 'South Wales', title: 'Web Design South Wales', filter: (t: Town) => regionOf(t) === 'South Wales' || ['Swansea', 'Neath Port Talbot', 'Carmarthenshire'].includes(t.county), intro: 'From Cardiff, Newport and the valleys to Bridgend, Swansea and Llanelli — fast, hand-coded websites for South Wales businesses.' },
  { slug: 'south-west-wales', name: 'South West Wales', title: 'Web Design South West Wales', filter: (t: Town) => ['Pembrokeshire', 'Carmarthenshire', 'Swansea', 'Neath Port Talbot'].includes(t.county), intro: 'Pembrokeshire, Carmarthenshire, Swansea and Neath Port Talbot — our home patch.' },
]

// Real QuantWeb clients in South West Wales (town = where the business is based)
// Only businesses whose QuantWeb site is LIVE on their own domain.
export const localClients: { name: string; sector: string; town: string; county: string }[] = [
  { name: 'Jaggerz Takeaway', sector: 'Food & takeaway', town: 'Narberth', county: 'Pembrokeshire' },
]

const R = 3958.8
export function miles(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const r = Math.PI / 180
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}
export const nearby = (t: Town, n = 5) => towns.filter((x) => x.slug !== t.slug).sort((x, y) => miles(t, x) - miles(t, y)).slice(0, n)

export const services = [
  { name: 'Web design & development', d: 'Hand-coded, mobile-first websites built to convert — never a template or page builder.' },
  { name: 'Web platforms, apps & software', d: 'Custom web platforms, apps and bespoke software — client portals, dashboards, booking systems and internal tools built around how your business works.' },
  { name: 'Local SEO', d: 'Page titles, schema, Google Business Profile help and town pages so local customers find you.' },
  { name: 'Ongoing support', d: 'Changes, updates and hosting when you need them — no monthly retainers.' },
  { name: 'Website audits', d: 'A clear look at what is holding your current site back, and how to fix it.' },
]

export const faqsCore = [
  {
    q: 'How much does a website cost?',
    a: 'A professional business website typically costs between £550 and £8,000 depending on complexity. At QuantWeb, pricing starts from £550 for a clean, fast, fully optimised site — with no monthly retainers.',
  },
  {
    q: 'How long does SEO take to work?',
    a: 'Local SEO can show movement within 6–8 weeks. Competitive UK-wide rankings typically take 3–6 months. We focus on quick local wins first, then build long-term authority.',
  },
  {
    q: 'Who runs QuantWeb?',
    a: 'QuantWeb is run by Keeron John, a web designer from South Wales. You deal directly with the person designing and building your site.',
  },
  {
    q: 'Which areas of Wales do you cover?',
    a: 'All of South and West Wales — Pembrokeshire, Carmarthenshire, Ceredigion, Swansea, Neath Port Talbot, Bridgend, the Vale of Glamorgan, Cardiff, Rhondda Cynon Taf, Merthyr Tydfil, Caerphilly, Newport, Torfaen, Monmouthshire and Blaenau Gwent. See every town at quantweb.co.uk/web-design.',
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
