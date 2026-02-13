# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Production build
npm run build

# Run production server
npm start

# Lint code
npm run lint

# Add shadcn/ui component
npx shadcn@latest add [component-name]
```

## Tech Stack & Architecture

This is a Next.js 15 SaaS landing page for Optimems (energy management/grid optimization) built with:

- **Framework**: Next.js 15 with App Router (app directory structure)
- **Styling**: Tailwind CSS v4 with shadcn/ui component library (New York style)
- **UI Components**: Radix UI primitives via shadcn/ui (60+ primitives)
- **Maps**: react-simple-maps for interactive Europe map with zoom/pan
- **Animations**: Framer Motion, Motion, tw-animate-css
- **State**: React hooks (useState, useEffect) - no external state management
- **Theme**: Dark mode by default with locale-based theming
- **TypeScript**: Strict mode enabled, target ES6
- **Internationalization**: Greek (el) and English (en) via next-intl
- **Blog**: Markdown-based blog with gray-matter frontmatter parsing, remark/rehype for HTML conversion
- **Image Optimization**: Enabled with WebP/AVIF support (unoptimized: false in next.config.mjs)

## Project Structure

```
app/                          # Next.js App Router pages
  - [locale]/                # Localized routes (el, en)
    - layout.tsx             # Locale layout with NextIntlClientProvider + ThemeProvider
    - page.tsx               # Landing page (composition of sections)
    - about-us/              # About page
    - products-services/     # Products pages (mind, solar-control)
      - solar-control/page.tsx  # SolarControl product page
      - mind/page.tsx        # Mind product page
      - page.tsx             # Products listing page
    - blog/                  # Blog listing page
    - blog/[slug]/page.tsx   # Dynamic blog post pages
    - contact/               # Contact page
    - careers/               # Careers page
    - partnership/           # Partnership page
    - case-studies/          # Case studies page
    - rnd-projects/          # R&D projects page
    - compatibility-lists/   # Compatibility lists page
    - warranties/            # Warranties page
    - demo/                  # Demo page
    - docs/                  # Documentation page
    - support/               # Support page
    - login/                 # Login page route
    - signup/                # Signup page route
    - privacy/               # Privacy policy page
    - terms/                 # Terms of service page
    - cookies/               # Cookies policy page
  - globals.css              # Global styles with OKLCH color system + Greek typography classes
  - layout.tsx               # Minimal root layout
  - app-layout.tsx           # Header + Footer wrapper (used by product pages)
  - sitemap.ts               # Localized sitemap generation (all routes × locales)

i18n/                         # next-intl configuration
  - routing.ts               # Locale definitions (el, en), default 'el', localePrefix: 'always'
  - request.ts               # Server-side translation loader
  - navigation.ts            # Localized Link, useRouter, usePathname

