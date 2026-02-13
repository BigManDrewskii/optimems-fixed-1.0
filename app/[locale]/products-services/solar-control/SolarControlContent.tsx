"use client"
import { AppLayout } from "@/app/app-layout"
import { useTranslations, useLocale } from "next-intl"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Demo-style sections - critical above-fold loaded statically
import { SolarHeroDemo } from "@/components/products/solar-control/SolarHeroDemo"
import { MarqueeSection } from "@/components/shared"
import { socialProof } from "@/data/landing-page"
import { SolarProblem } from "@/components/products/solar-control/SolarProblem"
import { SolarSolution } from "@/components/products/solar-control/SolarSolution"

// Heavy below-fold sections loaded dynamically
const SolarTrust = dynamic(() => import("@/components/products/solar-control/SolarTrust").then(m => ({ default: m.SolarTrust })), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
  ssr: true
})
const SolarWhatIs = dynamic(() => import("@/components/products/solar-control/SolarWhatIs").then(m => ({ default: m.SolarWhatIs })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const SolarDifferentiator = dynamic(() => import("@/components/products/solar-control/SolarDifferentiator").then(m => ({ default: m.SolarDifferentiator })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const SolarHardware = dynamic(() => import("@/components/products/solar-control/SolarHardware").then(m => ({ default: m.SolarHardware })), {
  loading: () => <Skeleton className="h-[700px] w-full" />,
  ssr: false
})
const SolarSoftware = dynamic(() => import("@/components/products/solar-control/SolarSoftware").then(m => ({ default: m.SolarSoftware })), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
  ssr: false
})
const SolarWhoBenefits = dynamic(() => import("@/components/products/solar-control/SolarWhoBenefits").then(m => ({ default: m.SolarWhoBenefits })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const SolarInsights = dynamic(() => import("@/components/products/solar-control/SolarInsights").then(m => ({ default: m.SolarInsights })), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
  ssr: true
})
const SolarPricing = dynamic(() => import("@/components/products/solar-control/SolarPricing").then(m => ({ default: m.SolarPricing })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const SolarWarranty = dynamic(() => import("@/components/products/solar-control/SolarWarranty").then(m => ({ default: m.SolarWarranty })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const SolarCTA = dynamic(() => import("@/components/products/solar-control/SolarCTA").then(m => ({ default: m.SolarCTA })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})

export function SolarControlContent() {
   const t = useTranslations('solarControlPage')
   const locale = useLocale()
   const isGreek = locale === 'el'

  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Phase 1: Hero Section with Product Image Background */}
        <SolarHeroDemo />
        <MarqueeSection
          items={socialProof.logos}
          duration={20}
          pauseOnHover={true}
        />

        {/* Phase 2: Problem & Solution Sections */}
        <SolarProblem />
        <SolarSolution />

        {/* Phase 3: Trust & What Is Sections */}
        <SolarTrust />
        <SolarWhatIs />

        {/* Phase 4: Differentiator, Hardware & Software */}
        <SolarDifferentiator />
        <SolarHardware />
        <SolarSoftware />

        {/* Phase 5: Who Benefits, Insights & Pricing */}
        <SolarWhoBenefits />
        <SolarInsights />
        <SolarPricing />

        {/* Phase 6: Warranty & CTA */}
        <SolarWarranty />
        <SolarCTA />
      </main>
    </AppLayout>
  )
}
