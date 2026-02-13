"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from "next-intl"

interface HamburgerMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean
  onClick?: () => void
}

export function HamburgerMenu({
  isOpen,
  className,
  onClick,
  ...props
}: HamburgerMenuProps) {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 w-9 rounded-[10.4px]",
        "bg-background/90",
        "border border-border/30",
        "shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:bg-accent/30",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      aria-label={isOpen ? t("aria.closeMenu") : t("aria.openMenu")}
      {...props}
    >
      <div className="w-[18px] flex flex-col gap-1">
        <span className="w-full h-[2px] rounded-[33554400px] bg-foreground" />
        <span className="w-full h-[2px] rounded-[33554400px] bg-foreground" />
        <span className="w-full h-[2px] rounded-[33554400px] bg-foreground" />
      </div>
    </button>
  )
}
