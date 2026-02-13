"use client"

import { useLocale } from "next-intl"

export interface Technology {
  key: string
  icon?: string  // emoji or icon component
  label: string
}

export type TechnologyItem = string | Technology

export interface TechnologyStripProps {
  /**
   * Array of technologies (strings or objects with icon/label)
   */
  technologies: TechnologyItem[]

  /**
   * Display variant
   * - pill: rounded pills with icons (default)
   * - tag: simple tags without background
   */
  variant?: "pill" | "tag"

  /**
   * Center the strip
   * @default true
   */
  centered?: boolean

  /**
   * Background color for pills (only for pill variant)
   * @default "bg-primary/10"
   */
  pillBg?: string

  /**
   * Text color for pills
   * @default "text-primary"
   */
  pillText?: string

  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * TechnologyStrip - Display technology tags with optional icons
 *
 * Shows technologies in a horizontal strip with flexible wrapping.
 * Supports emoji icons or simple text tags.
 *
 * @example With emojis (simple)
 * ```tsx
 * <TechnologyStrip
 *   technologies={[
 *     { key: 'pv', icon: '☀️', label: 'Solar PV' },
 *     { key: 'wind', icon: '💨', label: 'Wind' },
 *     { key: 'hydro', icon: '💧', label: 'Hydro' }
 *   ]}
 * />
 * ```
 *
 * @example Without icons (tags)
 * ```tsx
 * <TechnologyStrip
 *   technologies={["Technology 1", "Technology 2", "Technology 3"]}
 *   variant="tag"
 * />
 * ```
 */
export function TechnologyStrip({
  technologies,
  variant = "pill",
  centered = true,
  pillBg = "bg-primary/10",
  pillText = "text-primary",
  className = ""
}: TechnologyStripProps) {
  const locale = useLocale()
  const isGreek = locale === "el"

  const alignClass = centered ? "justify-center" : "justify-start"

  // Normalize technologies to objects
  const normalizedTechs = technologies.map((tech) => {
    if (typeof tech === "string") {
      return { key: tech, label: tech }
    }
    return tech
  })

  // Variant styles
  if (variant === "tag") {
    return (
      <div className={`flex flex-wrap gap-3 ${alignClass} ${className}`}>
        {normalizedTechs.map((tech) => (
          <span
            key={tech.key}
            className={`px-3 py-1 rounded-md bg-muted text-sm font-medium ${isGreek ? "greek-text" : ""}`}
          >
            {tech.icon && <span className="mr-2">{tech.icon}</span>}
            {tech.label}
          </span>
        ))}
      </div>
    )
  }

  // Default: pill variant
  return (
    <div className={`flex flex-wrap gap-3 ${alignClass} ${className}`}>
      {normalizedTechs.map((tech) => (
        <div
          key={tech.key}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${pillBg} ${isGreek ? "greek-text" : ""}`}
        >
          {tech.icon && <span className="text-lg">{tech.icon}</span>}
          <span className={`text-sm font-medium ${pillText}`}>
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  )
}
