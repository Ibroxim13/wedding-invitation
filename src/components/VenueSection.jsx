// VenueSection.jsx — Manzil / Место проведения
import toyxona from "../toyxona.png"

export default function VenueSection({ t }) {
  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 100px) 24px',
        background: 'var(--cream)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        {/* ── Section title ── */}
        <SectionTitle>{t.venueTitle}</SectionTitle>
        <img src={toyxona} alt=" " />

        {/* ── Venue name ── */}
        <h3
          className="reveal delay-100"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
            fontWeight: 500,
            fontStyle: 'italic',
            color: 'var(--ink-mid)',
            marginBottom: '1.2rem',
            lineHeight: 1.4,
          }}
        >
          {t.venueName}
        </h3>

        <hr className="gold-rule" />

        {/* ── Time & Address ── */}
        <div
          className="reveal delay-200 gold-card"
          style={{
            padding: 'clamp(20px, 5vw, 32px)',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: 'var(--gold-dark)',
              letterSpacing: '2px',
              marginBottom: '10px',
              fontWeight: 500,
            }}
          >
            {t.venueTime}
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
              color: 'var(--text)',
              lineHeight: 1.7,
            }}
          >
            {t.venueAddress}
          </p>
        </div>

        {/* ── Map buttons ── */}
        <div
          className="reveal delay-300 map-btn-group"
          style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '360px', margin: '0 auto' }}
        >
          <a
            href={t.yandexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            <MapPinIcon />
            {t.yandexMaps}
          </a>
          <a
            href={t.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            <MapPinIcon />
            {t.googleMaps}
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Shared section title ── */
export function SectionTitle({ children }) {
  return (
    <div className="reveal" style={{ marginBottom: '1.8rem' }}>
      <div className="ornament">
        <span
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
            letterSpacing: '6px',
            color: 'var(--gold)',
            textTransform: 'uppercase',
          }}
        >
          {children}
        </span>
      </div>
    </div>
  )
}

/* ── Map pin SVG ── */
function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
