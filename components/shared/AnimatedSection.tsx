"use client"

import { useRef, useState, useEffect, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn'
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  as?: 'section' | 'div'
}

export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  as = 'section',
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && element) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: amount,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once, amount])

  const style = isVisible
    ? ({
        opacity: 1,
        transform: animation === 'fadeInUp' 
          ? 'translateY(0)' 
          : animation === 'scaleIn' 
            ? 'scale(1)' 
            : undefined,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      } as const)
    : ({
        opacity: 0,
        transform: animation === 'fadeInUp' 
          ? 'translateY(20px)' 
          : animation === 'scaleIn' 
            ? 'scale(0.95)' 
            : undefined,
      } as const)

  if (as === 'section') {
    return (
      <section ref={containerRef} className={cn(className)} style={style}>
        {children}
      </section>
    )
  }

  return (
    <div ref={containerRef} className={cn(className)} style={style}>
      {children}
    </div>
  )
}