components/
  - sections/                # Landing page sections (Hero, Stats, ValuePropositions, etc.)
  - products/                # Product page components
    - ProductPageSection.tsx # Shared wrapper for product page sections
    - FeatureList.tsx        # Reusable feature/benefit list component
    - solar-control/         # SolarControl-specific sections
      - SolarHeroNew.tsx     # Compact hero redesign
      - SolarHeroDemo.tsx    # Demo video hero
      - SolarProblem.tsx       # Problem statement section
      - SolarSolution.tsx       # Solution overview
      - SolarTrust.tsx         # Trust indicators and social proof
      - SolarWhatIs.tsx        # Product explanation
      - SolarDifferentiator.tsx  # Key differentiators
      - SolarHardware.tsx       # Hardware specifications
      - SolarSoftware.tsx        # Software features
      - SolarWhoBenefits.tsx    # Target audience section
      - SolarInsights.tsx       # Analytics insights
      - SolarPricing.tsx        # Pricing information
      - SolarWarranty.tsx       # Warranty details
      - SolarCTA.tsx           # Call to action
      - SolarTechnicalSpecs.tsx # Technical specifications
      - ProductOverview.tsx     # Product overview component
      - WhoBenefitsTabs.tsx    # Tabbed benefits section
      - StatsBar.tsx           # Statistics bar component
      - FeaturesAccordion.tsx   # Accordion feature list
  - mind/                    # Mind-specific sections
      - MindHero.tsx           # Hero section
      - MindProblem.tsx         # Problem statement with pain points grid
      - MindSolution.tsx        # Solution overview
      - MindKeyFeatures.tsx     # Key features
      - MindTechnology.tsx       # Technology details
      - MindWhoIsItFor.tsx      # Target audience
      - MindHowItWorks.tsx      # Workflow explanation
      - MindPricing.tsx          # Pricing information
      - MindWarranty.tsx        # Warranty details
      - MindCTA.tsx             # Call to action
  - shared/                  # Shared components (Header, Footer, AnimatedSection, Video)
    - Header/                # Header with separate desktop/mobile implementations, types.ts
      - HeaderDesktop.tsx      # Desktop navigation
      - HeaderMobile.tsx        # Mobile drawer navigation
      - Navigation.tsx           # Navigation menu component
      - ThemeToggle.tsx         # Theme toggle button
      - LocaleSwitcher.tsx       # GR/EN locale switcher
      - types.ts                # TypeScript interfaces for all header components
    - SectionHeader.tsx      # Consistent section headings with size variants
    - AnimatedSection.tsx    # Scroll-triggered animations (fadeInUp, fadeIn, scaleIn)
    - Container.tsx          # Consistent layout container
    - Video.tsx              # Video player with theme support
    - VideoContainer.tsx       # Video wrapper container
    - VideoCard.tsx           # Card component for videos
    - BaseCard.tsx            # Card component with variants (standard, cta, patterned)
    - GlassCard.tsx           # @deprecated - Use BaseCard with variant="standard" instead
    - Logo.tsx                # Optimems logo component
    - CustomPrimaryButton.tsx  # Custom primary button
    - FeatureList.tsx           # Reusable feature/benefit lists
    - StatCard.tsx             # Statistics card component
    - MarqueeSection.tsx       # Scrolling marquee component
    - AnimatedGrid.tsx         # Animated grid layout
    - EuropeMap.tsx            # Interactive Europe map (react-simple-maps)
    - Card/                   # Card subdirectory
      - VideoCard.tsx           # Card wrapper for video content
      - WarrantyCard.tsx          # Card wrapper for warranty content
  - blog/                    # Blog components (BlogCard, CategoryFilter, Pagination)
  - ui/                      # shadcn/ui components (60+ primitives)

lib/
  - blog.ts                  # Blog utilities (getAllPosts, markdownToHtml, getPostBySlug)
  - i18n/                    # Translation key constants (type-safe arrays)
    - translation-keys.ts    # statKeys, workflowStepKeys, valuePropKeys, userSegmentKeys, blogPostKeys, testimonialKeys, warrantyFeatureKeys
  - branding-utils.ts        # Brand assets and color token extraction
  - media/                   # Media constants (videos.ts with theme-aware variants)
  - constants/               # Spacing, typography constants
    - typography.ts          # HeadingSizes, HeadingLineHeight, BodySizes, LabelStyles

data/                         # Static data structures
  - landing-page.ts          # Type definitions for landing page content
  - assets.ts                # Asset imports
  - brand-colors.ts          # Brand color definitions

content/blog/                 # Markdown blog posts with frontmatter
  - *.md                     # Blog posts (gray-matter frontmatter: title, date, author, category, tags, excerpt, published)

messages/                     # i18n JSON files
  - el.json                  # Greek translations (default locale)
  - en.json                  # English translations
    - solarControlPage       # Product page translations (nested structure)
    - mindPage               # Mind product page translations
