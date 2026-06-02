// EnvelopeOverlay.jsx — Konvert va qulf ekrani

export default function EnvelopeOverlay({ t, lang, setLang, onUnlock, isOpening }) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overlay-bg"
      style={{
        animation: isOpening ? 'envelopeAway 1.3s cubic-bezier(0.4,0,0.2,1) forwards' : 'none',
      }}
    >
      {/* Background pattern */}
      <div className="overlay-pattern" />

      {/* ── Top lang switcher on overlay ── */}
      <div className="absolute top-5 right-5 flex gap-1 z-10">
        <button
          className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
          onClick={() => setLang('uz')}
        >
          {t.langUz}
        </button>
        <button
          className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
          onClick={() => setLang('ru')}
        >
          {t.langRu}
        </button>
      </div>

      {/* ── Corner ornaments ── */}
      <CornerOrnaments />

      {/* ── Title ── */}
      <div className="relative z-10 text-center px-6 mb-8">
        <p
          className="reveal"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
            letterSpacing: '6px',
            color: 'rgba(201,168,76,0.6)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          ✦ ✦ ✦
        </p>
        <h1
          className="reveal delay-100"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
            fontWeight: 500,
            color: '#f2e0a8',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            lineHeight: 1.4,
          }}
        >
          {t.overlayTitle}
        </h1>
      </div>

      {/* ── Envelope ── */}
      <div
        className="reveal delay-200 relative z-10"
        style={{
          animation: isOpening
            ? 'reveal 0s, float 0s'
            : 'fadeUp 0.9s ease 0.2s forwards, float 3s ease-in-out 1.5s infinite',
          opacity: 0,
        }}
      >
        <Envelope onUnlock={onUnlock} isOpening={isOpening} />
      </div>

      {/* ── Hint text ── */}
      <p
        className="reveal delay-400 relative z-10 mt-8 text-center"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
          color: 'rgba(201,168,76,0.55)',
          letterSpacing: '2px',
          fontStyle: 'italic',
        }}
      >
        {t.overlaySubtitle}
      </p>

      {/* ── Bottom ornament ── */}
      <div
        className="absolute bottom-6 left-0 right-0 text-center reveal delay-600"
        style={{
          color: 'rgba(201,168,76,0.25)',
          letterSpacing: '6px',
          fontSize: '0.7rem',
        }}
      >
        ◆ ◆ ◆
      </div>
    </div>
  )
}

/* ── Envelope shape component ── */
function Envelope({ onUnlock, isOpening }) {
  return (
    <div
      className="envelope-body cursor-pointer select-none"
      onClick={onUnlock}
      style={{
        width: 'min(320px, 80vw)',
        height: 'min(220px, 55vw)',
        maxWidth: '320px',
        maxHeight: '220px',
        transition: 'box-shadow 0.2s',
        boxShadow: '0 12px 50px rgba(0,0,0,0.5), 0 2px 8px rgba(201,168,76,0.15)',
      }}
    >
      {/* Side folds */}
      <div className="envelope-fold-l" />
      <div className="envelope-fold-r" />

      {/* Bottom fold */}
      <div className="envelope-fold-b" />

      {/* Top flap */}
      <div
        className="envelope-flap"
        style={isOpening ? { transform: 'rotateX(180deg) translateY(-100%)' } : {}}
      />

      {/* Decorative inner border */}
      <div
        style={{
          position: 'absolute',
          inset: '8px',
          border: '1px solid rgba(201,168,76,0.2)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── Lock button (wax seal) ── */}
      <button
        className="lock-btn"
        onClick={onUnlock}
        aria-label="Unlock invitation"
      >
        <div
          className="lock-circle"
          style={isOpening ? { animation: 'unlockBounce 0.5s ease forwards' } : {}}
        >
          {isOpening ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          )}
        </div>
      </button>
    </div>
  )
}

/* ── Corner ornaments ── */
function CornerOrnaments() {
  const style = {
    position: 'absolute',
    width: '80px',
    height: '80px',
    opacity: 0.25,
  }
  const path = "M0 0 L40 0 M0 0 L0 40 M0 0 L10 10"
  const goldStroke = { stroke: '#c9a84c', strokeWidth: '1.5', fill: 'none' }

  return (
    <>
      {/* Top-left */}
      <svg style={{ ...style, top: 16, left: 16 }} viewBox="0 0 80 80">
        <path d="M4 4 L36 4 L36 6 L6 6 L6 36 L4 36 Z" {...goldStroke} />
        <path d="M10 4 L10 10 M4 10 L10 10" {...goldStroke} />
      </svg>
      {/* Top-right */}
      <svg style={{ ...style, top: 16, right: 16, transform: 'scaleX(-1)' }} viewBox="0 0 80 80">
        <path d="M4 4 L36 4 L36 6 L6 6 L6 36 L4 36 Z" {...goldStroke} />
        <path d="M10 4 L10 10 M4 10 L10 10" {...goldStroke} />
      </svg>
      {/* Bottom-left */}
      <svg style={{ ...style, bottom: 16, left: 16, transform: 'scaleY(-1)' }} viewBox="0 0 80 80">
        <path d="M4 4 L36 4 L36 6 L6 6 L6 36 L4 36 Z" {...goldStroke} />
        <path d="M10 4 L10 10 M4 10 L10 10" {...goldStroke} />
      </svg>
      {/* Bottom-right */}
      <svg style={{ ...style, bottom: 16, right: 16, transform: 'scale(-1,-1)' }} viewBox="0 0 80 80">
        <path d="M4 4 L36 4 L36 6 L6 6 L6 36 L4 36 Z" {...goldStroke} />
        <path d="M10 4 L10 10 M4 10 L10 10" {...goldStroke} />
      </svg>
    </>
  )
}
