"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ClientOnly } from "@/components/shared/ClientOnly"

const PATTERNS = {
  'primary-tint': { bg: 'oklch(from var(--primary) l c h / 0.1)', stripe: 'oklch(from var(--primary) l c h / 0.2)' },
  'secondary-tint': { bg: 'oklch(from var(--secondary) l c h / 0.1)', stripe: 'oklch(from var(--secondary) l c h / 0.2)' },
}

export interface BaseCardProps {
  children: ReactNode
  className?: string
  variant?: 'standard' | 'cta' | 'patterned'
  rounded?: 'xl' | '2xl' | '3xl'
  hover?: boolean
  scale?: boolean
  shadow?: boolean
  fullHeight?: boolean
  overflow?: boolean
  padding?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  as?: 'div' | 'a' | 'button'
  href?: string
  'aria-label'?: string
  colorScheme?: 'primary' | 'secondary'
  pattern?: 'default' | 'primary-tint' | 'secondary-tint' | 'custom' | 'image'
  patternColors?: { bg: string; stripe: string }
  imageUrl?: string
  outerPadding?: 'md' | 'lg' | 'xl'
  innerPadding?: 'md' | 'lg' | 'xl'
  [key: string]: any
}

export function BaseCard({
  children,
  className,
  variant = 'standard',
  rounded = 'xl',
  hover = true,
  scale = false,
  shadow = true,
  fullHeight = false,
  overflow = false,
  padding,
  onClick,
  onMouseEnter,
  onMouseLeave,
  as = 'div',
  href,
  'aria-label': ariaLabel,
  colorScheme = 'primary',
  pattern = 'default',
  patternColors,
  imageUrl,
  outerPadding = 'lg',
  innerPadding = 'lg',
  ...props
}: BaseCardProps) {
  const roundedClasses = {
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const outerPaddingClasses = {
    md: 'p-8 md:p-12',
    lg: 'p-8 md:p-12 lg:p-[64px]',
    xl: 'p-12 md:p-16 lg:p-[80px]',
  }

  const innerPaddingClasses = {
    md: 'px-6 py-8 md:px-8 md:py-12',
    lg: 'px-6 py-8 md:px-8 md:py-12 lg:px-10 lg:py-[64px]',
    xl: 'px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-[80px]',
  }

  if (variant === 'patterned') {
    return (
      <ClientOnly
        fallback={
          <div className={cn(
            "w-full",
            fullHeight && "h-full",
            outerPaddingClasses[outerPadding]
          )} />
        }
      >
        <BaseCardPatterned
          pattern={pattern}
          patternColors={patternColors}
          imageUrl={imageUrl}
          innerPadding={innerPadding}
          outerPadding={outerPadding}
          rounded={rounded}
          fullHeight={fullHeight}
          overflow={overflow}
          className={className}
        >
          {children}
        </BaseCardPatterned>
      </ClientOnly>
    )
  }

  if (variant === 'cta') {
    const ctaVariantClasses = {
      primary: 'bg-primary border-primary/40 text-primary-foreground',
      secondary: 'bg-secondary border-secondary/40 text-secondary-foreground',
    }

    const baseClasses = cn(
      ctaVariantClasses[colorScheme],
      'border',
      roundedClasses[rounded],
      hover && scale && 'hover:scale-[1.02]',
      hover && shadow && 'hover:shadow-lg',
      hover && 'transition-all duration-300',
      padding && paddingClasses[padding],
      fullHeight && "h-full",
      overflow && "overflow-hidden",
      className
    )

    return renderElement(baseClasses)
  }

  const standardBaseClasses = cn(
    'bg-card border border-border',
    roundedClasses[rounded],
    hover && 'hover:border-secondary',
    hover && 'transition-all duration-300',
    !hover && 'border-border/30',
    fullHeight && "h-full",
    overflow && "overflow-hidden",
    padding && paddingClasses[padding],
    className
  )

  return renderElement(standardBaseClasses)

  function renderElement(baseClasses: string) {
    if (as === 'a') {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        >
          {children}
        </a>
      )
    }

    if (as === 'button') {
      return (
        <button
          type="button"
          className={baseClasses}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </button>
      )
    }

    if (onClick || onMouseEnter || onMouseLeave) {
      return (
        <button
          type="button"
          className={cn(baseClasses, "w-full text-left cursor-pointer")}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-label={ariaLabel}
          {...props}
        >
          {children}
        </button>
      )
    }

    return (
      <div
        className={baseClasses}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </div>
    )
  }
}

interface PatternedProps {
  pattern?: 'default' | 'primary-tint' | 'secondary-tint' | 'custom' | 'image'
  patternColors?: { bg: string; stripe: string }
  imageUrl?: string
  innerPadding?: 'md' | 'lg' | 'xl'
  outerPadding?: 'md' | 'lg' | 'xl'
  rounded?: 'xl' | '2xl' | '3xl'
  fullHeight?: boolean
  overflow?: boolean
  className?: string
  children: ReactNode
}

function BaseCardPatterned({
  pattern = 'default',
  patternColors,
  imageUrl,
  innerPadding = 'lg',
  outerPadding = 'lg',
  rounded = 'xl',
  fullHeight = false,
  overflow = false,
  className,
  children,
}: PatternedProps) {
  const outerPaddingClasses: Record<string, string> = {
    md: 'p-8 md:p-12',
    lg: 'p-8 md:p-12 lg:p-[64px]',
    xl: 'p-12 md:p-16 lg:p-[80px]',
  }

  const innerPaddingClasses: Record<string, string> = {
    md: 'px-6 py-8 md:px-8 md:py-12',
    lg: 'px-6 py-8 md:px-8 md:py-12 lg:px-10 lg:py-[64px]',
    xl: 'px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-[80px]',
  }

  const roundedClasses: Record<string, string> = {
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }

  const getDefaultPattern = () => {
    return { bg: 'var(--pattern-bg)', stripe: 'var(--pattern-stripe)' }
  }

  let colors: { bg: string; stripe: string }
  if (pattern === 'custom' && patternColors) {
    colors = patternColors
  } else if (pattern === 'default') {
    colors = getDefaultPattern()
  } else {
    colors = PATTERNS[pattern as keyof typeof PATTERNS] || getDefaultPattern()
  }

  if (pattern === 'image' && imageUrl) {
    return (
      <div className={cn(
        'relative overflow-hidden border border-border',
        roundedClasses[rounded],
        fullHeight && 'h-full',
        className
      )}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-card/75" />
        <div className={cn('relative z-10', innerPaddingClasses[innerPadding])}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      'rounded-3xl border border-border',
      outerPaddingClasses[outerPadding]
    )} style={{
      backgroundColor: colors.bg,
      backgroundSize: '9px 9px',
      backgroundImage: `repeating-linear-gradient(45deg, ${colors.stripe} 0, ${colors.stripe} 0.9px, ${colors.bg} 0, ${colors.bg} 50%)`
    }}>
      <div className={cn(
        'rounded-3xl border border-border bg-card',
        innerPaddingClasses[innerPadding],
        fullHeight && 'h-full',
        overflow && 'overflow-hidden',
        className
      )}>
        {children}
      </div>
    </div>
  )
}
