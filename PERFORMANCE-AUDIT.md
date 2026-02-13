# Performance Audit Report — Optimems Landing Page

**Date:** February 12, 2026
**Codebase:** Next.js 15, Tailwind v4, Framer Motion, next-intl
**Goal:** Drastically improve reload speed, smooth navigation, zero rendering glitches — without changing design or aesthetics.

---

## Executive Summary

The site has a **severe JavaScript bloat problem**. The landing page ships ~13MB of uncompressed JS to the browser (5.8MB page chunk + 7.3MB shared framework bundle). Seven unused dependencies inflate the bundle for zero benefit. Blog images reach up to 6.4MB each. All 148 components are client-side rendered. Every page loads the entire 154KB Greek translation file even for English visitors. These are the root causes behind slow loads and janky rendering.

**Estimated improvement potential: 40-60% faster initial load, near-instant navigation.**

---

## Bundle Analysis (Build Output)

| Chunk | Size (uncompressed) | Notes |
|-------|---------------------|-------|
| `main-app.js` | **7.3 MB** | Shared framework — loaded on every page |
| `[locale]/page.js` (landing) | **5.8 MB** | Landing page bundle |
| `consult/page.js` | **6.5 MB** | Consult product page |
| `warranties/page.js` | **5.3 MB** | Warranties page |
| `[locale]/layout.js` | 560 KB | Layout chunk |
| `polyfills.js` | 112 KB | Standard |
| `webpack.js` | 140 KB | Runtime |

The 7.3MB `main-app.js` is the biggest red flag — it means massive amounts of library code are being bundled into the shared chunk that every single page loads.

---

## Priority 1: Remove 7 Unused Dependencies

These packages are in `package.json` but have **zero imports** anywhere in the codebase:

| Package | Approx. Bundle Impact | Status |
|---------|----------------------|--------|
| `recharts` | ~200KB gzipped | **UNUSED** — zero imports found |
| `react-hook-form` | ~30KB gzipped | **UNUSED** |
| `zod` | ~15KB gzipped | **UNUSED** |
| `@hookform/resolvers` | ~5KB gzipped | **UNUSED** (dependency of react-hook-form) |
| `embla-carousel-react` | ~15KB gzipped | **UNUSED** |
| `react-resizable-panels` | ~12KB gzipped | **UNUSED** |
| `input-otp` | ~8KB gzipped | **UNUSED** |
| `cmdk` | ~10KB gzipped | **UNUSED** |

**Action:** Remove all 8 packages from `package.json` and run `npm install`. This alone could reduce the shared bundle by ~300KB gzipped.

```bash
npm uninstall recharts react-hook-form @hookform/resolvers zod embla-carousel-react react-resizable-panels input-otp cmdk
```

---

## Priority 2: Duplicate Icon Libraries

Two separate icon libraries are installed:

| Library | `node_modules` size | Usage |
|---------|-------------------|-------|
| `@phosphor-icons/react` | **57 MB** | Used in some components |
| `lucide-react` | **33 MB** | Used in other components |

Both are full icon sets. Having two means the tree-shaker has to work twice as hard and some icons may not get properly eliminated.

