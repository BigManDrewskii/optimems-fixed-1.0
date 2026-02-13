"use client"

import { useState, useEffect, useRef } from "react"

// All color CSS variables from the design system
export const COLOR_TOKENS = [
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--popover",
  "--popover-foreground",
  "--muted",
  "--muted-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--accent",
  "--accent-foreground",
  "--destructive",
  "--destructive-foreground",
  "--border",
  "--input",
  "--ring",
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--sidebar",
  "--sidebar-foreground",
  "--sidebar-primary",
  "--sidebar-primary-foreground",
  "--sidebar-accent",
  "--sidebar-accent-foreground",
  "--sidebar-border",
  "--sidebar-ring",
] as const

export type ColorToken = typeof COLOR_TOKENS[number]

/**
 * Extracts CSS custom properties for a specific theme by creating a temporary
 * DOM element with that theme class and reading computed styles.
 */
export function extractThemeColors(theme: "light" | "dark"): Record<ColorToken, string> {
  // Create temporary div with theme class
  const tempDiv = document.createElement("div")
  tempDiv.className = theme
  tempDiv.style.position = "absolute"
  tempDiv.style.visibility = "hidden"
  tempDiv.style.pointerEvents = "none"
  tempDiv.style.opacity = "0"

  document.body.appendChild(tempDiv)

  // Read computed styles
  const computed = getComputedStyle(tempDiv)
  const colors = {} as Record<ColorToken, string>

  // Extract all color variables
  COLOR_TOKENS.forEach((token) => {
    const value = computed.getPropertyValue(token).trim()
    colors[token] = value
  })

  // Clean up
  document.body.removeChild(tempDiv)

  return colors
}

/**
 * React hook that extracts color tokens for both light and dark themes.
 * Returns null until component is mounted (client-side only).
 */
export function useColorTokens() {
  const [mounted, setMounted] = useState(false)
  const [colors, setColors] = useState<{
    light: Record<ColorToken, string>
    dark: Record<ColorToken, string>
  } | null>(null)

  useEffect(() => {
    setMounted(true)

    // Extract colors for both themes
    try {
      const lightColors = extractThemeColors("light")
      const darkColors = extractThemeColors("dark")

      setColors({
        light: lightColors,
        dark: darkColors,
      })
    } catch (error) {
      console.error("Failed to extract color tokens:", error)
    }
  }, [])

  return {
    colors,
    mounted,
  }
}
