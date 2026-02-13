"use client"

import { ReactNode } from "react"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * CustomPrimaryButton - A styled navigation link component
 *
 * IMPORTANT: This component uses an <a> tag and is intended for navigation purposes only.
 * Use this for links to other pages (e.g., /demo, /contact).
 * For non-navigation actions, use a standard <button> element instead.
 *
 * Features:
 * - Custom pill-shaped design with animated arrow
 * - Responsive sizing (52px on mobile, 56px on tablet, 60px on desktop)
 * - Hover effects with color transitions
 * - Animated globe icon (spins slowly, respects prefers-reduced-motion)
 */
export interface CustomPrimaryButtonProps {
  href: string
  label: string
  icon?: ReactNode
  className?: string
}

export function CustomPrimaryButton({
  href,
  label,
  icon = <Globe className="w-[18px] h-[18px] animate-spin motion-reduce:animate-none" style={{ animationDuration: '3s' }} />,
  className,
}: CustomPrimaryButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group cursor-pointer border border-border bg-card gap-1.5 sm:gap-2",
        "h-[52px] sm:h-[56px] md:h-[60px]",
        "flex items-center p-1.5 sm:p-[10px] rounded-full hover:border-secondary transition-all duration-300",
        className
      )}
    >
      <div className="border border-border bg-primary group-hover:bg-secondary h-full min-h-[36px] sm:min-h-[40px] rounded-full flex items-center justify-center text-primary-foreground transition-colors duration-300">
        <p className="font-medium tracking-tight mr-2.5 sm:mr-3 ml-2.5 sm:ml-3 flex items-center gap-1.5 sm:gap-2 justify-center text-sm sm:text-base">
          {icon}
          {label}
        </p>
      </div>
      <div className="text-muted-foreground group-hover:ml-3 sm:group-hover:ml-4 ease-in-out transition-all size-[20px] sm:size-[24px] flex items-center justify-center rounded-full border-2 border-border flex-shrink-0">
        <svg
          className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] group-hover:rotate-180 ease-in-out transition-all motion-reduce:transition-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  )
}
