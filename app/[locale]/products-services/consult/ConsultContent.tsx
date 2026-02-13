"use client"
import { AppLayout } from "@/app/app-layout"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { MarqueeSection } from "@/components/shared"
import { socialProof } from "@/data/landing-page"

// Critical above-fold sections loaded statically
import { ConsultHero } from "@/components/products/consult"
import { ConsultServices } from "@/components/products/consult"
import { ConsultTechnology } from "@/components/products/consult"
import { Testimonials } from "@/components/sections/Testimonials"
import { ConsultCTA } from "@/components/products/consult"

// Heavy below-fold sections loaded dynamically
const ConsultProcess = dynamic(() => import("@/components/products/consult").then(m => ({ default: m.ConsultProcess })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const ConsultFAQ = dynamic(() => import("@/components/products/consult").then(m => ({ default: m.ConsultFAQ })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})

export function ConsultContent() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <ConsultHero />
        <MarqueeSection
          items={socialProof.logos}
          duration={20}
          pauseOnHover={true}
        />

        {/* Section 2: Services Grid */}
        <ConsultServices />

        {/* Section 4: Technology Showcase */}
        <ConsultTechnology />

        {/* Section 5: Process Workflow */}
        <ConsultProcess />

        {/* Section 6: Testimonials (from landing page) */}
        <Testimonials />

        {/* Section 7: FAQ */}
        <ConsultFAQ />

        {/* Section 8: CTA */}
        <ConsultCTA />
      </main>
    </AppLayout>
  )
}