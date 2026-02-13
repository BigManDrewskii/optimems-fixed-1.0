# AGENTS.md

This file provides guidance for agentic coding agents operating in this repository.

## Build & Development Commands

```bash
# Start development server with hot reload
npm run dev

# Production build (runs TypeScript check, linting, and optimization)
npm run build

# Run production server (after build)
npm start

# Lint code with ESLint
npm run lint

# TypeScript type check only (fast, no emit)
npx tsc --noEmit
```

**Note**: No test suite exists (landing page only). Skip test-related tasks.

## Project Structure

```
app/                    # Next.js 15 App Router
  - globals.css        # Global styles with OKLCH CSS variables
  - layout.tsx         # Root layout (forced dark mode via next-themes)
  - page.tsx           # Landing page entry

components/
  - sections/          # Page section components
  - shared/            # Shared/reusable components (Container, AnimatedSection, etc.)
  - ui/                # shadcn/ui primitives (Radix-based)
  - magicui/           # Magic UI animated components (marquee, etc.)
  - branding/          # Theme-specific branding components
  - theme-provider.tsx # Theme provider wrapper

lib/
  - utils.ts           # Utility functions (cn() helper)

hooks/
  - use-*.ts           # Custom React hooks
```

## Code Style Guidelines

### Imports
- Use absolute paths with `@/` alias: `import { Button } from "@/components/ui/button"`
- Group imports: React → external libraries → internal components/utils
- No relative path imports (`../` or `./`) except for sibling components

### TypeScript
- **Strict mode enabled** - no implicit `any`, no type coercion
- Explicitly type all function parameters and return types
- **NEVER use**: `any`, `as any`, `@ts-ignore`, `@ts-expect-error`
- Use interfaces for props: `interface ComponentProps { ... }`

### Component Patterns
- All components are **client components** (`"use client"` at top)
- Named exports required: `export function ComponentName() {...}`
- PascalCase component names: `HeroSection`, `StatCard`
- Use class-variance-authority (cva) for variants
- Use Radix UI `Slot` for polymorphic components

### Styling
- Tailwind CSS v4 with CSS custom properties (OKLCH color space)
- Semantic classes: `bg-background`, `text-foreground`, `border-border`
- Merge classes with `cn()` utility from `lib/utils.ts`
- **Never hardcode colors** - use CSS variables from globals.css
- Framer Motion / Motion One for animations
- Custom shadows via `--shadow-*` variables (2xs through 2xl)

### CSS Variables (globals.css)
- `--background`/`--foreground` - page background
- `--primary`/`--primary-foreground` - main actions
- `--secondary`/`--secondary-foreground` - accent elements
- `--destructive` - error/danger actions
- `--card`/`--card-foreground` - card backgrounds
- `--muted`/`--muted-foreground` - secondary content
- `--border`/`--input`/`--ring` - borders and focus rings
- `--chart-1` through `--chart-5` - chart colors

### Error Handling
- **Never use empty catch blocks**: `catch(e) {}` is FORBIDDEN
- Always handle or log errors: `catch (error) { console.error(error) }`
- Use error boundaries for component failures

### Naming Conventions
- Components: PascalCase (`HeroSection`, `StatCard`)
- Functions/variables: camelCase (`isMounted`, `handleSubmit`)
- Hooks: `use` prefix (`useMobile`, `useScroll`)
- Constants: SCREAMING_SNAKE_CASE for config values
- Files: kebab-case for non-components, PascalCase for components

### React Patterns
- `useState` for local state, `useMemo` for expensive computations
- `useCallback` for event handlers passed to child components
- Handle hydration mismatches with mounted check:
  ```typescript
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  ```

## Key Libraries

- **Next.js 15** with App Router
- **React 19** with concurrent features
- **TypeScript 5** with strict mode
- **Tailwind CSS v4** with OKLCH colors
- **shadcn/ui** (Radix UI primitives + Tailwind)
- **Framer Motion** and **Motion One** for animations
- **Zod** + react-hook-form for validation
- **Lucide React** for icons

## Important Constraints

- Path alias: `@/*` maps to project root (see tsconfig.json)
- Image optimization disabled (`unoptimized: true` in next.config)
- Dark mode forced by default (next-themes)
- No empty catch blocks - always handle errors
- No TypeScript suppressors - fix types properly
- Use `tw-animate-css` for CSS-based animations

## Git Workflow

- **Never commit** unless explicitly requested by user
- **Never push** force to main/master
- **Never skip hooks** (--no-verify, --no-gpg-sign)
- If user requests a commit:
  1. Run `git status`, `git diff`, `git log` to understand context
  2. Draft a concise commit message (focus on "why", not "what")
  3. Create commit, then verify with `git status`

## Header/Footer Standardization

All pages MUST use `AppLayout` for consistent Header and Footer:

```tsx
import { AppLayout } from "@/app/app-layout"

export default function Page() {
  return (
    <AppLayout>
      <YourPageContent />
    </AppLayout>
  )
}
```

**Do NOT** import Header or Footer directly. The `AppLayout` component in `app/app-layout.tsx` handles:
- Fixed Header with navigation
- Footer with links and social icons
- Proper spacing and layout

### Exceptions
- Auth pages (`/login`, `/signup`) have custom dark theme layouts - they do NOT use AppLayout
- Pages may have custom layouts when intentionally designed differently

### Navigation Routes
Update routes in these locations when adding new pages:
- `components/shared/Header.tsx` - Main navigation items
- `data/landing-page.ts` - `navigation` array for data consistency
