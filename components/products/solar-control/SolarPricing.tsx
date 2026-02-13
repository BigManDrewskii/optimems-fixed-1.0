"use client"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { FeatureList } from "@/components/products/FeatureList"
import { BaseCard } from "@/components/shared/BaseCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

interface PricingPackage {
  subtitle: string
  title: string
  description: string
  details?: string
  useCase?: string
  includes: string[]
  includesLabel?: string
  cta: string
  highlighted?: boolean
  upgradeNote?: string
}

/**
 * SolarPricing - Pricing packages section
 *
 * Displays three pricing tiers: Hardware, SolarShield Platform, and Insights Add-On.
 */
export function SolarPricing() {
  const t = useTranslations('solarControlPage.pricing')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const packages: PricingPackage[] = [
    {
      subtitle: t('packages.hardware.subtitle'),
      title: t('packages.hardware.title'),
      description: t('packages.hardware.description'),
      details: t('packages.hardware.details'),
      useCase: t('packages.hardware.useCase'),
      includes: t.raw('packages.hardware.includes') as string[],
      cta: t('packages.hardware.cta'),
    },
    {
      subtitle: t('packages.solarShield.subtitle'),
      title: t('packages.solarShield.title'),
      description: t('packages.solarShield.description'),
      details: t('packages.solarShield.details'),
      includes: t.raw('packages.solarShield.includes') as string[],
      includesLabel: t('packages.solarShield.includesLabel'),
      cta: t('packages.solarShield.cta'),
      highlighted: true,
    },
    {
      subtitle: t('packages.insights.subtitle'),
      title: t('packages.insights.title'),
      description: t('packages.insights.description'),
      details: t('packages.insights.details'),
      includes: t.raw('packages.insights.includes') as string[],
      cta: t('packages.insights.cta'),
      upgradeNote: t('packages.insights.upgradeNote'),
    },
  ]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        align: "center",
        size: "large"
      }}
      className="space-y-12"
    >
      <div className="relative">
        <div className="relative z-10">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            {t('introduction')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <BaseCard
              variant="standard"
              scale={true}
              padding="lg"
              className={`flex flex-col h-full ${pkg.highlighted ? 'border-2 border-primary relative' : ''}`}
            >
            {pkg.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
            )}
            <div className="mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                {pkg.subtitle}
              </span>
              <h3 className={`text-2xl font-bold mt-2 mb-2 ${isGreek ? 'greek-heading' : ''}`}>
                {pkg.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pkg.description}
              </p>
              {pkg.details && (
                <p className="text-sm">
                  {pkg.details}
                </p>
              )}
              {pkg.useCase && (
                <p className="text-sm text-muted-foreground mt-2">
                  {pkg.useCase}
                </p>
              )}
            </div>
            {pkg.includesLabel && (
              <p className="text-sm font-semibold text-primary mb-2">
                {pkg.includesLabel}
              </p>
            )}
            <ul className="space-y-3 flex-grow mb-6">
              {(pkg.includes || pkg.includesLabel ? [] : pkg.includes).map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            {pkg.upgradeNote && (
              <p className="text-xs text-muted-foreground mb-4 italic">
                {pkg.upgradeNote}
              </p>
            )}
            <Button
              asChild
              variant={pkg.highlighted ? "primary" : "outline"}
              className="w-full"
            >
              <Link href="/contact">
                {pkg.cta}
              </Link>
            </Button>
          </BaseCard>
          </motion.div>
        ))}
      </div>
    </ProductPageSection>
  )
}
