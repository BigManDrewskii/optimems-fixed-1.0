/**
 * Centralized asset manifest for all theme-aware and static assets.
 * Provides single source of truth for icons, images, and other media.
 */

/**
 * Theme-aware asset interface
 */
export interface ThemeAsset {
  dark: string
  light: string
}

/**
 * Product logo assets with light/dark variants
 */
export const productLogos: Record<string, ThemeAsset> = {
  solarControl: {
    dark: '/images/logos/optimems-solar-control.svg',
    light: '/images/logos/optimems-solar-control-light.svg',
  },
  mind: {
    dark: '/images/logos/optimems-mind.svg',
    light: '/images/logos/optimems-mind-light.svg',
  },
}

/**
 * Helper function to get product logo asset
 * @param productName - Product name (e.g., 'solarControl', 'mind')
 * @returns ThemeAsset or undefined if not found
 */
export function getProductLogo(productName: string): ThemeAsset | undefined {
  return productLogos[productName]
}

/**
 * Workflow icon assets (from icons 01-04)
 * These have separate dark/light SVG files
 */
export const workflowIcons: Record<number, ThemeAsset> = {
  1: {
    dark: '/images/sections/workflow-icon-01-dark.svg',
    light: '/images/sections/workflow-icon-01-light.svg',
  },
  2: {
    dark: '/images/sections/workflow-icon-02-dark.svg',
    light: '/images/sections/workflow-icon-02-light.svg',
  },
  3: {
    dark: '/images/sections/workflow-icon-03-dark.svg',
    light: '/images/sections/workflow-icon-03-light.svg',
  },
  4: {
    dark: '/images/sections/workflow-icon-04-dark.svg',
    light: '/images/sections/workflow-icon-04-light.svg',
  },
}

/**
 * Helper function to get workflow icon asset
 * @param stepNumber - Workflow step number (1-4)
 * @returns ThemeAsset or undefined if not found
 */
export function getWorkflowIcon(stepNumber: number): ThemeAsset | undefined {
  return workflowIcons[stepNumber]
}

/**
 * Static assets that don't require theme switching
 */
export const staticAssets = {
  logo: {
    default: '/images/logos/optimems-logo.svg',
  },
  gridPatterns: {
    dark: '/images/sections/grid-pattern-dark.png',
    light: '/images/sections/grid-pattern-light.png',
  },
} as const