**Action:** Audit which icons come from which library. Consolidate on **one** library (likely `lucide-react` since it's already used by shadcn/ui components). Replace the ~10-15 Phosphor icon imports with Lucide equivalents. Remove `@phosphor-icons/react`.

---

## Priority 3: Translation File Bloat

Both translation files are loaded **in full** on every page via `NextIntlClientProvider`:

| File | Size |
|------|------|
| `messages/el.json` | **154 KB** (2,078 lines) |
| `messages/en.json` | **92 KB** (2,013 lines) |

Even English visitors download the full Greek file (and vice versa) because `getMessages()` in the locale layout returns all messages for the current locale — but the entire file structure is still parsed into the client provider.

**Actions:**

1. **Split translations by namespace/page.** Instead of one monolithic JSON, create `messages/el/common.json`, `messages/el/landing.json`, `messages/el/solar-control.json`, etc. Load only what each page needs using `getMessages({ namespace: 'landing' })`.

2. **At minimum**, the `solarControlPage`, `mindPage`, and `consultPage` keys (which contain hundreds of lines of product-specific text) should be separated so they only load on their respective product pages.

---

## Priority 4: Hero Image Uses `<img>` Instead of `next/image`

The hero section (`components/sections/Hero.tsx` line 94) uses a raw `<img>` tag for the main above-the-fold image — a 914KB PNG:

```tsx
<img
  src={heroImage}
  alt="Solar energy management..."
  className="w-full h-auto block animate-float"
  loading="eager"
  width={650}
  height={650}
/>
```

**Problems:**
- No automatic WebP/AVIF conversion (despite `images.unoptimized: false` in config)
- No responsive `srcSet` — sends full 650px image to phones
- No blur placeholder during load

**Action:** Replace with `next/image` `Image` component. The `animate-float` CSS class can still be applied via `className`. Use `priority` prop since it's above the fold.

```tsx
import Image from "next/image"

<Image
  src={heroImage}
  alt="Solar energy management..."
  className="w-full h-auto block animate-float"
  width={650}
  height={650}
  priority
/>
```

---

## Priority 5: Massive Blog Images

Several blog images are absurdly large:

| Image | Size |
|-------|------|
| `web-summit-vancouver-blog-light.jpeg` | **6.4 MB** |
| `nbg-business-seeds-blog-light.jpeg` | **4.6 MB** |
| `smarthome-validation-blog-light.jpeg` | **3.4 MB** |
| `greenathon-first-prize-blog-light.jpeg` | **2.4 MB** |
| `startSmart-accelerator-blog-light.jpeg` | **1.8 MB** |
| `job-opening-blog-banner-light.jpeg` | **1.3 MB** |

These are served as-is when any blog card appears on-screen.

**Actions:**

1. **Compress all blog images** to ~200KB max using tools like `sharp`, `squoosh`, or a build-time optimization pipeline. A 6.4MB JPEG should be ~150-300KB at 1200px wide with quality 80.

2. **Convert to WebP format** for an additional ~30% savings.

3. **Ensure all blog images use `next/image`** (currently only `BlogCard.tsx` and `BlogHeroBanner.tsx` do — verify the full rendering chain uses `Image` component).

---

## Priority 6: Dynamic Import More Landing Page Sections

Currently, only `Testimonials` is dynamically imported on the landing page. Several other below-fold sections should also be lazy-loaded:

| Section | Currently | Should Be |
|---------|-----------|-----------|
| `Hero` | Static | Static (above fold — correct) |
| `UserSegments` | Static | **Dynamic** — loads 5 videos |
| `Stats` | Static | **Dynamic** — loads the EuropeMap |
| `GovernmentLogos` | Static | Static (lightweight — fine) |
| `Products` | Static | **Dynamic** — loads 2 videos |
| `ValuePropositions` | Static | **Dynamic** |
| `Testimonials` | Dynamic | Dynamic (correct) |
| `BlogPreviewWrapper` | Static | **Dynamic** |
| `ContactCTA` | Static | Static (lightweight — fine) |

**Action:** Wrap `UserSegments`, `Stats`, `Products`, `ValuePropositions`, and `BlogPreviewWrapper` in `dynamic()` with skeleton placeholders:

```tsx
const UserSegments = dynamic(
  () => import("@/components/sections/UserSegments").then(mod => ({ default: mod.UserSegments })),
  { loading: () => <Skeleton className="h-[600px] w-full" />, ssr: true }
)
```

This will break the monolithic 5.8MB landing page chunk into smaller, on-demand pieces.

---

## Priority 7: Video Loading Strategy

The site has **77 video files** (65 WebM + 12 MP4). The `Video.tsx` component has two issues:

### 7a. Cache-busting creates new URLs every render

Line 69-72 in `Video.tsx`:
```tsx
const cacheParam = useMemo(() => {
  if (!cacheBust || !mounted) return ""
  return `?t=${Date.now()}`
}, [cacheBust, mounted])
```

`Date.now()` is called once per mount, but since `cacheBust` defaults to `true`, every component mount appends a unique timestamp. This **defeats browser caching** — if a user navigates away and returns, videos re-download instead of being served from cache.

**Action:** Remove cache-busting entirely or use a build-time hash (e.g., content hash in the filename).

### 7b. Videos default to `preload="auto"` and `loading="eager"`

Line 26 and 31:
```tsx
preload = "auto",
loading = "eager",
```

This tells the browser to fully download every video as soon as the component mounts — even videos far below the viewport.

**Action:** Change defaults to `preload="none"` and `loading="lazy"` for below-fold videos. Only the hero video (if any) should use `preload="metadata"` or `"auto"`.

---

## Priority 8: `mounted` Check Returns Null (Layout Shift / Flash)

Multiple components return `null` before `mounted` state is set:

- `Hero.tsx` (line 19-21) — **returns null for the entire hero section**
- `Footer.tsx` (line 61-63) — returns null for the footer
- `BaseCard.tsx` (patterned variant) — returns null

This means on first render:
1. Server sends HTML with no hero, no footer
2. React hydrates, `setMounted(true)` fires
3. Hero and footer suddenly pop in

This creates a visible **flash of blank content** and a large **Cumulative Layout Shift (CLS)** score.

**Action:** Instead of returning `null`, return a skeleton/placeholder that matches the final dimensions. For the Hero, return a container with `min-h-[80vh]` and the correct padding. For the Footer, return a container with the same height.

The Header already does this correctly (lines 105-124) — it returns a lightweight shell before mounting. Apply the same pattern to Hero and Footer.

---

## Priority 9: UnicornStudio External Script

`UnicornStudioScene.tsx` dynamically injects a third-party script from CDN:

```
https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js
```

This script has no `async` or `defer` attribute when injected (line 60: `script.async = true` is set but it's dynamically appended so it's already async). The real concern is:

- External CDN dependency — if jsdelivr is slow or down, the component blocks
- The library initializes, calls `addScene()`, and renders a WebGL canvas
- Console logs are left in (`console.log("[UnicornStudio] SDK loaded")`)

**Actions:**
1. **Self-host the UnicornStudio script** in `/public/js/` to eliminate CDN dependency
2. Remove console.log statements (lines 64, 90)
3. Consider loading this only via `dynamic()` with `ssr: false` at the page level where it's used

---

## Priority 10: Framer Motion on 75 Components

75 files import from `framer-motion`. While Framer Motion is tree-shakeable, the sheer breadth of usage means a large portion of the library ends up in the bundle (~50-60KB gzipped).

**Quick wins (no design changes):**

1. **The MarqueeSection** uses Framer Motion for what is essentially a CSS `@keyframes` animation. The CSS version (`animate-marquee` in `globals.css`) already exists. Switch to pure CSS.

2. **AnimatedSection** wrapper uses `motion.section` and `motion.div` for simple fade/slide animations. These could use CSS `@keyframes` + IntersectionObserver (a ~2KB solution vs pulling in Framer Motion).

3. **Header scroll listener** (line 32) re-renders the entire header on every scroll event. Use `requestAnimationFrame` throttling or CSS `position: sticky` with `IntersectionObserver`.

**Note:** I'm not suggesting removing Framer Motion entirely — the complex animations (MobileNavigation drawer, product page reveals, etc.) benefit from it. But the simple `fadeInUp` on 40+ section wrappers should be CSS-only.

---

## Priority 11: Low `next/image` Adoption

Only **9 out of 148 client components** use `next/image`. Several places use raw `<img>`:

| Location | Image Type |
|----------|------------|
| `Hero.tsx` line 94 | Hero product image (914KB PNG) |
| `Footer.tsx` line 160 | Social media icons (SVG) |
| `UnicornStudioScene.tsx` line 116 | Fallback image |
| `Video.tsx` line 127 | Poster images |

**Action:** Convert all `<img>` tags to `next/image` where the image is in `/public/`. For social icons in the footer, these are small SVGs and can stay as `<img>` — but the hero image is the critical one.

---

## Priority 12: Header Background Pattern Image

Both the Header and Footer load a background pattern image on every render via inline `style`:

```tsx
style={{
  backgroundImage: `url('/images/sections/grid-pattern-${resolvedTheme === 'dark' ? 'dark' : 'light'}.png')`,
  backgroundRepeat: 'repeat',
}}
```

This triggers a new image request whenever the theme resolves. More importantly, the pattern changes URL between SSR and client hydration (because `resolvedTheme` is `undefined` during SSR).

**Action:** Use CSS custom properties for the pattern, or preload both pattern images in `<head>`, or use an SVG data URI pattern (smaller, no network request, theme-switchable via CSS variables).

---

## Additional Quick Wins

### Remove `cobe` dependency
The globe library (`cobe`) is installed but only used in one UI component (`components/ui/globe.tsx`). If this globe isn't visible on any active page, remove the dependency.

### Remove `motion` package
Both `framer-motion` and `motion` (its successor) are in `package.json`. Only one is needed. Check which is actually imported and remove the other.

### Add `loading.tsx` to route segments
Next.js supports `loading.tsx` files that show instant loading UI during navigation. Adding these to `app/[locale]/products-services/` and `app/[locale]/blog/` will make navigation feel instant — the skeleton appears immediately while the page chunk downloads.

```tsx
// app/[locale]/products-services/loading.tsx
export default function Loading() {
  return <div className="min-h-screen animate-pulse bg-background" />
}
```

### Enable Next.js `experimental.optimizePackageImports`
In `next.config.mjs`, add:

```js
experimental: {
  optimizePackageImports: ['lucide-react', '@phosphor-icons/react', 'framer-motion', 'date-fns'],
}
```

This tells Next.js to tree-shake these packages more aggressively, which can significantly reduce the shared bundle size.

### Use `next/font` for Greek subset
Currently `IBM_Plex_Sans` only loads the `latin` subset. Add `latin-ext` or `greek` subset if Greek characters are needed:

```tsx
const ibm = IBM_Plex_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
})
```

Without the Greek subset, Greek text falls back to system fonts — which causes a visible font swap when the page loads.

### Scroll listener optimization
`Header.tsx` line 32 attaches a scroll listener that calls `setState` on every scroll pixel. Add a `requestAnimationFrame` wrapper or use `passive: true`:

```tsx
window.addEventListener("scroll", handleScroll, { passive: true })
```

---

## Implementation Order (Safest to Most Impact)

| Step | Action | Risk | Impact |
|------|--------|------|--------|
| 1 | Remove 8 unused dependencies | None | High |
| 2 | Add `optimizePackageImports` to next.config | None | Medium |
| 3 | Add `loading.tsx` to route segments | None | High (perceived speed) |
| 4 | Fix Video.tsx defaults (preload/caching) | Low | Medium |
| 5 | Replace Hero `<img>` with `next/image` | Low | Medium |
| 6 | Compress blog images to ~200KB | None | High |
| 7 | Dynamic import below-fold sections | Low | High |
| 8 | Fix mounted-null flash (Hero, Footer) | Low | Medium (CLS) |
| 9 | Split translation files by page | Medium | Medium |
| 10 | Consolidate icon libraries | Medium | Medium |
| 11 | Add Greek font subset | None | Medium (text rendering) |
| 12 | Self-host UnicornStudio script | Low | Low |
| 13 | Convert MarqueeSection to CSS animation | Low | Low |
| 14 | Add `passive: true` to scroll listener | None | Low |

---

## What NOT to Change

Per your requirements, this audit does **not** recommend:
- Changing any visual design, colors, or spacing
- Altering the component hierarchy or design system
- Removing animations (only optimizing their implementation)
- Changing the i18n architecture (only splitting the files)
- Restructuring the project layout

Every recommendation preserves the current aesthetic while making it load and render faster.
