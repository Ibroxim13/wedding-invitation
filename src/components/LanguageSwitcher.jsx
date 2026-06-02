// LanguageSwitcher.jsx — Floating language toggle

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div
      className="fixed top-4 right-4 z-40 flex items-center gap-1"
      style={{
        background: 'rgba(250,247,242,0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(201,168,76,0.3)',
        padding: '4px 6px',
        borderRadius: '2px',
      }}
    >
      <button
        className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
        onClick={() => setLang('uz')}
      >
        UZ
      </button>
      <span style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.75rem' }}>|</span>
      <button
        className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
        onClick={() => setLang('ru')}
      >
        RU
      </button>
    </div>
  )
}
