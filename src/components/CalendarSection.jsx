// CalendarSection.jsx — Taqvim (Aprel 2026 / Апрель 2026)

// Aprel 2026 qo'lda sozlangan
// April 2026: starts on Wednesday (index 2 in Mon-Sun format)
const APRIL_2026 = {
  startDayIndex: 2, // 0=Mon, 1=Tue, 2=Wed, ...
  totalDays: 30,
}

export default function CalendarSection({ t }) {
  const eventDay = t.eventDate // 5

  // Build calendar grid (Mon–Sun, 6 weeks max)
  const cells = []
  for (let i = 0; i < APRIL_2026.startDayIndex; i++) cells.push(null)
  for (let d = 1; d <= APRIL_2026.totalDays; d++) cells.push(d)
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <section
      style={{
        padding: 'clamp(40px, 8vw, 80px) 24px',
        background: 'var(--cream-2)',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
        {/* ── Month title ── */}
        <p
          className="reveal"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
            letterSpacing: '8px',
            color: 'var(--gold-dark)',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          {t.calendarTitle}
        </p>

        {/* ── Calendar card ── */}
        <div
          className="gold-card reveal delay-100"
          style={{
            padding: 'clamp(20px, 5vw, 36px)',
            maxWidth: '380px',
            margin: '0 auto',
          }}
        >
          {/* Week day headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '4px',
              marginBottom: '12px',
            }}
          >
            {t.weekDays.map((d) => (
              <div
                key={d}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(0.65rem, 1.8vw, 0.78rem)',
                  color: 'var(--gold-dark)',
                  letterSpacing: '1px',
                  textAlign: 'center',
                  padding: '4px 0',
                  textTransform: 'uppercase',
                }}
              >
                {d}
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.25)', marginBottom: '12px' }} />

          {/* Day cells */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '4px',
            }}
          >
            {cells.map((day, idx) => {
              const isEvent = day === eventDay
              return (
                <div
                  key={idx}
                  className={isEvent ? 'calendar-day-event' : ''}
                  style={{
                    height: 'clamp(28px, 7vw, 38px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
                    fontWeight: isEvent ? 600 : 400,
                    color: isEvent ? 'white' : day ? 'var(--text)' : 'transparent',
                    borderRadius: isEvent ? '50%' : '0',
                    background: isEvent
                      ? 'linear-gradient(135deg, var(--gold), var(--gold-dark))'
                      : 'transparent',
                    boxShadow: isEvent ? '0 2px 10px rgba(201,168,76,0.4)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {day || ''}
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Event date highlight below ── */}
        <div
          className="reveal delay-200"
          style={{
            marginTop: '2rem',
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            letterSpacing: '5px',
            color: 'var(--gold-dark)',
            fontStyle: 'italic',
          }}
        >
          ◆ 24-iyul, 2026 ◆
        </div>
      </div>
    </section>
  )
}
