"use client"

import { useState, useEffect } from "react"

export interface ResponsiveScale {
  scale: number
  containerSize: number
  center: number
  centralIconSize: number
  orbitIconSize: number
  reducedMotion: boolean
}

export function useResponsiveScale(): ResponsiveScale {
  const [scale, setScale] = useState(1)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Calculate available space and scale accordingly
      const availableWidth = Math.min(width * 0.9, 680) // Max 90% of viewport, capped at 680px
      const availableHeight = Math.min(height * 0.6, 680) // Max 60% of viewport, capped at 680px
      const maxDimension = Math.min(availableWidth, availableHeight)
      
      let newScale: number
      
      if (width < 640) {
        // Mobile: Scale to fit smaller screens while maintaining visibility
        newScale = Math.max(0.35, maxDimension / 680) // Minimum 0.35x to ensure visibility
      } else if (width < 1024) {
        // Tablet: Moderate scaling with good visibility
        newScale = Math.max(0.6, maxDimension / 680) // Minimum 0.6x for tablet
      } else {
        // Desktop: Full scale up to container limit
        newScale = Math.min(1, maxDimension / 680) // Maximum 1x, scale down if needed
      }
      
      setScale(newScale)
      setReducedMotion(prefersReducedMotion)
    }
    
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const containerSize = 680 * scale
  const center = containerSize / 2
  
  // Central icon sizes: 60px base, with minimum for visibility
  const centralIconSize = Math.max(24, Math.min(60, 60 * scale)) // Min 24px, max 60px
  
  // Orbiting icon sizes: 20px base, with minimum for touch
  const orbitIconSize = Math.max(16, Math.min(20, 20 * scale)) // Min 16px, max 20px

  return {
    scale,
    containerSize,
    center,
    centralIconSize,
    orbitIconSize,
    reducedMotion
  }
}