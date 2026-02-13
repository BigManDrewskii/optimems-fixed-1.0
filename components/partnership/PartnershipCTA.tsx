"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { CheckCircle2 } from "lucide-react"

export function PartnershipCTA() {
  const t = useTranslations('partnershipPage.cta')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const trustSignals = t.raw('trustSignals') as string[]

  return (
    <ProductPageSection
      spacing="spacious"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className="backdrop-blur-md rounded-2xl border border-border bg-card/60 p-11 md:p-16"
        >
          <div className="flex flex-col gap-11 text-center">
            <div className="flex flex-col gap-6">
              <h3 className={`text-4xl md:text-5xl font-bold text-foreground leading-[56px] tracking-tight ${isGreek ? 'greek-heading' : ''}`}>
                {t('headline')}
              </h3>

              <p className={`text-lg md:text-xl leading-7 text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                {t('subheadline')}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {trustSignals.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className={`text-muted-foreground leading-5 ${isGreek ? 'greek-text' : ''}`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <CustomPrimaryButton
                  href="/contact"
                  label={t('primaryCTA')}
                />
              </div>

              <div className="text-center">
                <p className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                  {t('questionsText')}{' '}
                  <Link href="/contact" className="text-primary hover:text-primary/80 hover:underline">
                    {t('contactLink')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductPageSection>
  )
}