```

## Key Architectural Patterns

### Internationalization (i18n)
The app supports Greek (el) and English (en) via next-intl:
- **Default locale**: Greek (el)
- **URL structure**: All routes prefixed with locale (e.g., `/el/products`, `/en/products`)
- **Locale prefix**: `localePrefix: 'always'` in `i18n/routing.ts` (locale always shown in URL)
- **Locale switching**: Preserves current path using `router.replace(pathname, { locale: newLocale })`
- **Translation function**: `useTranslations()` hook from `next-intl` returns `t(key)` function
- **Locale detection**: Middleware detects from `Accept-Language` header or cookie
- **Server & Client**: Works in both Server Components and Client Components
- **Type safety**: Full TypeScript autocomplete for translation keys
- **SEO**: Automatic hreflang tags and localized sitemap generation
- **Configuration files**: See `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`
- **Translation key constants**: `lib/i18n/translation-keys.ts` provides type-safe arrays (e.g., `statKeys`, `workflowStepKeys`, `valuePropKeys`, `userSegmentKeys`, `blogPostKeys`, `testimonialKeys`, `warrantyFeatureKeys`)

### Component Organization
- **Section components** in `components/sections/` (Hero, CoreValue, SocialProof, etc.)
- **Product page components** in `components/products/` organized by product
  - `ProductPageSection` - Consistent wrapper with AnimatedSection + Container
  - `FeatureList` - Reusable feature/benefit lists with icons
  - Product-specific folders (`mind/`, `solar-control/`) for dedicated sections
- **UI primitives** in `components/ui/` following shadcn/ui patterns
- **Shared components** in `components/shared/` (Header, Footer, Video cards, animations)
  - `Header/` - Separate `HeaderDesktop` and `HeaderMobile` components with `types.ts`
  - `BaseCard` - Card component with variants (standard, cta, patterned)
  - `GlassCard` - @deprecated - Use BaseCard with variant="standard" instead
  - `SectionHeader` - Standardized headings with size/alignment variants
  - `AnimatedSection` - Scroll-triggered animations (fadeInUp, fadeIn, scaleIn)
  - `Container` - Consistent layout container
  - `Video`, `VideoContainer`, `VideoCard` - Video components with theme support
  - `EuropeMap` - Interactive Europe map using react-simple-maps
  - `CustomPrimaryButton` - Custom button component
  - `FeatureList`, `StatCard`, `MarqueeSection`, `AnimatedGrid` - Reusable components
  - `Card/` - Card subdirectory (VideoCard, WarrantyCard)
- All components are client-side (`"use client"` at top)

### Theme System
- **OKLCH color space**: Uses CSS custom properties for better color control
- **Theme swapping**: Primary/secondary colors swap between light/dark modes
  - Light mode: Teal primary (#03A7AA), Red secondary (#FC5855)
  - Dark mode: Red primary (#FC5855), Teal secondary (#03A7AA)
- **Forced dark mode**: `[locale]/layout.tsx` includes ThemeProvider with `defaultTheme="dark"`
- **Greek typography**: Special CSS classes for Greek text (`greek-text`, `greek-heading`) with adjusted letter-spacing and line-height
- **Video theming**: Videos in `lib/media/videos.ts` support light/dark variants (e.g., `webmLight` property). Use `getVideoSrc(key, isLight)` helper.
- **Card variants**: `BaseCard` component supports variants (standard, cta, patterned) with theme-aware pattern colors

### App Layout Architecture
The app uses a nested layout pattern:
1. `app/layout.tsx` → Minimal root layout
2. `app/[locale]/layout.tsx` → Locale layout with NextIntlClientProvider + ThemeProvider
3. `app/app-layout.tsx` → Header + Footer wrapper (used by product pages and other routes)
4. Landing pages compose sections directly in their page component

**For product pages**: Wrap content in `AppLayout` component:
```tsx
import { AppLayout } from "@/app/app-layout"

