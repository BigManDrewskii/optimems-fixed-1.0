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

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'el'
      ? "Συνεργασία | Optimems"
      : "Partnership | Optimems",
    description: locale === 'el'
      ? "Γίνετε συνεργάτης της Optimems και ηγηθείτε της ενεργειακής μετάβασης. Ανταγωνιστικά περιθώρια κέρδους, ολοκληρωμένη υποστήριξη και αποδεδειγμένη τεχνολογία."
      : "Partner with Optimems to lead energy transition. Competitive margins, comprehensive support, and proven technology.",
  }
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
