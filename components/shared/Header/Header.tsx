"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname, Link } from "@/i18n/navigation"
import { OptimemsLogo } from "../Logo"
import { Navigation } from "./Navigation"
import { HeaderDesktop } from "./HeaderDesktop"
import { HeaderMobile } from "./HeaderMobile"
import { MobileNavigation } from "./MobileNavigation"
import type { NavItem, HeaderProps } from "./types"

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('common')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLocaleToggle = () => {
    const newLocale = locale === "el" ? "en" : "el"
    router.replace(pathname, { locale: newLocale })
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setOpenDropdown(null)
  }

  const primaryNavItems: NavItem[] = [
    {
      label: t("navigation.products"),
      href: "#",
      dropdown: [
        { label: t("navigation.solarControl"), href: "/products-services/solar-control" },
        { label: t("navigation.mind"), href: "/products-services/mind" },
        { label: t("navigation.consult"), href: "/products-services/consult" },
      ],
    },
    {
      label: t("navigation.company"),
      href: "#",
      dropdown: [
        { label: t("navigation.aboutUs"), href: "/about-us" },
        { label: t("navigation.partnership"), href: "/partnership" },
        { label: t("navigation.rndProjects"), href: "/rnd-projects" },
        { label: t("navigation.contactAndSupport"), href: "/contact" },
      ],
    },
    {
      label: t("navigation.resources"),
      href: "#",
      dropdown: [
        { label: t("navigation.compatibilityLists"), href: "/compatibility-lists" },
        { label: t("navigation.warranties"), href: "/warranties" },
      ],
    },
    { label: t("navigation.blog"), href: "/blog" },
  ]

  const signInLabel = t("navigation.signIn")
  const getStartedLabel = t("navigation.getStarted")
  const menuLabel = t("navigation.menu")

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 mx-auto rounded-2xl backdrop-blur-md border border-border/30 max-w-[1400px]",
          "flex items-center justify-between px-6 py-1",
          "bg-background/90 dark:bg-background/90",
          isScrolled ? "bg-background/95 dark:bg-background/95" : ""
        )}
        style={{
          backgroundImage: "url('/images/sections/grid-pattern-light.png')",
          backgroundRepeat: "repeat",
        }}
        role="banner"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <OptimemsLogo className="w-10 h-10 flex-shrink-0" />
          <OptimemsLogo variant="text" className="w-40 h-16 hidden xl:block flex-shrink-0" />
        </div>
      </header>

      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 mx-auto rounded-2xl backdrop-blur-md border-0 border-b-2 border-primary max-w-[1400px]",
          "flex items-center justify-between px-6 py-1",
          "bg-background/90 dark:bg-background/90",
          isScrolled ? "bg-background/95 dark:bg-background/95" : ""
        )}
        style={{
          backgroundImage: "url('/images/sections/grid-pattern-dark.png')",
          backgroundRepeat: "repeat",
        }}
        role="banner"
      >
        <Link href="/" className="flex items-center gap-3 cursor-pointer" aria-label="Optimems Home">
          <OptimemsLogo className="w-10 h-10 flex-shrink-0" />
          <OptimemsLogo variant="text" className="w-40 h-16 hidden xl:block flex-shrink-0" />
        </Link>

        <Navigation
          items={primaryNavItems}
          openDropdown={openDropdown}
          onDropdownToggle={toggleDropdown}
          onDropdownClose={closeDropdowns}
          style={{ flex: 1 }}
          ref={dropdownRef}
        />

        <HeaderDesktop
          currentLocale={locale}
          onLocaleToggle={handleLocaleToggle}
          signInLabel={signInLabel}
          getStartedLabel={getStartedLabel}
        />

        <HeaderMobile
          getStartedLabel={getStartedLabel}
          onMenuOpen={() => setIsMobileMenuOpen(true)}
        />
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={primaryNavItems}
        signInLabel={signInLabel}
        getStartedLabel={getStartedLabel}
        menuLabel={menuLabel}
        currentLocale={locale}
        onLocaleToggle={handleLocaleToggle}
      />
    </>
  )
}