export default function ProductPage() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Sections */}
      </main>
    </AppLayout>
  )
}
```

### Animation Strategy
- **CSS animations**: `tw-animate-css` for simple keyframe animations
- **Framer Motion**: Complex scroll-triggered animations
- **AnimatedSection**: Shared wrapper for scroll-triggered reveals (supports `fadeInUp`, `fadeIn`, `scaleIn`)
  - Configurable: `animation`, `delay`, `duration`, `once`, `amount`
  - Used by `ProductPageSection` for consistent scroll behavior

### Navigation Architecture
- **Header**: Separate `HeaderDesktop` and `HeaderMobile` components in `components/shared/Header/`
- **Header types**: TypeScript interfaces defined in `components/shared/Header/types.ts`
- **Sticky header**: Fixed position with 120px offset for smooth scrolling
- **Locale-aware navigation**: Links change based on current locale, navigation data built from `useTranslations()` hook
- **Dropdown menus**: Company, Resources, and Products dropdowns with Framer Motion animations
- **Locale switcher**: Pill-style toggle between GR/EN preserving current path

### Product Page Architecture
Product pages follow a consistent section-based composition pattern:

**Structure**:
- Page located at `app/[locale]/products-services/[product-name]/page.tsx`
- Use `AppLayout` wrapper (not nested layout)
- Import and compose all section components in page
- Sections follow spec documents in root (e.g., `solarcontrol-product-page-spec.md`)

**Common Patterns**:
- Use `useTranslations('productName')` with nested keys
- Apply `greek-text` or `greek-heading` classes conditionally by locale
- Use `motion` from Framer Motion for scroll-triggered animations (viewport={{ once: true }})
- Use locale-aware date formatting with `date-fns` and locale from `useLocale()`
- Import types from `@/components/shared` for SectionHeader, Container, etc.
- Use typography constants from `lib/constants/typography.ts` for consistent scales
- Use translation key constants from `lib/i18n/translation-keys.ts` for type-safe arrays

## Important Shared Components

### Component Usage Patterns

**Framer Motion Animations**:
- Use viewport={{ once: true }} for one-time scroll-triggered animations
- Common pattern: `<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>`
- Stagger delays for list items: `delay: 0.3 + (idx * 0.05)`

**Locale-Aware Utilities**:
- Date formatting: `format(date, 'PPP', { locale })` from `date-fns` with locale from `useLocale()`
- Greek text styling: Conditional `className={isGreek ? 'greek-text' : ''}` or `className={isGreek ? 'greek-heading' : ''}`
- Video source helper: `getVideoSrc(key, resolvedTheme === 'light')` from `lib/media/videos`

**Card Components**:
- Use `BaseCard` for all card needs (has replaced `GlassCard`)
- Variants: `variant="standard" | "cta" | "patterned"`
- Props: `rounded`, `padding`, `hover`, `scale`, `shadow`, `fullHeight`

### Typography Constants
Use predefined typography scales from `lib/constants/typography.ts`:

```tsx
import { HeadingSizes, HeadingLineHeight, BodySizes, LabelStyles } from "@/lib/constants/typography"

// Heading sizes
className={HeadingSizes.h1} // "text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
className={HeadingSizes.h2} // "text-2xl md:text-4xl lg:text-5xl"
className={HeadingSizes.h3} // "text-xl md:text-2xl lg:text-3xl"
className={HeadingSizes.h4} // "text-lg md:text-xl lg:text-2xl"

// Line height
className={HeadingLineHeight.tight} // "leading-tight tracking-tight"
className={HeadingLineHeight.normal} // "leading-snug"
className={HeadingLineHeight.relaxed} // "leading-relaxed"

// Body text
className={BodySizes.sm} // "text-sm"
className={BodySizes.base} // "text-base"
className={BodySizes.lg} // "text-lg"
className={BodySizes.xl} // "text-xl"

