# Lokesh Mawane — Portfolio

A fully animated single-page portfolio built with **Angular 19**, **PrimeNG v21**, **PrimeFlex**, and **SCSS**.

## ✨ Features

- 🎨 Dark theme with Deep Indigo / Hot Pink / Cyan / Amber palette
- 🌐 Animated particle canvas background (pure Canvas API)
- 🖱️ Custom animated cursor (glowing dot + trailing ring)
- ⏳ Fullscreen loader with animated progress bar
- 🧭 Frosted-glass navbar with scroll detection
- 🦸 Hero section with 3D floating card & shimmer gradient name
- 🧠 Skills section with IntersectionObserver-triggered progress bars
- 💼 Vertical timeline experience section with slide-in animations
- 🚀 Project cards with hover sweep effects
- 🎓 Education section with score badges
- 📬 Contact section with ripple avatar animation
- 📱 Fully responsive via PrimeFlex

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 19 (Standalone Components) |
| UI Library | PrimeNG v21 + PrimeFlex |
| Styling | SCSS with CSS custom properties |
| Animations | CSS animations + IntersectionObserver |
| Icons | PrimeIcons |
| Fonts | Syne (headings) + DM Sans (body) |

## 🚀 Getting Started

```bash
npm install
ng serve
```

Then open [http://localhost:4200](http://localhost:4200)

## 🏗️ Project Structure

```
src/app/
├── components/
│   ├── loader/          # Fullscreen intro loader
│   ├── cursor/          # Custom animated cursor
│   ├── navbar/          # Fixed frosted-glass navigation
│   ├── particle-canvas/ # Canvas particle network
│   ├── hero/            # Landing hero section
│   ├── skills/          # Skills + progress bars + tech cloud
│   ├── experience/      # Timeline work history
│   ├── projects/        # Project cards grid
│   ├── education/       # Education cards
│   └── contact/         # Contact info + ripple avatar
└── services/
    └── portfolio.ts     # All resume data (single source of truth)
```

## 📝 Customization

All resume data lives in `src/app/services/portfolio.ts`. Edit that file to update:
- Name, title, contact info
- Skills and tech stack
- Work experience
- Projects
- Education
