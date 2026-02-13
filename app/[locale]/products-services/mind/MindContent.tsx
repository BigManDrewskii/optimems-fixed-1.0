"use client"
import { AppLayout } from "@/app/app-layout"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { MarqueeSection } from "@/components/shared"
import { socialProof } from "@/data/landing-page"

// Critical above-fold sections loaded statically
import { MindHero, MindProblem, MindSolution } from "@/components/products/mind"

// Heavy below-fold sections loaded dynamically
const MindHowItWorks = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindHowItWorks })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const MindKeyFeatures = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindKeyFeatures })), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
  ssr: true
})
const MindWhoIsItFor = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindWhoIsItFor })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const MindTechnology = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindTechnology })), {
  loading: () => <Skeleton className="h-[700px] w-full" />,
  ssr: false
})
const MindPricing = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindPricing })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const MindWarranty = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindWarranty })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const MindCTA = dynamic(() => import("@/components/products/mind").then(m => ({ default: m.MindCTA })), {
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: true
})

export function MindContent() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <MindHero />
        <MarqueeSection
          items={socialProof.logos}
          duration={20}
          pauseOnHover={true}
        />

        {/* Section 2: Problem & Solution */}
        <MindProblem />
        <MindSolution />

        {/* Section 3: How It Works */}
        <MindHowItWorks />

        {/* Section 4: Key Features */}
        <MindKeyFeatures />

        {/* Section 5: Who Is It For */}
        <MindWhoIsItFor />

        {/* Section 6: Technology */}
        <MindTechnology />

        {/* Section 7: Pricing, Warranty & CTA */}
        <MindPricing />
        <MindWarranty />
        <MindCTA />
      </main>
    </AppLayout>
  )
}
