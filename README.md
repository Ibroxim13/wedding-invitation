# 🌸 To'y Taklifnomasi / Свадебное Приглашение

Klassik va nafis to'y taklifnomasi — React + Tailwind CSS

---

## ⚙️ O'rnatish / Установка

```bash
npm install
npm run dev
```

---

## ✏️ Ma'lumotlarni o'zgartirish

### 1. Matnlar (`src/translations.js`)
Barcha matnlar: ismlar, manzil, karta raqami, sana — shu faylda.

```js
// Kuyov va kelin ismlari
groomName: 'Temurbek',
brideName: 'Nodirabegim',

// Karta raqami
cardNumber: '8600 0000 0000 0000',
```

### 2. To'y sanasi (`src/App.jsx`)
```js
// Bu qatorni o'zgartiring:
export const EVENT_DATE = new Date('2026-04-05T18:00:00')
```

### 3. Juft rasmi
`public/couple.jpg` nomli rasmni qo'ying.  
(Istalgan o'lcham, ideal 400×400 yoki yuqoriroq, kvadrat yoki portret)

### 4. Musiqa
`public/music.mp3` nomli musiqa faylini qo'ying.  
(Qulfni bosganda avtomatik ijro etiladi)

---

## 🚀 Netlify Deploy

```bash
npm run build
```

Yoki Netlify UI da:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

`netlify.toml` fayli allaqachon to'g'ri sozlangan! ✅

---

## 📁 Fayl tuzilmasi

```
src/
  translations.js      ← Barcha matnlar (shu yerni o'zgartiring)
  App.jsx              ← Asosiy ilova + EVENT_DATE
  components/
    EnvelopeOverlay    ← Konvert/qulf ekrani
    Hero               ← Ismlar va rasm
    InvitationText     ← Taklif matni
    CalendarSection    ← Taqvim
    VenueSection       ← Manzil
    GiftSection        ← Karta raqami
    CountdownSection   ← Ortga sanash
    Footer             ← Pastki qism

public/
  music.mp3            ← Musiqa faylini shu yerga qo'ying
  couple.jpg           ← Juft rasmini shu yerga qo'ying
```
