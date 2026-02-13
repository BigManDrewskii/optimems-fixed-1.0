"use client"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { CheckCircle2 } from "lucide-react"

export function SolarCTA() {
  const t = useTranslations('solarControlPage.cta')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const trustPoints = t.raw('trustSignals') as string[]

  return (
    <ProductPageSection
      spacing="spacious"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className="backdrop-blur-md rounded-2xl border border-border bg-card/60 p-11 md:p-16"
        >
          {/* Content Container */}
          <div className="flex flex-col gap-11 text-center">
            {/* Headline and Description */}
            <div className="flex flex-col gap-6">
              {/* Headline */}
              <h3 className={`text-4xl md:text-5xl font-bold text-foreground leading-[56px] tracking-tight ${isGreek ? 'greek-heading' : ''}`}>
                {t('headline')}
              </h3>

              {/* Description */}
              <p className={`text-lg md:text-xl leading-7 text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                {t('description')}
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className={`text-muted-foreground leading-5 ${isGreek ? 'greek-text' : ''}`}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-6">
              {/* Button */}
              <div className="flex justify-center">
                <CustomPrimaryButton
                  href="/"
                  label={t('formSubmit')}
                />
              </div>

              {/* Secondary Link */}
              <div className="text-center">
                <p className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                  Questions?{' '}
                  <Link href="/contact" className="text-primary hover:text-primary/80 hover:underline">
                    Contact our team
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
