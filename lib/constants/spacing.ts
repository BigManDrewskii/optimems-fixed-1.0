/**
 * Standard spacing constants for vertical section padding
 */
export const SectionSpacing = {
  /**
   * Compact sections (Stats, smaller sections)
   */
  compact: "py-16",

  /**
   * Standard sections (most sections)
   */
  standard: "py-20",

  /**
   * Spacious sections (CoreValue, Testimonials, featured sections)
   */
  spacious: "py-24",
} as const

/**
 * Standard container padding across all breakpoints
 */
export const ContainerPadding = "px-4 md:px-6 lg:px-8"

/**
 * Maximum content width for container centering
 */
export const ContainerMaxWidth = {
  narrow: "max-w-5xl",
  standard: "max-w-7xl",
  wide: "max-w-[1400px]",
} as const