// Labels/eyebrows
className={LabelStyles.default} // "text-xs md:text-sm uppercase tracking-widest"
className={LabelStyles.compact} // "text-xs uppercase tracking-wider"
```

### Translation Key Constants
Type-safe arrays for translation keys in `lib/i18n/translation-keys.ts`:

```tsx
import { statKeys, workflowStepKeys, valuePropKeys, userSegmentKeys, testimonialKeys, warrantyFeatureKeys } from "@/lib/i18n/translation-keys"

// Use with t.raw() for type-safe iteration
statKeys.forEach(key => {
  const stat = t.raw(`stats.${key}`)
  // ...
})
```

### ProductPageSection
Standard wrapper for product page sections with optional header and spacing control. Located at `components/products/ProductPageSection.tsx`.

```tsx
<ProductPageSection
  header={{
    title: "Section Title",
    description: "Optional description",
    align: "center", // "left" | "center" | "right"
    size: "standard" // "compact" | "standard" | "large"
  }}
  spacing="standard" // "compact" | "standard" | "spacious" | "grand"
  className="custom-class"
>
  <YourContent />
</ProductPageSection>
```

### FeatureList
Reusable feature/benefit list with checkmark icons. Located at `components/products/FeatureList.tsx`.

```tsx
<FeatureList
  features={t.raw('section.features') as string[]}
  columns={2} // 1 | 2 | 3
  size="md" // "sm" | "md" | "lg"
  icon={CustomIcon} // Optional: defaults to CheckCircle2
  iconColor="text-primary"
  textColor="text-muted-foreground"
/>
```

### Blog Components
**BlogCard** (`components/blog/BlogCard.tsx`):
- Displays blog posts with featured image, title, date, author, excerpt
- Locale-aware date formatting with `format(date, 'PPP', { locale })`
- Theme-aware image loading (swaps between `-dark.jpeg` and `-light.jpeg` variants)

**BlogBannerPlaceholder** (`components/shared/BlogBannerPlaceholder.tsx`):
- Placeholder for blog posts without featured images
- Uses BaseCard component

### SectionHeader
Standardized section headings with size/alignment variants. Located at `components/shared/SectionHeader.tsx`.

```tsx
<SectionHeader
  label="Optional eyebrow text"
  title="Section Title"
  description="Optional description"
  align="center" // "left" | "center" | "right"
  size="standard" // "compact" | "standard" | "large"
/>
```

### AnimatedSection
Scroll-triggered animation wrapper. Located at `components/shared/AnimatedSection.tsx`.

```tsx
<AnimatedSection
  animation="fadeInUp" // "fadeInUp" | "fadeIn" | "scaleIn"
  delay={0}
  duration={0.5}
  once={true}
  amount={0.3}
  as="section" // "section" | "div"
>
  <YourContent />
</AnimatedSection>
```

### Container
Consistent layout container with max-width. Located at `components/shared/Container.tsx`.

```tsx
<Container className="custom-class">
  <YourContent />
