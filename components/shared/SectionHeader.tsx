"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { HeadingSizes, HeadingLineHeight, LabelStyles } from "@/lib/constants/typography"

export interface SectionHeaderProps {
  label?: string
  title: string | ReactNode
  description?: string
  align?: 'center' | 'left' | 'right'
  size?: 'compact' | 'standard' | 'large'
  className?: string
  labelClassName?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  size = 'standard',
  className,
  labelClassName,
}: SectionHeaderProps) {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right',
  }

  const sizeClasses = {
    compact: {
      title: "text-2xl md:text-3xl lg:text-4xl",
      description: "text-sm md:text-base",
      spacing: "mb-6 md:mb-10",
    },
    standard: {
      title: HeadingSizes.h2,
      description: "text-base md:text-lg",
      spacing: "mb-8 md:mb-16",
    },
    large: {
      title: "text-3xl md:text-5xl lg:text-6xl",
      description: "text-lg md:text-xl",
      spacing: "mb-10 md:mb-20",
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={cn(currentSize.spacing, alignmentClasses[align], className)}>
      {label && (
        <p className={cn(LabelStyles.default, "mb-2 md:mb-3", labelClassName || "text-primary")}>
          {label}
        </p>
      )}
      <h2 className={cn(currentSize.title, "font-bold", HeadingLineHeight.tight, "text-foreground mb-3 md:mb-4")}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          currentSize.description,
          "text-muted-foreground leading-relaxed",
          align === 'center' && "max-w-2xl mx-auto",
          align !== 'center' && "max-w-full"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
