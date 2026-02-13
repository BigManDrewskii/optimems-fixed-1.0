"use client"

import { forwardRef, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link } from "@/i18n/navigation"
import type { NavigationProps, NavItem } from "./types"

export const Navigation = forwardRef<HTMLElement, NavigationProps>(({
  items,
  openDropdown,
  onDropdownToggle,
  onDropdownClose,
  className,
  style,
}, ref) => {
  // Create refs for each dropdown based on item label
  const menuRefs = useRef<Record<string, HTMLDivElement>>({})
  const triggerRefs = useRef<Record<string, HTMLButtonElement>>({})

  // Focus trap for dropdowns
  useEffect(() => {
    if (openDropdown && menuRefs.current[openDropdown]) {
      const focusableElements = menuRefs.current[openDropdown].querySelectorAll(
        'a[href], button:not([disabled])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      firstElement?.focus()
    }
  }, [openDropdown])

  // Handle keyboard navigation within dropdowns
  const handleMenuKeyDown = (event: React.KeyboardEvent, itemLabel: string) => {
    const menuRef = menuRefs.current[itemLabel]
    const triggerRef = triggerRefs.current[itemLabel]

    if (event.key === 'Escape') {
      event.preventDefault()
      onDropdownClose()
      triggerRef?.focus()
    } else if (event.key === 'Tab') {
      const focusableElements = menuRef?.querySelectorAll(
        'a[href], button:not([disabled])'
      )
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          triggerRef?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          onDropdownClose()
        }
      }
    }
  }

  const navLinkClassName = cn(
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
    "hover:bg-secondary/10 hover:text-secondary text-foreground",
    "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
  )

  const navLinkStyle = {
    letterSpacing: "0.16px",
    lineHeight: "20px",
    fontWeight: 500,
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, itemLabel: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onDropdownToggle(itemLabel)
    } else if (event.key === 'Escape' && openDropdown === itemLabel) {
      event.preventDefault()
      onDropdownClose()
    } else if (event.key === 'ArrowDown' && openDropdown === itemLabel) {
      event.preventDefault()
      const firstLink = menuRefs.current[itemLabel]?.querySelector('a[href]') as HTMLElement
      firstLink?.focus()
    }
  }

  return (
    <nav
      ref={ref}
      className={cn("hidden xl:flex items-center gap-2 px-6", className)}
      style={style}
      aria-label="Main navigation"
    >
      {items.map((item) => {
        if (item.dropdown) {
          const isOpen = openDropdown === item.label
          return (
            <div key={item.label} className="relative">
              <button
                ref={(el) => { if (el) triggerRefs.current[item.label] = el }}
                type="button"
                onClick={() => onDropdownToggle(item.label)}
                onKeyDown={(e) => handleKeyDown(e, item.label)}
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1",
                  "hover:bg-secondary/10 hover:text-secondary text-foreground",
                  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                )}
                style={navLinkStyle}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isOpen ? "rotate-180" : ""
                  )}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    ref={(el) => { if (el) menuRefs.current[item.label] = el }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-border/50 bg-background/95 backdrop-blur-md shadow-lg overflow-hidden z-50"
                    role="menu"
                    aria-label={`${item.label} menu`}
                    onKeyDown={(e) => handleMenuKeyDown(e, item.label)}
                  >
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                          onClick={onDropdownClose}
                          role="menuitem"
                          tabIndex={0}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={navLinkClassName}
            style={navLinkStyle}
            onClick={onDropdownClose}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
})

Navigation.displayName = "Navigation"
