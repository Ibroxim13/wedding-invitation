// Hero.jsx — Kuyov va kelin ismlari, rasm

export default function Hero({ t }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-2) 100%)',
        padding: '80px 24px 60px',
      }}
    >
      {/* ── Background watermark ornament ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(200px, 40vw, 380px)',
          color: 'rgba(201,168,76,0.04)',
          fontFamily: 'Great Vibes, cursive',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        ♥
      </div>

      {/* ── Top ornament ── */}
      <div className="reveal" style={{ marginBottom: '2rem' }}>
        <GoldOrnament />
      </div>

      {/* ── Pre-title ── */}
      <p
        className="reveal delay-100"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
          letterSpacing: '6px',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          opacity: 0.8,
        }}
      >
        ✦ Wedding Invitation ✦
      </p>

      {/* ── Couple photo ── */}
      <div
        className="photo-frame reveal delay-200"
        style={{
          marginBottom: '2.5rem',
          width: 'clamp(160px, 45vw, 220px)',
          height: 'clamp(160px, 45vw, 220px)',
        }}
      >
        {/* Photo placeholder — replace src with your couple's photo */}
        <img
          src="/couple.jpg"
          alt="Couple photo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
            filter: 'sepia(10%) contrast(1.05) brightness(1.02)',
          }}
          onError={(e) => {
            // Fallback if no photo uploaded yet
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'var(--cream-2)'
          }}
        />
        {/* Fallback heart when no photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--gold)',
            opacity: 0.3,
          }}
        >
          ♥
        </div>
      </div>

      {/* ── Names ── */}
      <div className="reveal delay-300" style={{ marginBottom: '1rem' }}>
        <h1
          style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: 'clamp(3rem, 12vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--ink-mid)',
            marginBottom: '0.25rem',
          }}
        >
          {t.groomName}
        </h1>

        {/* ── & divider ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            margin: '0.4rem 0',
          }}
        >
          <span style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
          <span
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: 'var(--gold)',
              fontStyle: 'italic',
            }}
          >
            {t.and}
          </span>
          <span style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </div>

        <h1
          style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: 'clamp(3rem, 12vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--ink-mid)',
          }}
        >
          {t.brideName}
        </h1>
      </div>

      {/* ── Date ── */}
      <div
        className="reveal delay-400"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
          letterSpacing: '8px',
          color: 'var(--gold-dark)',
          textTransform: 'uppercase',
          marginTop: '1.2rem',
          marginBottom: '2rem',
        }}
      >
        24 · 07 · 2026
      </div>

      {/* ── Bottom ornament ── */}
      <div className="reveal delay-500">
        <GoldOrnament />
      </div>

      {/* ── Scroll hint ── */}
      <p
        className="reveal delay-600"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: 0,
          right: 0,
          textAlign: "center",
          transform: 'translateX(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.85rem',
          color: 'var(--gold)',
          letterSpacing: '3px',
          opacity: 0.6,
          animation: 'float 3s ease-in-out 1s infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {t.scrollHint}
      </p>
    </section>
  )
}

/* ── Decorative gold ornament SVG ── */
function GoldOrnament() {
  return (
    <svg
      width="180"
      height="24"
      viewBox="0 0 180 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.65 }}
    >
      <path d="M0 12 H68" stroke="#c9a84c" strokeWidth="0.8"/>
      <path d="M112 12 H180" stroke="#c9a84c" strokeWidth="0.8"/>
      <path d="M68 12 L74 4 L80 12 L74 20 Z" fill="#c9a84c" opacity="0.6"/>
      <path d="M100 12 L106 4 L112 12 L106 20 Z" fill="#c9a84c" opacity="0.6"/>
      <circle cx="90" cy="12" r="4" fill="#c9a84c"/>
      <circle cx="90" cy="12" r="6" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.5"/>
    </svg>
  )
}
