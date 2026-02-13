"use client"

import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import type { ThemeToggleStyles } from "./types"
import { ClientOnly } from "@/components/shared/ClientOnly"

function ThemeTogglePlaceholder({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full",
        "bg-muted",
        className
      )}
      aria-label="Switch theme"
      disabled
    />
  )
}

export function ThemeToggle({
  ariaLabel = "Switch theme",
  className,
}: {
  ariaLabel?: string
  className?: string
}) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <ClientOnly fallback={<ThemeTogglePlaceholder className={className} />}>
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full",
          "bg-muted",
          className
        )}
        aria-label={ariaLabel}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-opacity duration-300 light:opacity-0 dark:opacity-100"
          aria-hidden="true"
        >
          <path
            d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C13.73 3 15.35 3.53 16.71 4.47C15.5 6.11 14.73 8.19 14.73 10.5C14.73 12.81 15.5 14.89 16.71 16.53C15.35 17.47 13.73 18 12 18C16.97 18 21 13.97 21 12Z"
            fill="currentColor"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute transition-opacity duration-300 light:opacity-100 dark:opacity-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="6" fill="currentColor" />
          <path
            d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </ClientOnly>
  )
}
