export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="14" r="10" fill="#0071e3" />
        <circle cx="12" cy="14" r="6.5" fill="white" />
        <line x1="19" y1="21" x2="23" y2="26" stroke="#0071e3" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 10 L25.5 22 L29 15 L32.5 22 L36 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '-0.4px' }}>
        <span style={{ color: '#ffffff' }}>Quant</span>
        <span style={{ color: '#0071e3' }}>Web</span>
      </span>
    </div>
  )
}
