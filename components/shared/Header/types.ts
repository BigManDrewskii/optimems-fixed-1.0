import { ReactNode } from "react"

/**
 * Navigation item with optional dropdown menu
 */
export interface NavItem {
  label: string
  href: string
  dropdown?: NavDropdownItem[]
}

/**
 * Dropdown menu item
 */
export interface NavDropdownItem {
  label: string
  href: string
}

/**
 * Navigation configuration for a specific locale
 */
export interface NavigationConfig {
  primary: NavItem[]
  company: NavDropdownItem[]
  resources: NavDropdownItem[]
  products: NavDropdownItem[]
  signInLabel: string
  getStartedLabel: string
  menuLabel: string
  companyLabel: string
  resourcesLabel: string
  productsLabel: string
}

/**
 * Props for the main Header container component
 */
export interface HeaderProps {
  className?: string
}

/**
 * Props for desktop navigation
 */
export interface NavigationProps {
  items: NavItem[]
  openDropdown: string | null
  onDropdownToggle: (dropdown: string) => void
  onDropdownClose: () => void
  className?: string
  style?: React.CSSProperties
}

/**
 * Props for mobile navigation drawer
 */
export interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
  signInLabel: string
  getStartedLabel: string
  menuLabel: string
  currentLocale: string
  onLocaleToggle: () => void
}

/**
 * Props for theme toggle button
 */
export interface ThemeToggleProps {
  ariaLabel?: string
  className?: string
}

/**
 * Props for locale switcher
 */
export interface LocaleSwitcherProps {
  currentLocale: string
  onLocaleToggle: () => void
  className?: string
}

/**
 * Styles for locale pill container
 */
export interface LocalePillStyles {
  container: string
  buttonActive: string
  divider: string
}

/**
 * Styles for theme toggle container
 */
export interface ThemeToggleStyles {
  container: string
  icon: string
}
