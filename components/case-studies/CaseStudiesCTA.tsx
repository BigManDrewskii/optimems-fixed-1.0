"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"

export function CaseStudiesCTA() {
  const t = useTranslations("caseStudiesPage.cta")
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <ProductPageSection spacing="spacious">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className="backdrop-blur-md rounded-2xl border border-border bg-card/60 p-11 md:p-16"
        >
          <div className="flex flex-col gap-11 text-center">
            {/* Headline */}
            <h3 className={`text-4xl md:text-5xl font-bold text-foreground leading-[56px] tracking-tight ${isGreek ? "greek-heading" : ""}`}>
              {t("headline")}
            </h3>

            {/* Subheadline */}
            <p className={`text-lg md:text-xl leading-7 text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
              {t("subheadline")}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <CustomPrimaryButton
                href="/contact"
                label={t("button")}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductPageSection>
  )
}
