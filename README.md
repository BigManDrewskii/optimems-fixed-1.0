# Optimems Landing Page

Next.js 15 SaaS landing page for Optimems (energy management and grid optimization solutions).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Overview

This is a modern, accessible landing page built with:
- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS v4** with shadcn/ui components
- **Framer Motion** for animations
- **Internationalization** (Greek/English) via next-intl
- **Blog** with Markdown posts

## Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[Development Guide](./docs/development/components.md)** - Component development standards
- **[Localization Guide](./docs/guides/localization.md)** - Greek localization requirements
- **[Media Optimization](./docs/guides/media.md)** - Video and image optimization guidelines
- **[Copy Brief](./docs/reference/copy-brief.md)** - Website content specifications
- **[Changelog](./docs/reference/changelog.md)** - Project changes and history

## Architecture

```
app/                      # Next.js App Router pages
  └── [locale]/          # Localized routes (el, en)
components/               # React components
  ├── sections/          # Landing page sections
  ├── shared/            # Shared components
  └── ui/                # shadcn/ui primitives
lib/                     # Utilities and helpers
data/                    # Static data structures
messages/                # Translation files (el.json, en.json)
public/                  # Static assets
```

## Key Features

- **Dark mode by default** with theme switching
- **Bilingual support** (Greek/English)
- **Fully responsive** design
- **Accessible** (WCAG 2.1 AA compliant, score: 95/100)
- **Interactive Europe map** with location pins
- **Blog** with Markdown posts
- **Animated sections** with scroll triggers

## Development

### Tech Stack
- React 18+ with Server and Client Components
- Tailwind CSS v4 (OKLCH color system)
- Radix UI primitives via shadcn/ui
- react-simple-maps for interactive maps
- Framer Motion for animations

### Code Style
- TypeScript strict mode enabled
- ESLint configured
- Prettier for formatting
- Conventional commits recommended

### Component Patterns
- Client components: `"use client"` directive
- Server components: default (no directive needed)
- All components use TypeScript
- Proper ARIA attributes for accessibility
- Internationalization via `useTranslations()` hook

## Deployment

The project is configured for Netlify deployment:
- Node.js 18 required
- Static assets cached aggressively
- Build command: `npm run build`
- Publish directory: `.next/`

See `netlify.toml` for configuration details.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project-Specific Notes

### Internationalization
- **Default locale:** Greek (el)
- **URL structure:** All routes prefixed with locale (e.g., `/el/products`, `/en/products`)
- **Translation keys:** See `lib/i18n/translation-keys.ts` for type-safe arrays
- **Switching locale:** Preserves current path using `router.replace(pathname, { locale })`

### Theme System
- **Primary colors:** Teal (#03A7AA) and Red (#FC5855)
- **Color swapping:** Primary/secondary swap between light/dark modes
- **OKLCH color space:** For better color control
- **Greek typography:** Special classes for proper letter-spacing

### Video Handling
- Videos support light/dark theme variants
- Use `lib/media/videos.ts` for theme-aware video sources
- Videos located in `public/videos/dark/` and `public/videos/light/`

## Accessibility

This project prioritizes accessibility:
- Keyboard navigation support throughout
- Proper ARIA labels and roles
- Focus indicators on all interactive elements
- Reduced motion support via `motion-reduce:` Tailwind classes
- Color-blind friendly (icons + color for status indicators)
- Touch targets meet WCAG 2.5.5 (44x44px minimum)

**Current Score:** 95/100 (WCAG 2.1 AA compliant)

## Support

For questions or issues, refer to:
- Project documentation in `docs/`
- Component guide in `docs/development/components.md`
- CLAUDE.md for detailed project instructions
