"use client"

import { CheckCircle2, LucideIcon } from "lucide-react"
import { useLocale } from "next-intl"

export type FeatureItem = string

export interface FeatureListProps {
  /**
   * Array of feature strings to display
   */
  features: FeatureItem[]

  /**
   * Number of columns for grid layout
   * @default 1
   */
  columns?: 1 | 2 | 3

  /**
   * Icon component to use (default: CheckCircle2)
   */
  icon?: LucideIcon

  /**
   * Size variant
   * - sm: small text (14px), small icon (16px)
   * - md: normal text (16px), medium icon (20px)
   * - lg: large text (18px), large icon (24px)
   * @default 'md'
   */
  size?: "sm" | "md" | "lg"

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Icon color class (default: text-primary)
   */
  iconColor?: string

  /**
   * Text color class (default: text-muted-foreground)
   */
  textColor?: string
}

/**
 * FeatureList - Reusable feature/benefit list with icons
 *
 * Displays features with checkmark icons in a responsive grid.
 * Supports multiple columns and size variants.
 *
 * @example
 * ```tsx
 * <FeatureList
 *   features={["Feature 1", "Feature 2", "Feature 3"]}
 *   columns={2}
 *   size="md"
 * />
 * ```
 *
 * @example With translations
 * ```tsx
 * const t = useTranslations('solarControlPage')
 * <FeatureList
 *   features={t.raw('section.features') as string[]}
 *   columns={2}
 * />
 * ```
 */
export function FeatureList({
  features,
  columns = 1,
  icon: Icon = CheckCircle2,
  size = "md",
  className = "",
  iconColor = "text-primary",
  textColor = "text-muted-foreground"
}: FeatureListProps) {
  const locale = useLocale()
  const isGreek = locale === "el"

  // Size configurations
  const sizeConfig = {
    sm: {
      icon: "w-4 h-4",
      text: "text-sm",
      gap: "gap-2"
    },
    md: {
      icon: "w-5 h-5",
      text: "text-base",
      gap: "gap-3"
    },
    lg: {
      icon: "w-6 h-6",
      text: "text-lg",
      gap: "gap-3"
    }
  }

  const config = sizeConfig[size]

  // Grid layout
  const gridClass = columns === 1
    ? "space-y-3"
    : columns === 2
    ? "grid grid-cols-1 md:grid-cols-2 gap-3"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"

  return (
    <ul className={`${gridClass} ${className}`}>
      {features.map((feature, index) => (
        <li
          key={index}
          className={`flex items-start ${config.gap} ${textColor}`}
        >
          <Icon
            className={`${config.icon} ${iconColor} mt-0.5 shrink-0`}
            aria-hidden="true"
          />
          <span className={`${config.text} ${isGreek ? "greek-text" : ""}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}
