"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * MindPricing - 3 pricing packages
 *
 * Hardware Unit, Platform (highlighted), Insights Add-On
 */
export function MindPricing() {
  const t = useTranslations('mindPage.pricing')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const packages = [
    {
      key: 'hardware',
      highlighted: false
    },
    {
      key: 'platform',
      highlighted: true
    },
    {
      key: 'insights',
      highlighted: false
    }
  ]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        align: "center",
        size: "large"
      }}
    >
      <div className="relative">
        {/* Introduction */}
        <div className="relative z-10 text-center mb-12">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t('introduction')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.key}
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
                className={`flex flex-col h-full ${pkg.highlighted ? 'border-2 border-primary' : ''}`}
              >
                <div className="mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {t(`${pkg.key}.subtitle`)}
                  </span>
                  <h3 className={`text-2xl font-bold mt-2 mb-2 ${isGreek ? 'greek-heading' : ''}`}>
                    {t(`${pkg.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`${pkg.key}.description`)}
                  </p>
                </div>

                <div className="flex-grow">
                  {/* Features could be added here if needed */}
                </div>

                <Button
                  asChild
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="w-full mt-6"
                >
                  <Link href="/contact">
                    {t(`${pkg.key}.cta`)}
                  </Link>
                </Button>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ProductPageSection>
  )
}
