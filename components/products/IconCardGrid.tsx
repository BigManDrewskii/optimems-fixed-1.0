"use client"

import { BaseCard } from "@/components/shared/BaseCard"
import { LucideIcon } from "lucide-react"
import { useLocale } from "next-intl"

export interface IconCard {
  icon: LucideIcon
  title: string
  description: string
  /**
   * Background color for icon container
   * @default "bg-primary/10"
   */
  iconBg?: string
  /**
   * Color for icon
   * @default "text-primary"
   */
  iconColor?: string
}

export interface IconCardGridProps {
  /**
   * Array of cards to display
   */
  cards: IconCard[]

  /**
   * Number of columns
   * @default 3
   */
  columns?: 2 | 3 | 4

  /**
   * Card alignment
   * @default "center"
   */
  align?: "left" | "center"

  /**
   * Card padding
   * @default "p-6"
   */
  cardPadding?: string

  /**
   * Icon container size
   * @default "w-14 h-14"
   */
  iconSize?: string

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * IconCardGrid - Grid of icon-based cards
 *
 * Displays cards with icons, titles, and descriptions in a responsive grid.
 * Used for feature highlights, benefits, and value propositions.
 *
 * @example
 * ```tsx
 * <IconCardGrid
 *   cards={[
 *     {
 *       icon: Shield,
 *       title: "Full Compliance",
 *       description: "Complete DSO compliance"
 *     },
 *     {
 *       icon: Lock,
 *       title: "Maximum Security",
 *       description: "Impregnable defense"
 *     },
 *     {
 *       icon: Cpu,
 *       title: "Flexible Architecture",
 *       description: "Customizable in clicks"
 *     }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export function IconCardGrid({
  cards,
  columns = 3,
  align = "center",
  cardPadding = "p-6",
  iconSize = "w-14 h-14",
  className = ""
}: IconCardGridProps) {
  const locale = useLocale()
  const isGreek = locale === "el"

  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns]

  const alignClass = align === "center" ? "text-center" : "text-left"
  const iconAlignClass = align === "center" ? "mx-auto" : ""

  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <BaseCard key={index} className={`${cardPadding} ${alignClass}`}>
            <div className={`${iconSize} ${iconAlignClass} mb-4 rounded-xl ${card.iconBg || "bg-primary/10"} flex items-center justify-center`}>
              <Icon className={`w-7 h-7 ${card.iconColor || "text-primary"}`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 ${isGreek ? "greek-heading" : ""}`}>
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {card.description}
            </p>
          </BaseCard>
        )
      })}
    </div>
  )
}
