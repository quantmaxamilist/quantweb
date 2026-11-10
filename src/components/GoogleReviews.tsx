import { google } from '@/data/site'

export default function GoogleReviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container reveal">
        <div className="reviews-card">
          <div className="reviews-g" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6z"/></svg>
          </div>
          <div className="reviews-copy">
            <div className="eyebrow">Google reviews</div>
            <h2>What our clients say.</h2>
            <p>Read real reviews from the businesses we&apos;ve built for on Google — and if we&apos;ve built yours, a short review helps other local businesses find us.</p>
          </div>
          <div className="actions">
            <a className="btn primary" href={google.url} target="_blank" rel="noopener">Read our Google reviews <span className="arrow">→</span></a>
            <a className="btn secondary" href={google.writeUrl} target="_blank" rel="noopener">★ Leave a review</a>
          </div>
        </div>
      </div>
    </section>
  )
}
