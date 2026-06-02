// Footer.jsx — Pastki qism
import ring from "../ring.png"

export default function Footer({ t }) {
  return (
    <footer
      style={{
        padding: 'clamp(40px, 8vw, 70px) 24px',
        background: 'var(--cream)',
        textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,0.2)'
      }}
    >
      {/* Ornament */}
      <div
        style={{
          color: 'var(--gold)',
          letterSpacing: '12px',
          fontSize: '1rem',
          opacity: 0.5,
          marginBottom: '1.5rem'
        }}
      >
        ♥
      </div>

      {/* Waiting text */}
      <p
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1rem, 3vw, 1.3rem)',
          fontStyle: 'italic',
          color: 'var(--ink-mid)',
          marginBottom: '1rem',
          letterSpacing: '2px',
        }}
      >
        {t.waitingText}
      </p>

      {/* Gold rule */}
      <hr className="gold-rule" />

      {/* Names script */}
      <p
        style={{
          fontFamily: 'Great Vibes, cursive',
          fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
          color: 'var(--gold)',
          opacity: 0.7,
          letterSpacing: '2px',
          marginBottom: '1.5rem',
        }}
      >
        Temurbek & Nodirabegim
      </p>
      <p className="flex items-center justify-center">
         <img src={ring} alt="" className="w-100 h-60 object-contain mb-8"/>
      </p>
      

      {/* Date */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1rem',
          letterSpacing: '5px',
          color: 'var(--text-soft)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}
      >
        24 · 07 · 2026
      </p>

      {/* Credit */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.8rem',
          color: 'rgba(122, 98, 72, 0.4)',
          letterSpacing: '2px',
        }}
      >
        {t.footerCredit}
      </p>
    </footer>
  )
}
