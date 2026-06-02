// InvitationText.jsx — Rasmiy taklif matni

export default function InvitationText({ t }) {
  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 100px) 24px',
        maxWidth: '640px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {/* Section divider */}
      <div className="section-divider">✦ ✦ ✦</div>

      {/* Section heading */}
      <h2
        className="reveal"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
          fontWeight: 500,
          fontStyle: 'italic',
          color: 'var(--ink-mid)',
          marginBottom: '2rem',
          lineHeight: 1.4,
        }}
      >
        {t.dearGuests}
      </h2>

      <hr className="gold-rule" />

      {/* Invitation paragraphs */}
      <p
        className="reveal delay-100"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
          color: 'var(--text)',
          lineHeight: 1.9,
          marginBottom: '1.4rem',
          fontWeight: 400,
        }}
      >
        {t.inviteText1}
      </p>

      <p
        className="reveal delay-200"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
          color: 'var(--text)',
          lineHeight: 1.9,
          marginBottom: '1.4rem',
        }}
      >
        {t.inviteText2}
      </p>

      <p
        className="reveal delay-300"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
          color: 'var(--ink-mid)',
          lineHeight: 1.9,
          fontWeight: 500,
        }}
      >
        {t.inviteText3}
      </p>

      {/* Heart ornament */}
      <div
        className="reveal delay-400"
        style={{
          marginTop: '2.5rem',
          fontSize: '1.4rem',
          color: 'var(--gold)',
          letterSpacing: '12px',
          opacity: 0.6,
        }}
      >
        ♥ ♥ ♥
      </div>

      <div className="section-divider" style={{ marginTop: '3rem' }}>✦ ✦ ✦</div>
    </section>
  )
}
