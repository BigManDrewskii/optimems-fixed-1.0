/**
 * Common type definitions used across the application.
 * Extracted from landing-page.ts for better organization.
 */

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface HeroSection {
  headline: string
  subheadline: string
  supportingLine: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
}

export interface ClientLogo {
  name: string
  src: string
  alt: string
  href: string
  lightThemeSrc?: string
}

export interface UserSegment {
  title: string
  tagline: string
  description?: string
  icon?: string
  category: 'direct' | 'indirect'
}

export interface ValueProposition {
  id: string
  title: string
  subtitle: string
  description: string
  features: { title: string; description: string }[]
  icon?: string
}

export interface ProductCard {
  name: string
  tagline: string
  description: string
  features?: string[]
  href: string
  icon?: string
  iconLight?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  logo?: string
  lightThemeLogo?: string
  location?: string
  featured?: boolean
}

export interface StatItem {
  label: string
  value: string
  suffix?: string
  description?: string
}

export interface WorkflowStep {
  step: number
  title: string
  description: string
  icon?: string
}

export interface BlogPreview {
  title: string
  excerpt: string
  date: string
  slug: string
  image?: string
  lightThemeImage?: string
  category?: string
}
