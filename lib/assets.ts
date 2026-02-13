/**
 * Centralized asset loading utilities.
 * Provides theme-aware asset loading and consolidates asset access patterns.
 */

import { videos, getVideoSrc as getDataVideoSrc, isPriorityVideo } from "@/data/videos"

// Re-export video types and functions
export type { VideoSource, VideoAsset } from "@/data/videos"
export { videos, getVideoSrc as getDataVideoSrc, isPriorityVideo } from "@/data/videos"

/**
 * Theme-aware asset interface
 */
export interface ThemeAsset {
  dark: string
  light: string
}

/**
 * Get the appropriate asset path based on current theme
 *
 * @param asset - ThemeAsset object with dark and light variants
 * @param isLight - Whether current theme is light (defaults to false/dark)
 * @returns The asset path for the current theme
 *
 * @example
 * const iconAsset = { dark: '/icon-dark.svg', light: '/icon-light.svg' }
 * const src = getThemeAsset(iconAsset, resolvedTheme === 'light')
 */
export function getThemeAsset(asset: ThemeAsset, isLight: boolean = false): string {
  return isLight ? asset.light : asset.dark
}

/**
 * Get video source by key (wrapper around data/videos function for convenience)
 *
 * @param key - Video key from videos manifest
 * @param isLight - Whether current theme is light (for theme-aware videos)
 * @param isMobile - Whether to use mobile-optimized video
 * @returns VideoSource object or null if not found
 */
export function getVideoSrc(key: string, isLight: boolean = false, isMobile: boolean = false) {
  return getDataVideoSrc(key, isLight, isMobile)
}

/**
 * Get theme-aware icon source
 * Helper function commonly used with icon maps
 *
 * @param iconMap - Record mapping names to ThemeAsset objects
 * @param name - Icon name to look up
 * @param isLight - Whether current theme is light
 * @returns Icon path or undefined if not found
 *
 * @example
 * const logoMap = {
 *   'solar': { dark: '/solar.svg', light: '/solar-light.svg' }
 * }
 * const src = getIconSrc(logoMap, 'solar', resolvedTheme === 'light')
 */
export function getIconSrc(
  iconMap: Record<string, ThemeAsset>,
  name: string,
  isLight: boolean = false
): string | undefined {
  const asset = iconMap[name]
  return asset ? getThemeAsset(asset, isLight) : undefined
}