</Container>
```

### Product-Specific Components

#### SolarControl Components (`components/products/solar-control/`)
- `SolarHeroNew.tsx` - Hero section (compact redesign)
- `SolarHeroDemo.tsx` - Demo video hero
- `SolarHero.tsx` - Original hero section (legacy)
- `SolarProblem.tsx` - Problem statement section
- `SolarSolution.tsx` - Solution overview
- `SolarTrust.tsx` - Trust indicators and social proof
- `SolarWhatIs.tsx` - Product explanation
- `SolarDifferentiator.tsx` - Key differentiators
- `SolarHardware.tsx` - Hardware specifications
- `SolarSoftware.tsx` - Software features
- `SolarWhoBenefits.tsx` - Target audience section
- `SolarInsights.tsx` - Analytics insights
- `SolarPricing.tsx` - Pricing information
- `SolarWarranty.tsx` - Warranty details
- `SolarCTA.tsx` - Call to action
- `SolarTechnicalSpecs.tsx` - Technical specifications
- `BlogBannerPlaceholder.tsx` - Blog banner placeholder component

#### Mind Components (`components/products/mind/`)
- `MindHero.tsx` - Hero section
- `MindProblem.tsx` - Problem statement (pain points grid)
- `MindSolution.tsx` - Solution overview
- `MindKeyFeatures.tsx` - Key features
- `MindTechnology.tsx` - Technology details
- `MindWhoIsItFor.tsx` - Target audience
- `MindHowItWorks.tsx` - Workflow explanation
- `MindPricing.tsx` - Pricing information
- `MindWarranty.tsx` - Warranty details
- `MindCTA.tsx` - Call to action

#### Shared Product Components (`components/products/`)
- `ProductPageSection.tsx` - Section wrapper with header support
- `FeatureList.tsx` - Feature lists with icons
- `ComparisonGrid.tsx` - Comparison tables
- `IconCardGrid.tsx` - Icon-based card grids
- `TechnologyStrip.tsx` - Technology logos/strip
- `StatsGrid.tsx` - Statistics grid layout

## Important Constraints

### TypeScript Configuration
- `ignoreBuildErrors: false` in next.config.mjs (strict type checking enforced)
- `images.unoptimized: false` - Image optimization enabled with WebP/AVIF
- Path alias: `@/*` maps to root directory
- Target: ES6 with strict mode enabled
- Use explicit return types on exported functions (per TypeScript rules)

### TypeScript Rules (from `.claude/rules/typescript.md`)
- **Naming**: PascalCase for interfaces/types/classes/components, camelCase for functions/variables, SCREAMING_SNAKE_CASE for constants, kebab-case for files
- **Type Safety**:
  - NO `any` without explicit justification comment
  - NO `@ts-ignore` or `@ts-expect-error` without explanation
  - Prefer `unknown` over `any` when type is truly unknown
  - Use explicit return types on exported functions
- **Imports**: Group imports (external → internal → relative), use named exports over default exports, no circular dependencies
- **Async/Await**: Always handle promise rejections, use try/catch for async operations, avoid floating promises
- **React Hooks**:
  - When reviewing `useEffect` or `useState` for derived values, invoke react-useeffect skill
  - Prefer derived values over state + effect patterns
  - Use `useMemo` for expensive calculations, not `useEffect`

### Component Patterns
- Client components only (no Server Components due to i18n and theming)
- Explicit TypeScript types (avoid `any` per TypeScript rules)
- Radix UI composition patterns for accessibility
- Tailwind class variants using `class-variance-authority`

### Internationalization Constraints
- **Use next-intl**: All translations must use `next-intl` library
- **Import paths**:
  - Translations: `import { useTranslations } from 'next-intl'`
  - Locale: `import { useLocale } from 'next-intl'`
  - Navigation: `import { Link, useRouter, usePathname } from '@/i18n/navigation'`
- **Link component**: Always use localized `Link` from `@/i18n/navigation` for internal links
- **Translation keys**: Use nested keys with dot notation (e.g., `t('hero.title')`)
- **Translation key constants**: `lib/i18n/translation-keys.ts` provides type-safe arrays (e.g., `statKeys`, `workflowStepKeys`, `valuePropKeys`, `userSegmentKeys`, `blogPostKeys`, `testimonialKeys`, `warrantyFeatureKeys`)
- **Locale switching**: Use `router.replace(pathname, { locale: newLocale })` to preserve path
- **Greek text**: Apply `greek-text` or `greek-heading` classes to Greek text for proper typography
  ```tsx
  className={isGreek ? "greek-heading" : ""}
  ```

**Greek Localization Best Practices** (see `docs/guides/localization.md`):
- Use formal "εσείς" (you-plural/formal) throughout
- Keep in English: Optimems, +SolarControl, +Mind, Dashboard, Blog, AI, Demo
- Use Greek energy terms: ΑΠΕ (RES), ΔΕΔΔΗΕ (DSO), ΑΔΜΗΕ (TSO)
- Avoid literal translations of idioms (e.g., "game-changing" → "Καινοτόμος", not "Αλλάζει το παιχνίδι")
- Greek text may be 10-30% longer than English - test for overflow
- Ensure UTF-8 encoding for proper character display

### Accessibility
- Target: WCAG 2.1 AA compliant (current score: 95/100)
- Keyboard navigation support throughout
- Proper ARIA labels and roles on all interactive elements
- Focus indicators on all interactive elements
- Reduced motion support via `motion-reduce:` Tailwind classes
- Color-blind friendly (icons + color for status indicators)
- Touch targets meet WCAG 2.5.5 (44x44px minimum)

### Codebase Evolution
**Recent changes (version 1.10)**:
- Removed unused icon imports (`Home`, `Car`, `Zap`) from MindProblem.tsx
- Simplified MindProblem section by removing stats cards (EV capacity, typical consumption, V2G)
- Refactored hero spacing across all pages for consistency
- Updated blog system with locale-aware features
- Enhanced hardware compatibility tables and testimonials

**Component migration notes**:
- `GlassCard` is deprecated in favor of `BaseCard` with variant system
- Product pages now have multiple hero variants (SolarHeroNew, SolarHeroDemo, original SolarHero)
- MindProblem component simplified to focus on pain points grid only

### Build Notes
- No test suite present (project is landing page only)
- ESLint configured but no test runner
- Image optimization enabled with WebP/AVIF automatic conversion
- Playwright installed but not configured
- All routes must be manually added to `app/sitemap.ts` for SEO (current routes listed above)

### Documentation & Specs
- Development Guide: `docs/development/components.md` - Component implementation patterns
- Localization Guide: `docs/guides/localization.md` - Greek translation requirements
- Media Optimization: `docs/guides/media.md` - Video and image guidelines
- Copy Brief: `docs/reference/copy-brief.md` - Website content specifications
- Changelog: `docs/reference/changelog.md` - Project history

## Routes

All routes in `app/sitemap.ts` (must be manually updated when adding new routes):
- `/` (landing page)
- `/about-us`
- `/products-services`
- `/products-services/mind`
- `/products-services/solar-control`
- `/blog`
- `/blog/[slug]` (dynamic blog post pages)
- `/contact`
- `/careers`
- `/partnership`
- `/case-studies`
- `/rnd-projects`
- `/compatibility-lists`
- `/warranties`
- `/demo`
- `/docs`
- `/support`
- `/branding` (added)
- `/login`
- `/signup`
- `/privacy`
- `/terms`
- `/cookies`

All routes are prefixed with locale: `/el/...` or `/en/...`

**Important**: The sitemap automatically generates localized URLs for all routes × locales, plus individual blog post pages.

## Common Patterns

### Adding a New Route

1. Create page component in `app/[locale]/your-route/page.tsx`
2. Add route to `app/sitemap.ts` routes array
3. Add navigation link in `components/shared/Header/` (desktop + mobile)
4. Add translations to `messages/el.json` and `messages/en.json`

### Adding a Blog Post
1. Create markdown file in `content/blog/` with naming pattern: `YYYY-MM-DD-slug.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2024-01-01"
   author: "Author Name"
   featured_image: null  # or "/path/to/image.jpg"
   category: "news"  # news, careers, etc.
   tags: ["tag1", "tag2"]
   excerpt: "Brief description"
   published: true
   ---
   ```
3. Blog automatically builds from `content/blog/*.md` via `lib/blog.ts`

### Adding a Landing Page Section
1. Create section component in `components/sections/`
2. Import and add to `app/[locale]/page.tsx` section composition
3. Add navigation link in Header (desktop + mobile variants)
4. Add translations to `messages/el.json` and `messages/en.json`

### Creating a New Product Page
1. Create spec document in root (e.g., `productname-product-page-spec.md`)
2. Create page at `app/[locale]/products-services/[product-name]/page.tsx`:
   ```tsx
   "use client"
   import { AppLayout } from "@/app/app-layout"
   import { useTranslations } from "next-intl"
   import { ProductHero, ProductFeatures, /* ... */ } from "@/components/products/product-name"

   export default function ProductPage() {
     const t = useTranslations('productName')

     return (
       <AppLayout>
         <main className="min-h-screen">
           <ProductHero />
           <ProductFeatures />
           {/* Compose all sections */}
         </main>
       </AppLayout>
     )
   }
   ```
3. Create section components in `components/products/[product-name]/` or `components/products/[product-folder]/`
4. Add translations to `messages/el.json` and `messages/en.json` under `productName` key
5. Add route to navigation in Header (desktop + mobile)
6. Add route to `app/sitemap.ts` for SEO

### Using Translations
```tsx
import { useTranslations } from 'next-intl'

