import { useState, useRef, useEffect } from 'react'
import EnvelopeOverlay from './components/EnvelopeOverlay'
import LanguageSwitcher from './components/LanguageSwitcher'
import Hero from './components/Hero'
import InvitationText from './components/InvitationText'
import CalendarSection from './components/CalendarSection'
import VenueSection from './components/VenueSection'
import GiftSection from './components/GiftSection'
import CountdownSection from './components/CountdownSection'
import Footer from './components/Footer'
import { translations } from './translations'

// ══ Tadbir sanasi / Дата события ══
// Bu yerni o'zgartiring / Измените здесь:
export const EVENT_DATE = new Date('2026-07-24T18:00:00')

export default function App() {
  const [lang, setLang]         = useState('uz')   // 'uz' yoki 'ru'
  const [phase, setPhase]       = useState('locked') // 'locked' | 'opening' | 'open'
  const audioRef                = useRef(null)

  const t = translations[lang]

  // Konvert ochilganda chaqiriladi
  const handleUnlock = () => {
    if (phase !== 'locked') return
    setPhase('opening')

    // Musiqa boshlash
    if (audioRef.current) {
      audioRef.current.volume = 0.7
      audioRef.current.play().catch(() => {
        // Brauzер autoplay ni bloklagan bo'lsa, foydalanuvchi o'zi yoqadi
      })
    }

    // Animatsiya tugagandan keyin to'liq ochish
    setTimeout(() => setPhase('open'), 1600)
  }

  // Lang o'zgarsa hujjat tilini ham yangilaymiz
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      {/* ── Audio element ── */}
      {/* Musiqa faylini: public/music.mp3 ga joylashtiring */}
      <audio ref={audioRef} loop preload="none">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* ── Konvert overlay ── */}
      {phase !== 'open' && (
        <EnvelopeOverlay
          t={t}
          lang={lang}
          setLang={setLang}
          onUnlock={handleUnlock}
          isOpening={phase === 'opening'}
        />
      )}

      {/* ── Asosiy kontent ── */}
      {phase !== 'locked' && (
        <div
          className="transition-opacity duration-700"
          style={{ opacity: phase === 'open' ? 1 : 0 }}
        >
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <Hero t={t} />
          <InvitationText t={t} />
          <CalendarSection t={t} />
          <VenueSection t={t} />
          <GiftSection t={t} />
          <CountdownSection t={t} eventDate={EVENT_DATE} />
          <Footer t={t} />
        </div>
      )}
    </div>
  )
}
