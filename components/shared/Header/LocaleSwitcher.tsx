"use client"

import { cn } from "@/lib/utils"
import type { LocaleSwitcherProps, LocalePillStyles } from "./types"

export function LocaleSwitcher({
  currentLocale,
  onLocaleToggle,
  className,
}: LocaleSwitcherProps) {
  const isGreek = currentLocale === "el"
  const otherLocale = isGreek ? "en" : "el"

  const localePillStyles: LocalePillStyles = {
    container: cn(
      "flex items-center gap-1 rounded-full border backdrop-blur-sm px-1 py-1 shadow-lg",
      "bg-background/80 border-border"
    ),
    buttonActive: cn(
      "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
    ),
    divider: cn(
      "w-px h-4",
      "bg-border"
    ),
  }

  const handleLocaleClick = (localeToSet: string) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      // Only toggle if clicking the inactive locale
      if (currentLocale !== localeToSet) {
        onLocaleToggle()
      }
    }
  }

  return (
    <div className={cn(localePillStyles.container, className)} role="group" aria-label="Language selector">
      <button
        type="button"
        onClick={handleLocaleClick("el")}
        aria-label="Switch to Greek"
        aria-pressed={isGreek}
        className={cn(
          localePillStyles.buttonActive,
          isGreek
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span className="text-xs font-ubuntu" style={{ letterSpacing: "0.16px", lineHeight: "20px", fontWeight: 500 }}>
          EL
        </span>
      </button>

      <button
        type="button"
        onClick={handleLocaleClick("en")}
        aria-label="Switch to English"
        aria-pressed={!isGreek}
        className={cn(
          localePillStyles.buttonActive,
          !isGreek
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span className="text-xs font-ubuntu" style={{ letterSpacing: "0.16px", lineHeight: "20px", fontWeight: 500 }}>
          EN
        </span>
      </button>
    </div>
  )
}
