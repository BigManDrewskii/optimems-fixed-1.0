"use client"

import { useLocale } from "next-intl"

export interface Stat {
  value: string
  description: string
}

export interface StatsGridProps {
  stats: Stat[]
  /**
   * Number of columns for grid layout
   * @default 4
   */
  columns?: 2 | 3 | 4

  /**
   * Optional solid background (e.g., "bg-muted/10")
   */
  gradient?: string

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Padding class
   * @default "p-8 md:p-12"
   */
  padding?: string
}

/**
 * StatsGrid - Display statistics in a responsive grid
 *
 * Shows statistics with large values and descriptions.
 * Optionally applies a gradient background.
 *
 * @example
 * ```tsx
  * <StatsGrid
  *   stats={[
  *     { value: "98%", description: "Uptime" },
  *     { value: "30+", description: "Countries" },
  *     { value: "100+", description: "Partners" },
  *     { value: "85+", description: "Awards" }
  *   ]}
  *   columns={4}
  *   background="bg-muted/10"
  * />
 * ```
 */
export function StatsGrid({
  stats,
  columns = 4,
  gradient = "",
  className = "",
  padding = "p-8 md:p-12"
}: StatsGridProps) {
  const locale = useLocale()
  const isGreek = locale === "el"

  const gridClass = {
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4"
  }[columns]

  return (
    <div className={`${padding} ${gradient} rounded-2xl ${className}`}>
      <div className={`grid ${gridClass} gap-8`}>
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-4xl md:text-5xl font-bold mb-2 ${
              isGreek ? "greek-heading" : ""
            }`}>
              {stat.value}
            </div>
            <p className="text-sm text-muted-foreground">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
