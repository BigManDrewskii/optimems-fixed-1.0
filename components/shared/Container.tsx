"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}

export function Container({
  children,
  className,
  size = 'xl',
  padding = true,
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'container mx-auto',
        padding && 'px-4',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
