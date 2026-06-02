// GiftSection.jsx — Karta raqami / Номер карты

import { useState } from 'react'
import { SectionTitle } from './VenueSection'

export default function GiftSection({ t }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(t.cardNumber.replace(/\s/g, ''))
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
      .catch(() => {
        // Fallback for older browsers
        const el = document.createElement('textarea')
        el.value = t.cardNumber.replace(/\s/g, '')
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
  }

  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 100px) 24px',
        background: 'var(--cream-2)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <SectionTitle>{t.giftTitle}</SectionTitle>

        {/* Description */}
        <p
          className="reveal delay-100"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: 'var(--text)',
            lineHeight: 1.8,
            marginBottom: '2rem',
            fontStyle: 'italic',
          }}
        >
          {t.giftText}
        </p>

        {/* ── Card display ── */}
        <div
          className="gold-card reveal delay-200"
          style={{
            padding: 'clamp(24px, 6vw, 36px)',
            marginBottom: '1.6rem',
          }}
        >
          {/* Recipient row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '16px',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.85rem',
                color: 'var(--text-soft)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}
            >
              {t.recipient}
            </span>
            <span
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1rem, 3vw, 1.15rem)',
                color: 'var(--ink-mid)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              {t.recipientName}
            </span>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.25)', marginBottom: '16px' }} />

          {/* Card number */}
          <div
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
              letterSpacing: 'clamp(2px, 1vw, 6px)',
              color: 'var(--gold-dark)',
              fontWeight: 500,
              userSelect: 'all',
            }}
          >
            {t.cardNumber}
          </div>
        </div>

        {/* ── Copy button ── */}
        <button
          className="copy-btn reveal delay-300"
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: copied
              ? 'linear-gradient(135deg, #5a8c5a, #3d6b3d)'
              : 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
            transition: 'all 0.3s',
          }}
        >
          {copied ? (
            <>
              <CheckIcon /> {t.copiedBtn}
            </>
          ) : (
            <>
              <CopyIcon /> {t.copyBtn}
            </>
          )}
        </button>
      </div>
    </section>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}
