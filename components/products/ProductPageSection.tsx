"use client"

import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ReactNode } from "react"

export interface ProductPageSectionProps {
  children: ReactNode
  className?: string
  spacing?: 'compact' | 'standard' | 'spacious' | 'grand'
  header?: {
    title: string
    description?: string
    align?: "left" | "center" | "right"
    size?: "compact" | "standard" | "large"
  }
}

/**
 * ProductPageSection - Consistent wrapper for product page sections
 *
 * Wraps content in AnimatedSection with Container and applies consistent spacing.
 * Optionally includes a SectionHeader.
 *
 * @example
 * ```tsx
 * <ProductPageSection
 *   header={{
 *     title: "Section Title",
 *     description: "Optional description",
 *     align: "center"
 *   }}
 * >
 *   <YourContent />
 * </ProductPageSection>
 * ```
 */
export function ProductPageSection({
  children,
  className,
  spacing = 'standard',
  header
}: ProductPageSectionProps) {
  const spacingClasses = {
    compact: 'py-12 md:py-16',
    standard: 'py-20 md:py-28',
    spacious: 'py-24 md:py-32',
    grand: 'py-32 md:py-40',
  }

  return (
    <AnimatedSection>
      <Container>
        <div className={`${spacingClasses[spacing]} ${className || ""}`}>
          {header && (
            <SectionHeader
              title={header.title}
              description={header.description}
              align={header.align || "left"}
              size={header.size}
            />
          )}
          {children}
        </div>
      </Container>
    </AnimatedSection>
  )
}
