/**
 * Typography size constants for consistent heading scales
 */
export const HeadingSizes = {
  /**
   * Hero/H1: Largest heading for main page titles
   */
  h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",

  /**
   * H2: Section headings
   */
  h2: "text-2xl md:text-4xl lg:text-5xl",

  /**
   * H3: Subsection headings
   */
  h3: "text-xl md:text-2xl lg:text-3xl",

  /**
   * H4: Card/component titles
   */
  h4: "text-lg md:text-xl lg:text-2xl",
} as const

/**
 * Line height and tracking constants
 */
export const HeadingLineHeight = {
  tight: "leading-tight tracking-tight",
  normal: "leading-snug",
  relaxed: "leading-relaxed",
} as const

/**
 * Body text sizes
 */
export const BodySizes = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const

/**
 * Label/eyebrow text styles
 */
export const LabelStyles = {
  default: "text-xs md:text-sm uppercase tracking-widest",
  compact: "text-xs uppercase tracking-wider",
} as const