function MyComponent() {
  const t = useTranslations()
  return <h1>{t('hero.title')}</h1>
}
```

### Locale-Aware Navigation
```tsx
import { Link, useRouter, usePathname, useLocale } from '@/i18n/navigation'

function MyComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const switchLocale = (newLocale: 'el' | 'en') => {
    // Preserves current path when switching locale
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <Link href="/products">Products</Link>  // Automatically includes locale prefix
  )
}
```

### Using shadcn/ui Components

To add a new shadcn/ui component:
```bash
npx shadcn@latest add [component-name]
```

Import from `@/components/ui/[component-name]`:
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### Styling with CSS Variables
Use semantic color names from globals.css:
```tsx
className="bg-background text-foreground border-border"
```

### Creating Locale-Aware Links
Always use the localized Link component from `@/i18n/navigation`:
```tsx
import { Link } from '@/i18n/navigation'

// Link automatically includes locale prefix
<Link href="/products">Products</Link>  // Renders as /el/products or /en/products
```

### Using Theme-Aware Videos
Videos support light/dark theme variants via `lib/media/videos.ts`:
```tsx
import { getVideoSrc } from "@/lib/media/videos"
import { Video } from "@/components/shared/Video"

const { resolvedTheme } = useTheme()
const videoSrc = getVideoSrc("hero", resolvedTheme === "light")

