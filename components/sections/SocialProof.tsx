"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { MarqueeSection } from "@/components/shared"
import { socialProof } from "@/data/landing-page"
import { useLocale, useTranslations } from "next-intl"

export function SocialProof() {
  const t = useTranslations('home')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection
      spacing="standard"
      header={{
        title: t("socialProof.sectionLabel"),
        align: "center"
      }}
    >
      <MarqueeSection
        items={socialProof.logos}
        duration={20}
        pauseOnHover={true}
      />
    </ProductPageSection>
  )
}
