import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default: "bg-background/90 dark:bg-background/90 border border-border/30 shadow-lg",
        ghost: "bg-transparent hover:bg-accent/30",
        outline: "bg-transparent border border-border/30 shadow-sm hover:bg-accent/30",
      },
      size: {
        sm: "h-8 w-8 rounded-md",
        md: "h-9 w-9 rounded-md",
        lg: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean
  /** Accessible label required when button contains only an icon */
  'aria-label'?: string
  /** ID of element that labels this button (alternative to aria-label) */
  'aria-labelledby'?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, children, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...props }, ref) => {
    // Validate that icon-only buttons have accessible label
    const hasAccessibleLabel = ariaLabel || ariaLabelledBy
    const hasOnlyIcon = React.Children.toArray(children).every(
      (child) => typeof child === 'string' ? child.trim() === '' : true
    )

    if (hasOnlyIcon && !hasAccessibleLabel && typeof window !== 'undefined') {
      console.warn('IconButton used without aria-label or aria-labelledby. Add an accessible label for icon-only buttons.')
    }

    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        {...props}
      >
        {children}
      </button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton, iconButtonVariants }
