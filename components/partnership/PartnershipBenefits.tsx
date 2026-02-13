"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { IconCardGrid } from "@/components/products/IconCardGrid"
import { useTranslations, useLocale } from "next-intl"
import { GraduationCap, Headset, DollarSign, Globe, Database } from "lucide-react"

export function PartnershipBenefits() {
  const t = useTranslations('partnershipPage.benefits')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const benefitCards = [
    {
      icon: GraduationCap,
      title: t('technicalTraining.title'),
      description: t('technicalTraining.description'),
    },
    {
      icon: Headset,
      title: t('marketingSupport.title'),
      description: t('marketingSupport.description'),
    },
    {
      icon: Headset,
      title: t('technicalSupport.title'),
      description: t('technicalSupport.description'),
    },
    {
      icon: DollarSign,
      title: t('competitiveMargins.title'),
      description: t('competitiveMargins.description'),
    },
    {
      icon: Globe,
      title: t('exclusiveTerritory.title'),
      description: t('exclusiveTerritory.description'),
    },
    {
      icon: Database,
      title: t('partnerPortal.title'),
      description: t('partnerPortal.description'),
    },
  ]

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('introduction'),
        align: "center",
        size: "standard"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <IconCardGrid
          cards={benefitCards}
          columns={3}
          align="left"
          cardPadding="p-6"
          iconSize="w-14 h-14"
        />
      </div>
    </ProductPageSection>
  )
}
