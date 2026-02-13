"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LocaleSwitcher } from "./LocaleSwitcher"
import { ThemeToggle } from "./ThemeToggle"
import { Link } from "@/i18n/navigation"
import type { LocaleSwitcherProps, ThemeToggleProps } from "./types"

export interface HeaderDesktopProps {
  currentLocale: string
  onLocaleToggle: () => void
  signInLabel: string
  getStartedLabel: string
  className?: string
}

export function HeaderDesktop({
  currentLocale,
  onLocaleToggle,
  signInLabel,
  getStartedLabel,
  className,
}: HeaderDesktopProps) {
  return (
    <div className={cn("hidden lg:flex items-center gap-3", className)}>
      {/* Locale Switcher + Theme Toggle */}
      <div className="flex items-center gap-3">
        <LocaleSwitcher
          currentLocale={currentLocale}
          onLocaleToggle={onLocaleToggle}
        />

        <div className={cn("w-px h-4", "bg-border")} />

        <ThemeToggle />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 text-xs font-ubuntu text-primary">
        <Link
          href="/login"
          className="h-8 rounded-md flex items-center justify-center px-4 transition-colors hover:bg-secondary/10 hover:text-secondary text-foreground"
          aria-label="Sign in to your account"
        >
          {signInLabel}
        </Link>
        <Button asChild variant="primary" size="sm">
          <Link href="/signup" aria-label="Create a new account">{getStartedLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
