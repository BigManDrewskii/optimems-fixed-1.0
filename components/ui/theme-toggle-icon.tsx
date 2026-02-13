"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { ClientOnly } from "@/components/shared/ClientOnly"

interface ThemeToggleIconProps extends React.ComponentProps<"button"> {
  isDark?: boolean
}

function ThemeTogglePlaceholder({ className }: { className?: string }) {
  const t = useTranslations()
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center",
        "h-9 w-9 rounded-md",
        "bg-transparent",
        "outline-none",
        className
      )}
      aria-label={t("aria.toggleTheme")}
      disabled
    >
      <span className="sr-only">{t("aria.toggleThemeSrOnly")}</span>
    </button>
  )
}

export function ThemeToggleIcon({ className, isDark, ...props }: ThemeToggleIconProps) {
  const t = useTranslations()

  return (
    <ClientOnly fallback={<ThemeTogglePlaceholder className={className} />}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center",
          "h-9 w-9 rounded-md",
          "bg-transparent",
          "text-foreground",
          "transition-colors duration-200",
          "hover:bg-accent/30",
          "outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          className
        )}
        aria-label={isDark ? t("aria.switchToLightTheme") : t("aria.switchToDarkTheme")}
        {...props}
      >
        <Sun
          className={cn(
            "h-[18px] w-[18px] transition-all duration-300",
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}
        />
        <Moon
          className={cn(
            "absolute h-[18px] w-[18px] transition-all duration-300",
            isDark ? "opacity-0 scale-75" : "opacity-100 scale-100"
          )}
        />
      </button>
    </ClientOnly>
  )
}
