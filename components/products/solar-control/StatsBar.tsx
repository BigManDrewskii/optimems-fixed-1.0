"use client"

import { useTranslations } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"

export function StatsBar() {
  const t = useTranslations('solarControlPage.statsBar')

  const stats = [
    { key: 'satisfaction', value: '98%', label: t('satisfaction.label') },
    { key: 'countries', value: '30+', label: t('countries.label') },
    { key: 'terawatt', value: '100+', label: t('terawatt.label') },
    { key: 'engineers', value: '85+', label: t('engineers.label') },
    { key: 'certified', value: '✓', label: t('certified.label') },
  ] as const

  return (
    <AnimatedSection>
      <div className="border-y border-border bg-muted/30">
        <Container>
          <div className="grid grid-cols-5 gap-4 py-8 md:py-12">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground max-w-[120px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </AnimatedSection>
  )
}
