# OptiMems Dashboard Demo CTA Component

A self-contained, reusable React component that showcases an interactive solar energy management dashboard with animated widgets and a responsive sidebar. Perfect for landing pages and marketing sites.

![Dashboard Demo CTA](https://img.shields.io/badge/React-18%2B-blue) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11%2B-pink) ![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue)

## ✨ Features

- **Live Dashboard Demo**: Interactive dashboard showcasing real-time solar energy management
- **Auto-Cycling Sidebar**: Smoothly transitions between expanded (256px), compact (128px), and collapsed (64px) states
- **Animated Widgets**:
  - Stat cards with counter animations
  - Power gauge with animated arc fills
  - Power installation bars with gradient colors
  - Request timeline with status indicators
- **Responsive Design**: 16:9 aspect ratio on desktop, 3:4 on mobile/tablet
- **Dark Theme**: Matches OptiMems dashboard color scheme (#0a1628, #e91e63)
- **Fully Self-Contained**: Copy the folder anywhere, no external dependencies except React + Framer Motion
- **Scroll Animations**: Widgets animate into view when scrolled into viewport
- **TypeScript**: Full type safety included

## 📦 Installation

### 1. Copy the Component Folder

Copy the entire `dashboard-demo-cta` folder to your project:

```bash
# If your project is in a different location
cp -r dashboard-demo-cta /path/to/your/project/
```

### 2. Copy Assets

Copy the logo assets to your public folder:

```bash
# Create directory if it doesn't exist
mkdir -p public/optimems-logos

# Copy logos
cp dashboard-demo-cta/public/optimems-logos/* public/optimems-logos/
```

**Required assets:**
- `public/optimems-logos/optimems-logo-icon.svg`
- `public/optimems-logos/optimems-logo-fontmark.svg`
- `public/optimems-logos/optimems-logo.svg` (optional)

### 3. Install Dependencies

Ensure your project has these dependencies:

```bash
npm install framer-motion lucide-react
```

Or if using Yarn:

```bash
yarn add framer-motion lucide-react
```

Or if using pnpm:

```bash
pnpm add framer-motion lucide-react
```

## 🚀 Usage

### Basic Usage

```tsx
import { DashboardDemoCTA } from './dashboard-demo-cta/components/DashboardDemoCTA'

export default function Page() {
  return (
    <main>
      {/* Your existing content */}
      <Hero />
      <Stats />

      {/* Add the dashboard demo CTA */}
      <DashboardDemoCTA />

      {/* More content */}
      <Footer />
    </main>
  )
}
```

### Custom Content

```tsx
import { DashboardDemoCTA } from './dashboard-demo-cta/components/DashboardDemoCTA'

export default function Page() {
  return (
    <DashboardDemoCTA
      headline="Ready to Transform Your Solar Operations?"
      subheadline="Get started today and see the difference real-time insights make."
      primaryCTA={{
        label: "Start Free Trial",
        href: "/signup"
      }}
      secondaryCTA={{
        label: "Schedule Demo",
        href: "/contact"
      }}
      id="demo-section"
      className="my-12"
    />
  )
}
```

### With Navigation Anchor

```tsx
import { DashboardDemoCTA } from './dashboard-demo-cta/components/DashboardDemoCTA'

export default function Page() {
  return (
    <>
      <nav>
        <a href="#dashboard-demo">View Demo</a>
      </nav>

      {/* ...content... */}

      <DashboardDemoCTA id="dashboard-demo" />
    </>
  )
}
```

## 🎨 Props

### DashboardDemoCTA

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | `string` | `"Experience the Future of Solar Energy Management"` | Main headline text |
| `subheadline` | `string` | `"Our refined dashboard delivers..."` | Supporting description |
| `primaryCTA` | `{ label: string; href: string }` | `{ label: "Start Free Trial", href: "#signup" }` | Primary button |
| `secondaryCTA` | `{ label: string; href: string }` | `{ label: "Watch Demo", href: "#demo" }` | Secondary button |
| `id` | `string` | `"dashboard-demo"` | Section ID for anchor links |
| `className` | `string` | `""` | Additional CSS classes |

## 🎯 Component Structure

```
DashboardDemoCTA (Main CTA Section)
├── Left Column: Marketing Copy
│   ├── Headline
│   ├── Subheadline
│   ├── CTA Buttons
│   └── Feature Highlights
└── Right Column: Dashboard Demo
    ├── Dashboard16x9 (Desktop, ≥1024px)
    │   ├── SidebarDemo (auto-cycling)
    │   ├── StatCardsDemo (4 cards)
    │   ├── PowerGaugeDemo (animated gauge)
    │   ├── PowerBarsDemo (3 installations)
    │   └── RequestCardsDemo (3 requests)
    └── Dashboard3x4 (Mobile/Tablet, <1024px)
        ├── Logo
        ├── StatCardsDemo (2x2 grid)
        └── PowerGaugeDemo
```

## 🎨 Customization

### Colors

The component uses OptiMems dashboard colors:

```css
/* Dashboard dark theme colors used */
--bg-primary: #0a1628;      /* Main background */
--bg-card: #1a2942;         /* Card background */
--bg-card-dark: #0f1c30;    /* Dark card background */
--accent: #e91e63;          /* Pink accent */
--cyan: #06b6d4;            /* Cyan for power */
--green: #10b981;           /* Green for success */
--red: #EB333D;             /* Red for errors */
```

To customize colors, edit the widget files in `components/widgets/`:

```tsx
// Example: Change accent color in SidebarDemo.tsx
<h3 className="text-[#YOUR_COLOR] text-xs font-semibold tracking-wider">
```

### Animation Speed

Adjust sidebar cycling speed in `Dashboard16x9.tsx`:

```tsx
<SidebarDemo autoCycle={true} cycleInterval={3000} />
//                                    ^^^ Change this (milliseconds)
```

### Mock Data

Edit `data/mock-data.ts` to change the displayed data:

```typescript
export const mockDashboardStats: DashboardStats = {
  parks: 12,           // Change number of parks
  devices: 248,        // Change number of devices
  totalSize: 450,      // Change total MWp
  activeConnections: 235,
};
```

## 📱 Responsive Behavior

| Screen Size | Layout | Sidebar | Widgets Shown |
|-------------|--------|---------|---------------|
| **< 768px** (Mobile) | 3:4 Portrait | Hidden | Logo + 4 StatCards + PowerGauge |
| **768px - 1023px** (Tablet) | 3:4 Portrait | Hidden | Logo + 4 StatCards + PowerGauge |
| **≥ 1024px** (Desktop) | 16:9 Landscape | Auto-cycling | All widgets: Sidebar + Stats + Gauge + Bars + Requests |

## 🔧 Advanced Usage

### Disable Sidebar Auto-Cycling

```tsx
// In components/layouts/Dashboard16x9.tsx
<SidebarDemo autoCycle={false} />
```

### Change Number of Visible Items

```tsx
// In components/layouts/Dashboard16x9.tsx
<PowerBarsDemo installations={installations} maxItems={5} />
<RequestCardsDemo requests={requests} maxItems={6} />
```

### Use Individual Widgets

You can use widgets independently:

```tsx
import { StatCardsDemo } from './dashboard-demo-cta/components/widgets/StatCardsDemo'
import { PowerGaugeDemo } from './dashboard-demo-cta/components/widgets/PowerGaugeDemo'

export default function CustomPage() {
  const { stats, powerGauge } = useMockData()

  return (
    <div>
      <StatCardsDemo stats={stats} columns={4} />
      <PowerGaugeDemo data={powerGauge} size="md" />
    </div>
  )
}
```

## 🐛 Troubleshooting

### Logos Not Showing

**Problem**: Logo images don't display

**Solution**:
1. Ensure assets are copied to `public/optimems-logos/`
2. Check file paths in components:
   ```tsx
   src="/optimems-logos/optimems-logo-icon.svg"  // Note the leading slash
   ```

### Animations Not Working

**Problem**: Widgets don't animate

**Solution**:
1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Check browser console for errors
3. Verify `"use client"` directive at top of component files

### TypeScript Errors

**Problem**: Type errors when importing

**Solution**:
1. Ensure TypeScript is configured correctly
2. Check that all type files are present in `types/`
3. Verify import paths are correct

## 📄 License

This component is part of the OptiMems project. Use it freely in your projects.

## 🤝 Contributing

To modify the component:

1. Edit files in `dashboard-demo-cta/`
2. Test your changes
3. Update this README if you add new props or features

## 📞 Support

For issues or questions about the OptiMems dashboard, please contact the development team.

---

**Built with ❤️ for OptiMems Solar Energy Management**
