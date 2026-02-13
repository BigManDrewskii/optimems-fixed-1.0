"use client"

import { useTranslations, useLocale } from "next-intl"
import { ProductPageSection } from "@/components/products/ProductPageSection"

export function ProductOverview() {
  const t = useTranslations('solarControlPage.productOverview')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const technologies = [
    { key: 'pv', icon: '☀️', label: t('technologies.pv') },
    { key: 'wind', icon: '💨', label: t('technologies.wind') },
    { key: 'hydro', icon: '💧', label: t('technologies.hydro') },
    { key: 'biogas', icon: '🌱', label: t('technologies.biogas') },
    { key: 'biomass', icon: '🌾', label: t('technologies.biomass') },
    { key: 'batteries', icon: '🔋', label: t('technologies.batteries') },
  ] as const

  return (
    <ProductPageSection
      header={{
        title: t('title'),
        align: "center",
        size: "standard"
      }}
      spacing="standard"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Hardware Column */}
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
            <p className="text-muted-foreground text-sm">{t('hardware.imagePlaceholder')}</p>
          </div>
          <h3 className={`text-2xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
            {t('hardware.title')}
          </h3>
          <p className={`text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
            {t('hardware.description')}
          </p>
        </div>

        {/* Software Column */}
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
            <p className="text-muted-foreground text-sm">{t('software.imagePlaceholder')}</p>
          </div>
          <h3 className={`text-2xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
            {t('software.title')}
          </h3>
          <p className={`text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
            {t('software.description')}
          </p>
        </div>
      </div>

      {/* Supported Technologies */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {technologies.map((tech) => (
          <div
            key={tech.key}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-4xl">{tech.icon}</span>
            <span className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </ProductPageSection>
  )
}
