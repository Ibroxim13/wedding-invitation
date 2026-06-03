export default function MusicToggle({ isOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={isOn ? 'Musiqani o\'chirish' : 'Musiqani yoqish'}
      style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 40,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.4)',
        background: 'rgba(250,247,242,0.9)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold-dark)',
        transition: 'all 0.2s',
      }}
    >
      {isOn ? <MusicOnIcon /> : <MusicOffIcon />}
    </button>
  )
}

function MusicOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  )
}

function MusicOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="2" x2="22" y2="22"/>
      <path d="M9 9v9"/>
      <path d="M9 5l12-2v10"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  )
}