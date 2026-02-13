# Theme System Refactoring Design

**Date:** February 13, 2026
**Status:** Design Complete
**Author:** Manus AI Audit Analysis

## Overview

This document describes a complete refactoring of the Optimems website theme system. The current implementation contains critical bugs that cause visual glitches, hydration errors, and inconsistent behavior across components. This refactoring establishes a single, reliable source of truth for theme state that works seamlessly across server and client components.

## Problem Statement

The audit identified five critical issues:

1. **Missing `light:` Custom Variant** - Tailwind silently ignores all `light:` prefixed classes because only `@custom-variant dark` is defined in `globals.css`. This breaks light-mode-specific styles across 14+ components.

2. **Dual Header Rendering** - `Header.tsx` renders two overlapping `<header>` elements simultaneously, causing z-index conflicts and duplicated content.

3. **localStorage Key Mismatch** - The FOUC prevention script reads from `localStorage.getItem('theme')` but next-themes uses `optimems-theme` as the default key. The script never prevents the flash of unstyled content.

4. **Inconsistent Theme Detection** - Five different methods detect the current theme across the codebase: direct `document` access, raw `useTheme` hook, `mounted` state flags, custom CSS variants, and `ClientOnly` wrappers. This causes hydration errors and unpredictable behavior.

5. **Incorrect `color-scheme` Declaration** - `:root` declares `color-scheme: dark`, forcing browser UI elements (scrollbars, form controls) to remain dark even in light mode.

## Architecture

### Core Philosophy

Establish `useThemeSafe` as the single source of truth for all theme access. This hook wraps `next-themes` and manages the mounted state internally, providing a consistent, SSR-safe API across all components.

### Key Changes

1. Create `useThemeSafe` hook at `lib/hooks/use-theme-safe.ts`
2. Define `@custom-variant light` in `app/globals.css`
3. Fix `color-scheme` declarations
4. Correct FOUC prevention script localStorage key
5. Refactor header to single element with skeleton loading
6. Migrate all components from `useTheme` to `useThemeSafe`

### Eliminated Patterns

This refactoring removes five inconsistent patterns:
- Direct `document.documentElement.classList` access
- Raw `useTheme` hook without mounting checks
- Manual `mounted` state flags in individual components
- `ClientOnly` wrappers for theme-dependent content
- Unclear theme detection logic scattered across files

## Implementation

### Phase 1: Foundation

Create the core infrastructure before migrating components.

#### `lib/hooks/use-theme-safe.ts`

Create a new hook that wraps `next-themes`:

```typescript
"use client"

import { useTheme as useNextTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeSafe() {
  const [mounted, setMounted] = useState(false)
  const theme = useNextTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    ...theme,
    isReady: mounted,
    isDark: theme.resolvedTheme === "dark",
    isLight: theme.resolvedTheme === "light",
  }
}
```

**API:**
- `isReady: boolean` - `false` during SSR, `true` after client mount
- `isDark: boolean` - Convenience check for dark theme
- `isLight: boolean` - Convenience check for light theme
- All standard `next-themes` properties: `theme`, `setTheme`, `resolvedTheme`, `systemTheme`

#### `app/globals.css`

Add the missing light variant and fix color-scheme:

```css
@import "tailwindcss";
@import "tw-animate-css";

/* FIX: Define the missing light variant */
@custom-variant light (&:not(.dark) *);
@custom-variant dark (&:is(.dark *));

:root {
  /* FIX: Default to light before hydration */
  color-scheme: light;

  /* ... rest of :root styles */
}

.dark {
  color-scheme: dark;

  /* ... rest of .dark styles */
}
```

#### `public/scripts/theme-init.js`

Fix the localStorage key to match next-themes:

```javascript
// Theme initialization script - MUST run early to prevent flash
(function() {
  // FIX: Use the correct storage key 'optimems-theme'
  const theme = localStorage.getItem('optimems-theme') || 'dark';

  // Update document class immediately
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  // Update meta theme-color tag
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    const themeColor = theme === 'dark' ? '#FC5855' : '#03A7AA';
    metaThemeColor.setAttribute('content', themeColor);
  }
})();
```

### Phase 2: Core Components

Migrate components that other components depend on.

#### `components/shared/Header/Header.tsx`

Remove the duplicate header and implement skeleton loading:

```typescript
"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname, Link } from "@/i18n/navigation"
import { OptimemsLogo } from "../Logo"
import { Navigation } from "./Navigation"
import { HeaderDesktop } from "./HeaderDesktop"
import { HeaderMobile } from "./HeaderMobile"
import { MobileNavigation } from "./MobileNavigation"
import { useThemeSafe } from "@/lib/hooks/use-theme-safe"
import type { NavItem, HeaderProps } from "./types"

export function Header({ className }: HeaderProps) {
  const { isReady, resolvedTheme } = useThemeSafe()
  const [isScrolled, setIsScrolled] = useState(false)
  // ... rest of state and hooks

  // FIX: Render simplified skeleton while theme loads
  if (!isReady) {
    return (
      <header className="fixed top-4 left-4 right-4 z-50 mx-auto flex h-[56px] max-w-[1400px] items-center justify-between rounded-2xl border border-border/30 bg-background/90 px-6 py-1 backdrop-blur-md" />
    )
  }

  // FIX: Render single header with theme-aware background
  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 mx-auto rounded-2xl backdrop-blur-md border-0 border-b-2 border-primary max-w-[1400px]",
        "flex items-center justify-between px-6 py-1",
        "bg-background/90",
        isScrolled ? "bg-background/95" : ""
      )}
      style={{
        backgroundImage: `url("/images/sections/grid-pattern-${resolvedTheme}.png")`,
        backgroundRepeat: "repeat",
      }}
      role="banner"
    >
      {/* Single header content */}
    </header>
  )
}
```

**Changes:**
- Import and use `useThemeSafe` hook
- Check `isReady` before rendering
- Return skeleton when `!isReady`
- Use `resolvedTheme` for dynamic background image
- Remove the duplicate header element

#### `components/shared/Header/ThemeToggle.tsx`

Migrate to `useThemeSafe` and remove `ClientOnly`:

```typescript
"use client"

import { useThemeSafe } from "@/lib/hooks/use-theme-safe"
import { cn } from "@/lib/utils"
import type { ThemeToggleStyles } from "./types"

export function ThemeToggle({
  ariaLabel = "Switch theme",
  className,
}: {
  ariaLabel?: string
  className?: string
}) {
  const { isReady, resolvedTheme, setTheme } = useThemeSafe()
  const isDark = resolvedTheme === "dark"

  // FIX: Return placeholder while mounting
  if (!isReady) {
    return (
      <button
        type="button"
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full",
          "bg-muted",
          className
        )}
        aria-label="Switch theme"
        disabled
      />
    )
  }

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full",
        "bg-muted",
        className
      )}
      aria-label={ariaLabel}
    >
      {/* Theme toggle icons */}
    </button>
  )
}
```

### Phase 3: Problematic Components

Fix components with direct DOM access or complex theme logic.

#### `components/shared/Card/WarrantyCard.tsx`

Replace direct DOM access with `useThemeSafe`:

```typescript
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BaseCard } from "../BaseCard"
import { Check } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useThemeSafe } from "@/lib/hooks/use-theme-safe"
import { getVideoSrc } from "@/data/videos"

export function WarrantyCard({
  className,
  isInView = true,
  displayOrder = 0,
  href,
}: WarrantyCardProps) {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"
  const { isReady, isLight } = useThemeSafe()
  const [videoSrc, setVideoSrc] = useState<{ webm?: string; mp4?: string } | null>(null)

  useEffect(() => {
    // FIX: Only set video source when theme is ready
    if (isReady) {
      const src = getVideoSrc(isLight ? 'logoAnimationLight' : 'logoAnimationDark', isLight)
      setVideoSrc(src)
    }
  }, [isReady, isLight])

  // FIX: Prevent rendering until theme is known
  if (!isReady || !videoSrc) {
    return (
      <div className="aspect-video w-full h-full bg-muted rounded-2xl animate-pulse" />
    )
  }

  // ... rest of component
}
```

**Changes:**
- Use `useThemeSafe` instead of `document.documentElement.classList.contains('light')`
- Check `isReady` before accessing `isLight`
- Add loading state for unmounted phase
- Set video source in `useEffect` with correct dependencies

#### `components/shared/Video.tsx`

Migrate from `useTheme` to `useThemeSafe`:

```typescript
function VideoWithTheme({...}: VideoWithThemeProps) {
  const { isReady, resolvedTheme } = useThemeSafe()
  const videoRef = useRef<HTMLVideoElement>(null)
  const isLight = resolvedTheme === "light"

  const resolvedSources = useMemo(() => {
    if (!sources || !isReady) return null
    return {
      webm: isLight && sources.webmLight ? sources.webmLight : sources.webm,
      mp4: isLight && sources.mp4Light ? sources.mp4Light : sources.mp4,
    }
  }, [isLight, sources, isReady])

  // ... rest of component
}
```

**Changes:**
- Replace `useTheme` with `useThemeSafe`
- Check `isReady` before computing theme-dependent values
- Pass `isReady` to `useMemo` dependencies

### Phase 4: Remaining Components

Search and replace all remaining `useTheme` usage.

#### Search Pattern

```bash
# Find all files using useTheme
grep -r "from ['\"]next-themes['\"]" --include="*.tsx" --include="*.ts" components/

# Find all ClientOnly wrappers (may no longer be needed)
grep -r "ClientOnly" --include="*.tsx" components/
```

#### Migration Pattern

For each component:

**Before:**
```typescript
import { useTheme } from "next-themes"

const { resolvedTheme } = useTheme()
const isDark = resolvedTheme === "dark"
```

**After:**
```typescript
import { useThemeSafe } from "@/lib/hooks/use-theme-safe"

const { isReady, resolvedTheme, isDark } = useThemeSafe()

if (!isReady) {
  return <Skeleton /> // or null
}
```

