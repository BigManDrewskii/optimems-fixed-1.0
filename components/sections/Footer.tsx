"use client"

import { footer } from "@/data/landing-page"
import { filterFooterSections } from "@/lib/footer-utils"
import { Mail, ChevronDown } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { OptimemsLogo } from "@/components/shared"
import { useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import NextLink from "next/link"

const footerLinks = filterFooterSections([
  { title: "Products", links: footer.links.products },
  { title: "Company", links: footer.links.company },
  { title: "Resources", links: footer.links.resources },
])

function FooterSection({ title, links, isOpen, onToggle }: { title: string; links: { label: string; href: string }[]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/30 sm:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full min-h-[44px] py-3 sm:py-3 sm:mb-3 text-xs font-semibold uppercase tracking-wider text-secondary"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform sm:hidden ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <ul className={`space-y-1.5 sm:space-y-2 ${isOpen ? 'block' : 'hidden sm:block'}`}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-secondary text-xs transition-colors block py-1 sm:py-0.5"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})
  const t = useTranslations('common')
  const locale = useLocale()

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const footerTitleLabels = [
    t("footer.sectionTitles.products"),
    t("footer.sectionTitles.company"),
    t("footer.sectionTitles.resources")
  ]

  const legalLinkLabels = {
    "PrivacyPolicy": t("footer.legalLinks.privacyPolicy"),
    "TermsofService": t("footer.legalLinks.termsOfService"),
    "CookiePolicy": t("footer.legalLinks.cookiePolicy"),
  }

  return (
    <footer className="relative pb-0 pt-8 sm:pt-12 bg-transparent" role="contentinfo">
      <div className="relative z-20 mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        <div
          className="rounded-t-xl sm:rounded-t-3xl backdrop-blur-md border-0 border-t-2 border-primary shadow-xl p-4 sm:p-6 md:p-10 bg-background/95"
          style={{
            backgroundColor: 'hsl(var(--background))',
            backgroundImage: "url('/images/sections/grid-pattern-light.png')",
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="mb-6 sm:mb-8">
            <NextLink className="flex items-center gap-2.5 mb-3 w-fit hover:opacity-80 transition-opacity" href="/" aria-label="Optimems home">
              <OptimemsLogo className="w-8 h-8 sm:w-9 sm:h-9" />
            </NextLink>

            <p className="text-muted-foreground text-xs mb-2">
              {t('footer.company.description')}
            </p>

            <a
              href={`mailto:${footer.contact.email}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-secondary text-xs transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="truncate max-w-[180px]">{footer.contact.email}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 mb-6 sm:mb-8">
            {footerLinks.map((section, index) => (
              <FooterSection
                key={section.title}
                title={footerTitleLabels[index]}
                links={section.links}
                isOpen={openSections[index] || false}
                onToggle={() => toggleSection(index)}
              />
            ))}
          </div>

          <div className="pt-4 sm:pt-4">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto text-[10px] sm:text-xs">
                {footer.links.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors whitespace-nowrap px-1"
                  >
                    {legalLinkLabels[link.label as keyof typeof legalLinkLabels] || link.label}
                  </Link>
                ))}
              </div>

              <p className="text-muted-foreground text-[10px] sm:text-xs text-center sm:text-left">
                {t('footer.copyright')}
              </p>

              <div className="flex items-center gap-4 sm:gap-3">
                {footer.social.map((social) => {
                  const iconMap: { [key: string]: { dark: string; light: string } } = {
                    'X': { dark: '/images/logos/social-x.svg', light: '/images/logos/social-x-dark.svg' },
                    'Facebook': { dark: '/images/logos/social-facebook.svg', light: '/images/logos/social-facebook-dark.svg' },
                    'YouTube': { dark: '/images/logos/social-youtube.svg', light: '/images/logos/social-youtube-dark.svg' },
                    'LinkedIn': { dark: '/images/logos/social-linkedin.svg', light: '/images/logos/social-linkedin-dark.svg' },
                  }
                  const icons = iconMap[social.platform]
                  if (!icons) return null

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-all duration-200"
                      aria-label={`${social.platform} (opens in new tab)`}
                    >
                      <img
                        src={icons.dark}
                        alt={`${social.platform} social icon`}
                        className="h-6 w-6 sm:h-5 sm:w-5 dark:block hidden"
                      />
                      <img
                        src={icons.light}
                        alt={`${social.platform} social icon`}
                        className="h-6 w-6 sm:h-5 sm:w-5 dark:hidden"
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
