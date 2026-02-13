# Website Issue Fixes - Design Document

**Date:** February 13, 2026
**Status:** Design Validated

## Overview

Comprehensive fix plan for i18n failures, video accessibility warnings, and image performance issues identified in error logs.

## Phase 1: i18n Namespace Migration (Critical)

### Problem
Components use `useTranslations()` without namespace, but messages are split into namespaced files (common.json, home.json, products.json, blog.json). This causes `IntlError: MISSING_MESSAGE` errors.

### Solution
Update 9 components to use explicit namespaces matching their translation source files.

### Component Updates

| Component | Namespace | File |
|-----------|------------|--------|
| Testimonials.tsx | `home` | components/sections/Testimonials.tsx |
| Workflow.tsx | `home` | components/sections/Workflow.tsx |
| Hero.tsx | `home` | components/shared/Hero.tsx |
| Stats.tsx | `home` | components/sections/Stats.tsx |
| SocialProof.tsx | `home` | components/sections/SocialProof.tsx |
| ValuePropositions.tsx | `home` | components/sections/ValuePropositions.tsx |
| UserSegments.tsx | `home` | components/sections/UserSegments.tsx |
| Vision.tsx | `home` | components/sections/Vision.tsx |
| Products.tsx | `home` | components/sections/Products.tsx |
| ContactCTA.tsx | `home` | components/sections/ContactCTA.tsx |
| Footer.tsx | `common` | components/sections/Footer.tsx |

### Implementation Pattern

```typescript
// Before
const t = useTranslations()

// After
const t = useTranslations('home')  // or 'common' for Footer
```

## Phase 2: Video Accessibility Improvements

### Problem
Video components missing `title`/`alt` props for screen readers, causing accessibility warnings.

### Solution
Add descriptive accessibility attributes to all Video instances. Video.tsx component already supports these props (lines 29-30).

### Video Instances Requiring Updates

| Component | Video Content | Title/Alt |
|------------|-----------------|-------------|
| SolarHeroDemo.tsx | Solar panel installation demo | `title="SolarControl installation and management interface demo"` |
| SolarWhatIs.tsx | SolarControl product overview | `title="SolarControl system overview and features"` |
| MindHero.tsx | Mind product video | `title="+Mind energy management system introduction"` |
| ConsultHero.tsx | Consult service demo | `title="Optimems consultation services overview"` |
| VideoCard.tsx | Video cards | Pass through parent title/alt props |
| VideoContainer.tsx | Video wrapper | Pass through parent title/alt props |
| Card/VideoCard.tsx | Card variant | Pass through parent title/alt props |
| Products.tsx | Product demos | `title="Product demonstration video"` |

### Implementation Pattern

```typescript
<Video
  src={videoSrc}
  title="Descriptive text for screen readers"
  alt="Alternative text describing video content"
  // ... existing props
/>
```

## Phase 3: Image Performance Optimizations

### Problem
Next.js Image components using `fill` prop lack `sizes` attribute, causing performance warnings and suboptimal responsive loading.

### Solution
Add `sizes` prop to inform browser which image resolution to load based on viewport.

### Images Requiring Updates

| File | Instance | Sizes Value |
|-------|-----------|-------------|
| BlogPreview.tsx (BlogImage) | Featured blog images (2 instances) | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` |

### Implementation Pattern

```typescript
// BlogPreview.tsx - BlogImage component
<Image
  src={src}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="..."
/>
```

## Notes

- **EuropeMap.tsx**: Already correctly configured - uses `useTranslations('common')` and keys exist under `aria` in common.json (no changes needed)
- **Testimonials.tsx ThemeAwareLogo**: Has `w-auto` class for aspect ratio; warnings likely resolved by other fixes. Fallback: add `style={{ width: 'auto' }}` if needed.
- **blog.json structure**: Redundant `blog` wrapper present, but keeping namespace-based approach means we keep current structure.

## Success Criteria

- [ ] No `IntlError: MISSING_MESSAGE` errors in console
- [ ] All Video instances have title/alt props
- [ ] All fill Images have sizes prop
- [ ] No accessibility or performance warnings in build output
