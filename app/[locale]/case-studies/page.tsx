"use client"

import { AppLayout } from "@/app/app-layout"
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero"
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid"
import { CaseStudiesCTA } from "@/components/case-studies/CaseStudiesCTA"

export default function CaseStudiesPage() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <CaseStudiesCTA />
      </main>
    </AppLayout>
  )
}
