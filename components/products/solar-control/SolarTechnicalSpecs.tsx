"use client"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { FeatureList } from "@/components/products/FeatureList"
import { TechnologyStrip } from "@/components/products/TechnologyStrip"
import { useTranslations, useLocale } from "next-intl"

/**
 * SolarTechnicalSpecs - Technical specifications summary section
 *
 * Displays comprehensive technical specifications in multiple categories.
 */
export function SolarTechnicalSpecs() {
  const t = useTranslations('solarControlPage.technicalSpecs')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const techSpecs = [
    {
      label: t('supportedTechLabel'),
      items: t.raw('technologies') as string[],
      variant: 'pill' as const,
    },
    {
      label: t('hardwareSpecsLabel'),
      items: t.raw('hardwareSpecs') as string[],
      type: 'featureList' as const,
    },
    {
      label: t('protocolsLabel'),
      items: t.raw('protocols') as string[],
      type: 'featureList' as const,
    },
    {
      label: t('compatibilityLabel'),
      items: t.raw('compatibility') as string[],
      type: 'featureList' as const,
    },
    {
      label: t('securityLabel'),
      items: t.raw('security') as string[],
      type: 'featureList' as const,
    },
    {
      label: t('softwareFeaturesLabel'),
      items: t.raw('softwareFeatures') as string[],
      type: 'featureList' as const,
    },
  ]

  return (
    <ProductPageSection
      spacing="compact"
      header={{
        title: t('headline'),
        align: "center",
        size: "compact"
      }}
      className="space-y-12"
    >
      <div className="max-w-4xl mx-auto">
        {techSpecs.map((spec, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <h3 className={`text-xl font-semibold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
              {spec.label}
            </h3>
            {spec.variant ? (
              <TechnologyStrip
                technologies={spec.items as string[]}
                variant={spec.variant}
              />
            ) : (
              <FeatureList
                features={spec.items as string[]}
                size="sm"
              />
            )}
          </div>
        ))}
      </div>
    </ProductPageSection>
  )
}
