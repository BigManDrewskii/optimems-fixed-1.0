import { AppLayout } from "@/app/app-layout"
import {
  PartnershipHero,
  PartnershipTypes,
  PartnershipWhyPartner,
  PartnershipBenefits,
  PartnershipHowToStart,
  PartnershipTechnology,
  PartnershipRequirements,
  PartnershipFAQ,
  PartnershipCTA,
} from "@/components/partnership"
import { SocialProof } from "@/components/sections/SocialProof"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Partnership | Optimems",
  description: "Partner with Optimems to lead energy transition. Competitive margins, comprehensive support, and proven technology.",
}

export default function PartnershipPage() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        <PartnershipHero />
        <SocialProof />
        <PartnershipTypes />
        <PartnershipWhyPartner />
        <PartnershipBenefits />
        <PartnershipHowToStart />
        <PartnershipTechnology />
        <PartnershipRequirements />
        <PartnershipFAQ />
        <PartnershipCTA />
      </main>
    </AppLayout>
  )
}