#### Components Using `light:` Classes

No code changes needed. The CSS fix from Phase 1 enables all existing `light:` prefixed classes:
- `components/sections/BlogPreview.tsx`
- `components/sections/Products.tsx`
- `components/sections/Workflow.tsx`
- `components/sections/Testimonials.tsx`
- `components/sections/Footer.tsx`
- `components/shared/Header/ThemeToggle.tsx`
- `components/about-us/VisionMissionSection.tsx`
- `components/about-us/CompanyTagline.tsx`
- `components/about-us/ValuesSection.tsx`
- `components/about-us/CEOMessageSection.tsx`

## Error Handling

### SSR Safety

`useThemeSafe` always returns `isReady: false` during server-side rendering. Components must handle this:

```typescript
const { isReady, resolvedTheme } = useThemeSafe()

// Don't access resolvedTheme without checking isReady
if (!isReady) {
  return <Skeleton />
}

// Safe to use resolvedTheme here
const style = { backgroundImage: `url(/images/bg-${resolvedTheme}.png)` }
```

### Edge Cases

**Corrupted localStorage**: next-themes falls back to `defaultTheme="dark"`
**System theme changes**: next-themes handles automatically
**JavaScript disabled**: FOUC script handles initial paint, theme toggle gracefully degrades

### Hydration Mismatch Prevention

- Never render different markup on server vs client
- Use consistent skeleton/loading states
- All theme-dependent classes now work correctly

## Testing

### Pre-Implementation Baseline

1. Run dev server, record all console errors
2. Document visual bugs with screenshots
3. Test theme toggle on: home, products, blog, about pages
4. Note hydration mismatch count

### Post-Phase Validation

**After Phase 1 (Foundation):**
- [ ] CSS validates without errors
- [ ] No Tailwind build warnings
- [ ] TypeScript compiles

**After Phase 2 (Core Components):**
- [ ] Theme toggle works smoothly
- [ ] No header overlap or duplicate content
- [ ] Brief skeleton visible on page load
- [ ] No FOUC on hard refresh

**After Phase 3 (Problematic Components):**
- [ ] Warranty card plays correct animation
- [ ] Videos load correct theme variant
- [ ] Theme toggle switches video sources

**After Phase 4 (Remaining Components):**
- [ ] Full regression test across all routes
- [ ] No hydration errors in console
- [ ] All `light:` classes work in light mode

### Automated Checks

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build verification
npm run build
```

### Manual Test Checklist

- [ ] No hydration errors in browser console
- [ ] Theme toggle works on all pages
- [ ] Light mode displays correctly (no invisible elements)
- [ ] Dark mode displays correctly (no regressions)
- [ ] Header renders single element
- [ ] Videos play correct theme variant
- [ ] No FOUC on hard refresh
- [ ] Blog prose visible in both themes
- [ ] Warranty animation plays in both themes

## Commit Strategy

```bash
# Phase 1: Foundation
git add lib/hooks/use-theme-safe.ts app/globals.css public/scripts/theme-init.js
git commit -m "feat(theme): add useThemeSafe hook and fix CSS infrastructure

- Create useThemeSafe hook with isReady, isDark, isLight
- Define @custom-variant light for Tailwind
- Fix color-scheme: light in :root
- Correct localStorage key in FOUC prevention script"

# Phase 2: Core Components
git add components/shared/Header/Header.tsx
git add components/shared/Header/ThemeToggle.tsx
git commit -m "fix(theme): refactor header to single element with skeleton loading

- Remove duplicate header rendering
- Add useThemeSafe for theme detection
- Implement skeleton state during mount
- Use dynamic background image based on resolvedTheme"

# Phase 3: Problematic Components
git add components/shared/Card/WarrantyCard.tsx
git add components/shared/Video.tsx
git commit -m "fix(theme): migrate components to useThemeSafe

- Replace direct DOM access in WarrantyCard
- Update Video component with isReady checks
- Remove unsafe theme detection patterns"

# Phase 4: Remaining Migrations
git add components/...
git commit -m "refactor(theme): complete migration to useThemeSafe

- Migrate all remaining useTheme usage
- Remove unnecessary ClientOnly wrappers
- Ensure SSR-safe theme access"
```

## Success Criteria

The refactoring is complete when:

- Zero console hydration errors
- All `light:` prefixed classes work correctly
- Single header renders without overlap
- Theme persists across page navigations
- No visual glitches on theme toggle
- No FOUC on page load or refresh
- All components use `useThemeSafe` consistently

## Rollback Plan

Each phase is independently testable and can be reverted:

1. Git revert points at each phase boundary
2. Commit messages clearly identify scope
3. Can stop after any phase if issues arise
4. Foundation changes (Phase 1) are minimal and low-risk

## References

- Original audit: `issues01.md`
- next-themes documentation: https://github.com/pacocoursey/next-themes
- Tailwind CSS v4 custom variants: https://tailwindcss.com/docs/custom-variants
