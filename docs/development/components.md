# OPTIMEMS Landing Page - Component Implementation Guide

## Quick Start

```tsx
// app/page.tsx
import { landingPageData } from '@/data/landing-page';
import { theme } from '@/data/theme';

// Import your section components
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
// ... etc
```

---

## Section-by-Section Component Mapping

### 1. Hero Section

**Data:** `landingPageData.hero`

```tsx
// components/sections/Hero.tsx
import { hero } from '@/data/landing-page';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container relative z-10">
        {/* Supporting line - small eyebrow text */}
        <p className="text-accent-400 font-mono text-sm mb-4">
          {hero.supportingLine}
        </p>
        
        {/* Main headline */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          {hero.headline}
        </h1>
        
        {/* Subheadline */}
        <p className="mt-6 text-xl md:text-2xl text-neutral-300 max-w-3xl">
          {hero.subheadline}
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={hero.primaryCTA.href} className="btn-primary">
            {hero.primaryCTA.label}
          </a>
          <a href={hero.secondaryCTA.href} className="btn-secondary">
            {hero.secondaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

### 2. Social Proof / Logo Strip

**Data:** `landingPageData.socialProof`

```tsx
// components/sections/SocialProof.tsx
import { socialProof } from '@/data/landing-page';

export function SocialProof() {
  return (
    <section className="py-16 border-y border-neutral-800">
      <div className="container">
        <p className="text-center text-neutral-500 text-sm uppercase tracking-widest mb-8">
          {socialProof.sectionLabel}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {socialProof.logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="h-8 opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 3. Core Value Statement

**Data:** `landingPageData.coreValueStatement`

```tsx
// components/sections/CoreValue.tsx
import { coreValueStatement } from '@/data/landing-page';

export function CoreValue() {
  return (
    <section className="py-24">
      <div className="container max-w-4xl text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-heading leading-relaxed text-neutral-100">
          {coreValueStatement.text}
        </p>
      </div>
    </section>
  );
}
```

---

### 4. User Segments

**Data:** `landingPageData.userSegments` + `landingPageData.segmentsSectionCopy`

```tsx
// components/sections/UserSegments.tsx
import { userSegments, segmentsSectionCopy } from '@/data/landing-page';

export function UserSegments() {
  const directUsers = userSegments.filter(s => s.category === 'direct');
  const indirectUsers = userSegments.filter(s => s.category === 'indirect');

  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="container">
        {/* Direct Users */}
        <div className="mb-20">
          <h2 className="text-lg text-primary-400 mb-2">
            {segmentsSectionCopy.directTitle}
          </h2>
          <p className="text-3xl font-heading font-bold mb-12">
            {segmentsSectionCopy.directSubtitle}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directUsers.map((segment) => (
              <SegmentCard key={segment.title} {...segment} />
            ))}
          </div>
        </div>

        {/* Indirect Users */}
        <div>
          <h2 className="text-lg text-primary-400 mb-2">
            {segmentsSectionCopy.indirectTitle}
          </h2>
          <p className="text-3xl font-heading font-bold mb-12">
            {segmentsSectionCopy.indirectSubtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {indirectUsers.map((segment) => (
              <SegmentCard key={segment.title} {...segment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SegmentCard({ title, tagline, description, icon }: UserSegment) {
  return (
    <div className="group p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-primary-500/50 transition-all">
      {/* Icon placeholder */}
      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
        <span className="text-primary-400">{/* Icon component */}</span>
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-accent-400 font-medium mb-3">{tagline}</p>
      {description && (
        <p className="text-neutral-400 text-sm">{description}</p>
      )}
    </div>
  );
}
```

---

### 5. Stats / At a Glance

**Data:** `landingPageData.stats`

```tsx
// components/sections/Stats.tsx
import { stats } from '@/data/landing-page';

export function Stats() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-energy">
                {stat.value}{stat.suffix}
              </div>
              <p className="mt-2 text-neutral-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 6. Value Propositions (Expandable Cards)

**Data:** `landingPageData.valuePropositions`

```tsx
// components/sections/ValuePropositions.tsx
'use client';
import { useState } from 'react';
import { valuePropositions } from '@/data/landing-page';

export function ValuePropositions() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          Why <span className="text-primary-400">Optimems</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {valuePropositions.map((prop) => (
            <ValueCard
              key={prop.id}
              {...prop}
              isExpanded={expanded === prop.id}
              onToggle={() => setExpanded(expanded === prop.id ? null : prop.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ 
  id, title, subtitle, description, features, isExpanded, onToggle 
}: ValueProposition & { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div 
      className={`
        p-8 rounded-2xl border cursor-pointer transition-all duration-300
        ${isExpanded 
          ? 'bg-primary-500/10 border-primary-500/50' 
          : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
        }
      `}
      onClick={onToggle}
    >
      <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
      <p className="text-accent-400 mb-4">{subtitle}</p>
      
      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-neutral-300 mb-6">{description}</p>
        
        <div className="space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="pl-4 border-l-2 border-primary-500/50">
              <h4 className="font-semibold text-white">{feature.title}</h4>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Expand indicator */}
      <div className="mt-4 text-primary-400 text-sm">
        {isExpanded ? '− Collapse' : '+ Learn more'}
      </div>
    </div>
  );
}
```

---

### 7. Products Overview

**Data:** `landingPageData.products` + `landingPageData.productsSectionCopy`

```tsx
// components/sections/Products.tsx
import { products, productsSectionCopy } from '@/data/landing-page';
import Link from 'next/link';

export function Products() {
  return (
    <section className="py-24" id="solutions">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {productsSectionCopy.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {productsSectionCopy.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-primary-500/50 transition-all"
            >
              {/* Product icon/badge */}
              <div className="inline-flex px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 font-mono text-sm mb-6">
                {product.name}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3">
                {product.tagline}
              </h3>
              
              <p className="text-neutral-400 mb-6">
                {product.description}
              </p>
              
              {product.features && (
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <span className="text-primary-400 group-hover:text-primary-300 transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 8. Workflow / How It Works

**Data:** `landingPageData.workflow` + `landingPageData.workflowSectionCopy`

```tsx
// components/sections/Workflow.tsx
import { workflow, workflowSectionCopy } from '@/data/landing-page';

export function Workflow() {
  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {workflowSectionCopy.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {workflowSectionCopy.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {workflow.map((step, i) => (
              <div key={step.step} className="relative flex gap-8 items-start">
                {/* Step number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary-400">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### 9. Testimonials

**Data:** `landingPageData.testimonials` + `landingPageData.testimonialsSectionCopy`

```tsx
// components/sections/Testimonials.tsx
'use client';
import { useState } from 'react';
import { testimonials, testimonialsSectionCopy } from '@/data/landing-page';

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {testimonialsSectionCopy.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {testimonialsSectionCopy.subtitle}
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-heading leading-relaxed text-neutral-100 mb-8">
              "{testimonials[active].quote}"
            </p>
            
            <footer className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-neutral-800" />
              <div>
                <cite className="not-italic font-semibold text-white">
                  {testimonials[active].author}
                </cite>
                <p className="text-neutral-400">
                  {testimonials[active].role}, {testimonials[active].company}
                </p>
                <p className="text-primary-400 text-sm">
                  {testimonials[active].location}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === active ? 'bg-primary-500 w-8' : 'bg-neutral-700 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 10. Contact CTA

**Data:** `landingPageData.contactCTA`

```tsx
// components/sections/ContactCTA.tsx
import { contactCTA } from '@/data/landing-page';

export function ContactCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-neutral-950 to-accent-900/30" />
      
      <div className="container relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          {contactCTA.title}
        </h2>
        
        <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
          {contactCTA.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href={contactCTA.primaryCTA.href} className="btn-primary btn-lg">
            {contactCTA.primaryCTA.label}
          </a>
          <a href={contactCTA.secondaryCTA.href} className="btn-secondary btn-lg">
            {contactCTA.secondaryCTA.label}
          </a>
        </div>
        
        <p className="text-neutral-500">
          {contactCTA.supportText}{' '}
          <a href={`mailto:${contactCTA.email}`} className="text-primary-400 hover:underline">
            {contactCTA.email}
          </a>
        </p>
      </div>
    </section>
  );
}
```

---

## Full Page Assembly

```tsx
// app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { CoreValue } from '@/components/sections/CoreValue';
import { UserSegments } from '@/components/sections/UserSegments';
import { Stats } from '@/components/sections/Stats';
import { ValuePropositions } from '@/components/sections/ValuePropositions';
import { Products } from '@/components/sections/Products';
import { Workflow } from '@/components/sections/Workflow';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      <Hero />
      <SocialProof />
      <CoreValue />
      <UserSegments />
      <Stats />
      <ValuePropositions />
      <Products />
      <Workflow />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
```

---

## Recommended Font Imports

```css
/* globals.css or layout head */
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&f[]=general-sans@400,500,600&display=swap');

/* Or self-host from fontshare.com / fontsource */
```

---

## Key Design Notes

1. **Dark theme primary** - Energy companies feel more tech-forward with dark interfaces
2. **Electric blue + green** - Conveys energy, technology, and sustainability
3. **Mesh gradients** - Modern, dynamic backgrounds for hero sections
4. **Card-based segments** - Scannable, clear hierarchy for different user types
5. **Expandable value props** - Reduces cognitive load while enabling depth
6. **Timeline workflow** - Clear progression from install to optimization
7. **Testimonial carousel** - Social proof with European market focus
