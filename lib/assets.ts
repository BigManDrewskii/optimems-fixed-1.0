/**
 * Centralized asset loading utilities.
 * Provides theme-aware asset loading and consolidates asset access patterns.
 */

import { videos, getVideoSrc, isPriorityVideo } from "@/data/videos"

// Re-export video types and functions
export type { VideoSource, VideoAsset } from "@/data/videos"
export { videos, getVideoSrc, isPriorityVideo }

/**
 * Theme-aware asset interface
 */
export interface ThemeAsset {
  dark: string
  light: string
}

/**
 * Get the appropriate asset path based on current theme
 */
export function getThemeAsset(asset: ThemeAsset, isLight: boolean = false): string {
  return isLight ? asset.light : asset.dark
}

/**
 * Get theme-aware icon source
 */
export function getIconSrc(
  iconMap: Record<string, ThemeAsset>,
  name: string,
  isLight: boolean = false
): string | undefined {
  const asset = iconMap[name]
  return asset ? getThemeAsset(asset, isLight) : undefined
}
