"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface MarqueeItem {
  src: string
  alt: string
  href: string
  name: string
  lightThemeSrc?: string
}

export interface MarqueeSectionProps {
  items: MarqueeItem[]
  duration?: number
  className?: string
  pauseOnHover?: boolean
  speed?: "slow" | "medium" | "fast"
}

function ThemeAwareImage({ item }: { item: MarqueeItem }) {
  return (
    <>
      {item.lightThemeSrc && (
        <img
          src={item.lightThemeSrc}
          alt={item.alt}
          className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 hidden light:block"
        />
      )}
      <img
        src={item.src}
        alt={item.alt}
        className={`w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 ${item.lightThemeSrc ? 'light:hidden' : ''}`}
      />
    </>
  )
}

export function MarqueeSection({
  items,
  duration = 20,
  className,
  pauseOnHover = true,
  speed = "medium",
}: MarqueeSectionProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<MarqueeItem[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items])
  }, [items])

  const speedMultiplier = {
    slow: 1.5,
    medium: 1,
    fast: 0.5,
  }

  const finalDuration = duration * speedMultiplier[speed]

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      {prefersReducedMotion ? (
        <div className="flex gap-12 items-center justify-center flex-wrap py-4">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex-shrink-0"
              style={{ width: "150px" }}
              aria-label={item.name}
            >
              <ThemeAwareImage item={item} />
            </a>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -((items.length * 300) + (items.length - 1) * 48)],
          }}
          transition={{
            duration: finalDuration,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
        >
          {duplicatedItems.map((item, index) => (
            <a
              key={`${item.name}-${index}`}
              href={item.href}
              className="flex-shrink-0"
              style={{ width: "150px" }}
              aria-label={item.name}
            >
              <ThemeAwareImage item={item} />
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
