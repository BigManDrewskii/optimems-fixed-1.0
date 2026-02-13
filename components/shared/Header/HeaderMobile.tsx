"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export interface HeaderMobileProps {
  getStartedLabel: string
  onMenuOpen: () => void
  className?: string
}

export function HeaderMobile({
  getStartedLabel,
  onMenuOpen,
  className,
}: HeaderMobileProps) {
  return (
    <div className={cn("lg:hidden flex items-center gap-3 py-3", className)}>
      <Button asChild variant="primary" size="sm">
        <Link href="/signup">{getStartedLabel}</Link>
      </Button>

      <button
        type="button"
        onClick={onMenuOpen}
        className={cn(
          "w-10 h-10 rounded-[10.4px] flex items-center justify-center",
          "bg-background/80 border border-border",
          "shadow-lg"
        )}
        aria-label="Open menu"
      >
        <div className="w-[18px] flex flex-col gap-1">
          <span className="w-full h-[2px] rounded-full bg-foreground" />
          <span className="w-full h-[2px] rounded-full bg-foreground" />
          <span className="w-full h-[2px] rounded-full bg-foreground" />
        </div>
      </button>
    </div>
  )
}
