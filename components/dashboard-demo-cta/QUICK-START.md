# Quick Start Guide

## 📦 What You Got

A fully self-contained `dashboard-demo-cta` folder with:

```
dashboard-demo-cta/
├── components/
│   ├── DashboardDemoCTA.tsx          # Main CTA component (import this!)
│   ├── layouts/
│   │   ├── Dashboard16x9.tsx         # Full dashboard (16:9 desktop)
│   │   └── Dashboard3x4.tsx          # Hero focus (3:4 mobile)
│   ├── widgets/
│   │   ├── SidebarDemo.tsx           # Auto-cycling sidebar
│   │   ├── StatCardsDemo.tsx         # Animated stat cards
│   │   ├── PowerGaugeDemo.tsx        # Animated power gauge
│   │   ├── PowerBarsDemo.tsx         # Power installation bars
│   │   └── RequestCardsDemo.tsx      # Request timeline
│   └── hooks/
│       ├── useMockData.ts            # Demo data generator
│       ├── useDashboardAnimation.ts  # Scroll animations
│       └── useCounterAnimation.ts    # Number counter animations
├── data/
│   └── mock-data.ts                  # Hardcoded demo data
├── types/
│   └── dashboard.types.ts            # TypeScript interfaces
├── public/
│   └── optimems-logos/               # Logo assets (6 SVGs)
│   ├── optimems-logo-icon.svg
│   ├── optimems-logo-fontmark.svg
│   └── optimems-logo.svg
├── styles.css                        # Custom scrollbar styles
├── README.md                         # Full documentation
├── USAGE-EXAMPLE.tsx                 # Usage examples
└── QUICK-START.md                    # This file
```

## 🚀 3 Steps to Use

### Step 1: Copy to Your Project

```bash
# Copy the entire folder to your project
cp -r dashboard-demo-cta /path/to/your/project/
```

### Step 2: Copy Assets

```bash
# Copy logos to your public folder
cp -r dashboard-demo-cta/public/optimems-logos /path/to/your/project/public/
```

### Step 3: Install Dependencies & Import

```bash
npm install framer-motion lucide-react
```

```tsx
import { DashboardDemoCTA } from './dashboard-demo-cta/components/DashboardDemoCTA'

export default function Page() {
  return <DashboardDemoCTA />
}
```

## ✅ Done!

That's it! The component will work immediately with default content. Customize props as needed:

```tsx
<DashboardDemoCTA
  headline="Your Headline"
  subheadline="Your description"
  primaryCTA={{ label: "Your CTA", href: "/your-link" }}
/>
```

## 🎨 Need Custom Scrollbar?

Import the CSS file in your layout:

```tsx
import './dashboard-demo-cta/styles.css'
```

Or copy the styles to your global CSS file.

## 📱 Responsive Behavior

- **Desktop (≥1024px)**: Shows full 16:9 dashboard with sidebar
- **Mobile/Tablet (<1024px)**: Shows 3:4 hero-focused layout

## 🆘 Need Help?

See `README.md` for full documentation and `USAGE-EXAMPLE.tsx` for more examples.

---

**Total files**: 21
**Total size**: ~50KB (excluding node_modules)
**Dependencies**: framer-motion, lucide-react (you likely already have these)
