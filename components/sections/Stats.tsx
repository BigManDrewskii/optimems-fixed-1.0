"use client"

import { stats } from "@/data/landing-page"
import { useLocale, useTranslations } from "next-intl"
import { statKeys } from "@/lib/i18n/translation-keys"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { memo } from "react"

const EuropeMap = dynamic(() => import("@/components/shared").then(mod => ({ default: mod.EuropeMap })), {
  loading: () => <Skeleton className="h-[400px] w-full rounded-lg" />,
  ssr: false
})

// Memoized StatItem component to prevent re-renders
const StatItem = memo(function StatItem({
  stat,
  index,
  statKeys,
  translations,
  isGreek,
}: {
  stat: typeof stats[0]
  index: number
  statKeys: readonly string[]
  translations: ReturnType<typeof useTranslations>
  isGreek: boolean
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Value */}
      <div className="text-3xl md:text-4xl font-bold text-foreground tracking-[0.16px] flex items-baseline justify-center">
        {stat.value}
        {stat.suffix && <span className="text-xl md:text-2xl ml-0.5">{stat.suffix}</span>}
      </div>

      {/* Label */}
      <div className={`mt-2 text-sm text-muted-foreground uppercase tracking-[0.84px] leading-5 ${isGreek ? "greek-text" : ""}`}>
        {translations(`stats.${statKeys[index]}.label`)}
      </div>

      {/* Description */}
      {stat.description && (
        <div className="mt-1 px-2">
          <div className={`text-xs text-muted-foreground/60 leading-4 text-center ${isGreek ? "greek-text" : ""}`}>
            {translations(`stats.${statKeys[index]}.description`)}
          </div>
        </div>
      )}
    </div>
  )
})

export const Stats = memo(function Stats() {
  const t = useTranslations('home')
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-[1152px] mx-auto">

          {/* Two-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Column: Interactive Map */}
            <div className="order-2 lg:order-1">
              <div
                className="rounded-lg border border-border/50 overflow-hidden bg-muted/30 min-h-[400px]"
                role="region"
                aria-label="Optimems market presence across Europe"
              >
                <EuropeMap />
              </div>
            </div>

            {/* Right Column: Content & Stats */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Heading */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-[0.16px] ${isGreek ? "greek-heading" : ""}`}>
                {t("marketAdaptability.title")}
              </h2>

              {/* Description */}
              <p className={`text-lg text-foreground/70 leading-7 mt-4 mb-8 ${isGreek ? "greek-text" : ""}`}>
                {t("marketAdaptability.text")}
              </p>

              {/* Stats - 3 items in grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {stats.map((stat, index) => (
                  <StatItem
                    key={stat.label}
                    stat={stat}
                    index={index}
                    statKeys={statKeys}
                    translations={t}
                    isGreek={isGreek}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
