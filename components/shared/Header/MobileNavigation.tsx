"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { LocaleSwitcher } from "./LocaleSwitcher"
import { ThemeToggle } from "./ThemeToggle"
import type { MobileNavigationProps, LocaleSwitcherProps, ThemeToggleProps } from "./types"
import { useEffect } from "react"

export interface MobileNavigationWithControlsProps extends MobileNavigationProps, LocaleSwitcherProps {}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  signInLabel,
  getStartedLabel,
  menuLabel,
  currentLocale,
  onLocaleToggle,
}: MobileNavigationWithControlsProps) {
  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close menu"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l border-border/30 shadow-2xl z-[9999]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30">
              <span className="text-sm font-medium text-muted-foreground">{menuLabel}</span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-foreground" aria-hidden="true" />
              </button>
            </div>

            {/* Locale & Theme Controls */}
            <div className="p-4 border-b border-border/30">
              <div className="flex items-center gap-3">
                <LocaleSwitcher
                  currentLocale={currentLocale}
                  onLocaleToggle={onLocaleToggle}
                />

                <div className={cn("w-px h-4", "bg-border")} />

                <ThemeToggle />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-1">
              {items.map((item) => {
                // If item has a dropdown, render as accordion
                if (item.dropdown) {
                  return (
                    <div key={item.href} className="border-b border-border/10">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors hover:bg-secondary/10 hover:text-secondary/80 text-foreground"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-foreground" aria-hidden="true" />
                      </Link>
                      <div className="pl-4 pb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={onClose}
                            className="flex items-center px-4 py-2 text-sm text-muted-foreground rounded-lg transition-colors hover:bg-secondary/10 hover:text-secondary"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                // Otherwise render as regular link
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors hover:bg-secondary/10 hover:text-secondary/80 text-foreground"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-foreground" aria-hidden="true" />
                  </Link>
                )
              })}
            </nav>

            {/* Auth Buttons */}
            <div className="p-4 border-t border-border/30 space-y-3">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-secondary/80 text-secondary"
              >
                {signInLabel}
              </Link>
              <Link
                href="/signup"
                onClick={onClose}
                className="flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {getStartedLabel}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
