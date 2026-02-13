"use client"

import { CheckCircle2, X } from "lucide-react"
import { useLocale } from "next-intl"

export interface ComparisonColumn {
  title: string
  items: string[]
  /**
   * If true, shows checkmarks and uses primary color
   * If false, shows X marks and uses muted color
   */
  highlight?: boolean
}

export interface ComparisonGridProps {
  left: ComparisonColumn
  right: ComparisonColumn
  className?: string
}

/**
 * ComparisonGrid - Side-by-side comparison layout
 *
 * Displays two columns for comparison (e.g., SCADA vs SolarControl).
 * Left column shows X marks with muted styling.
 * Right column shows checkmarks with primary color styling.
 *
 * @example
 * ```tsx
 * <ComparisonGrid
 *   left={{
 *     title: "Traditional SCADA",
 *     items: ["Manual setup", "On-site engineers", "Long installation"],
 *   }}
 *   right={{
 *     title: "+SolarControl",
 *     items: ["Plug-and-play", "Cloud-based", "Quick installation"],
 *     highlight: true
 *   }}
 * />
 * ```
 */
export function ComparisonGrid({
  left,
  right,
  className = ""
}: ComparisonGridProps) {
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {/* Left Column */}
      <div>
        <p className={`text-lg font-semibold mb-4 ${
          left.highlight ? "text-primary" : "text-muted-foreground"
        } ${isGreek ? "greek-heading" : ""}`}>
          {left.title}
        </p>
        <ul className="space-y-3">
          {left.items.map((item, index) => (
            <li
              key={index}
              className={`flex items-start gap-2 ${
                left.highlight ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {left.highlight ? (
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              ) : (
                <span className="text-destructive mt-0.5">✗</span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div>
        <p className={`text-lg font-semibold mb-4 ${
          right.highlight ? "text-primary" : "text-muted-foreground"
        } ${isGreek ? "greek-heading" : ""}`}>
          {right.title}
        </p>
        <ul className="space-y-3">
          {right.items.map((item, index) => (
            <li
              key={index}
              className={`flex items-start gap-2 ${
                right.highlight ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {right.highlight ? (
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              ) : (
                <span className="text-destructive mt-0.5">✗</span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
