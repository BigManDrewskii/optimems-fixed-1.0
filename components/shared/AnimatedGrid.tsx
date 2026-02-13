"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedGridProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4 | 6
  gap?: 'sm' | 'md' | 'lg'
  staggerDelay?: number
  className?: string
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn'
  once?: boolean
  amount?: number
}

export function AnimatedGrid({
  children,
  columns = 3,
  gap = 'lg',
  staggerDelay = 0.1,
  className,
  animation = 'fadeInUp',
  once = true,
  amount = 0.3,
}: AnimatedGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-6 lg:gap-8',
  }

  const animations = {
    fadeInUp: { y: 30, opacity: 0 },
    fadeIn: { opacity: 0 },
    scaleIn: { scale: 0.95, opacity: 0 },
  }

  const animateTo = {
    y: 0,
    opacity: 1,
    scale: 1,
  }

  return (
    <div
      ref={ref}
      className={cn('grid', gridCols[columns], gapClasses[gap], className)}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={animations[animation]}
            animate={isInView ? animateTo : animations[animation]}
            transition={{ duration: 0.5, delay: index * staggerDelay }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </div>
  )
}