<Video src={videoSrc.webm} format="webm" />
```

## Deployment

### Netlify Configuration
- Deployed via Netlify using `@netlify/plugin-nextjs` plugin
- Node.js 18 required (see netlify.toml:4)
- Static assets cached aggressively (1 year cache for `_next/static/*`, images, videos, SVG, PNG, JPEG)
- Security headers configured (X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin)

### Production Build
```bash
npm run build  # Generates .next directory
npm start      # Runs production server
```

## Data & Asset Management

### Video Assets
Videos are centralized in `lib/media/videos.ts`:
- Each video has a key (e.g., `hero`, `homeOwners`, `solarControl`)
- Support for light/dark theme variants via `webmLight` property
- Use `getVideoSrc(key, isLight)` helper to get theme-aware video source

### Static Data
Landing page content structure defined in `data/landing-page.ts`:
- Type definitions for NavItem, HeroSection, ClientLogo, UserSegment, ValueProposition, ProductCard, etc.
- Used for type safety across section components

### Header Types
Header component TypeScript types defined in `components/shared/Header/types.ts`:
- `NavItem` - Navigation item with optional dropdown
- `NavDropdownItem` - Dropdown menu item
- `NavigationConfig` - Full navigation configuration for a locale
- `HeaderDesktopProps` - Desktop header props
- `MobileNavigationProps` - Mobile navigation drawer props
- `ThemeToggleProps` - Theme toggle button props
- `LocaleSwitcherProps` - Locale switcher props
