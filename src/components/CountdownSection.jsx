// CountdownSection.jsx — Ortga sanash / Обратный отсчёт

import { useState, useEffect } from 'react'
import { SectionTitle } from './VenueSection'

function getTimeLeft(eventDate) {
  const now  = new Date().getTime()
  const diff = eventDate.getTime() - now

  if (diff <= 0) return null

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

export default function CountdownSection({ t, eventDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <section
      style={{
        padding: 'clamp(60px, 10vw, 100px) 24px',
        background: 'linear-gradient(180deg, var(--ink-mid) 0%, var(--ink) 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ornament */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(180px, 35vw, 320px)',
          color: 'rgba(201,168,76,0.04)',
          fontFamily: 'Great Vibes, cursive',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        ♥
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
        {/* Title */}
        <div className="reveal" style={{ marginBottom: '2rem' }}>
          <div className="ornament" style={{ color: 'var(--gold-light)' }}>
            <span
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                letterSpacing: '6px',
                color: 'rgba(201,168,76,0.7)',
                textTransform: 'uppercase',
              }}
            >
              {t.countdownTitle}
            </span>
          </div>
        </div>

        {/* ── Countdown display ── */}
        {timeLeft ? (
          <div
            className="reveal delay-100"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'clamp(12px, 4vw, 32px)',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
            }}
          >
            <CountBlock number={timeLeft.days}    label={t.daysLabel} />
            <CountBlock number={timeLeft.hours}   label={t.hoursLabel} />
            <CountBlock number={timeLeft.minutes} label={t.minutesLabel} />
            <CountBlock number={timeLeft.seconds} label={t.secondsLabel} />
          </div>
        ) : (
          <p
            className="reveal delay-100"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: 'var(--gold)',
              fontStyle: 'italic',
              marginBottom: '2.5rem',
              letterSpacing: '2px',
            }}
          >
            {t.eventPassed}
          </p>
        )}

        {/* Divider dots */}
        <p
          className="reveal delay-200"
          style={{
            color: 'rgba(201,168,76,0.4)',
            fontSize: '0.8rem',
            letterSpacing: '8px',
            marginBottom: '1.5rem',
          }}
        >
          ◆ ◆ ◆
        </p>

        {/* Date reminder */}
        <p
          className="reveal delay-300"
          style={{
            fontFamily: 'Great Vibes, cursive',
            fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
            color: 'var(--gold)',
            opacity: 0.8,
          }}
        >
          24.07.2026
        </p>
      </div>
    </section>
  )
}

/* ── Single countdown block ── */
function CountBlock({ number, label }) {
  const display = String(number).padStart(2, '0')

  return (
    <div className="countdown-block">
      <div
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.25)',
          padding: 'clamp(12px, 3vw, 20px) clamp(8px, 2vw, 16px)',
          minWidth: 'clamp(55px, 14vw, 80px)',
          borderRadius: '2px',
          transition: 'transform 0.3s',
        }}
      >
        <div
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            fontWeight: 600,
            color: 'var(--gold)',
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          {display}
        </div>
      </div>
      <div
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(0.65rem, 1.8vw, 0.78rem)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.55)',
          marginTop: '6px',
        }}
      >
        {label}
      </div>
    </div>
  )
}
