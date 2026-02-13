import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/theme-provider"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const metadata: Record<string, { title: string; description: string; ogAlt: string }> = {
  en: {
    title: "Optimems | Energy Command Center for Grid Optimization",
    description: "Optimems delivers AI-powered energy management solutions for grid optimization, renewable energy integration, and real-time energy command. Transform your energy infrastructure today.",
    ogAlt: "Optimems - Energy Command Center for Grid Optimization",
  },
  el: {
    title: "Optimems | Κέντρο Ενεργειακής Διαχείρισης για Βελτιστοποίηση Δικτύου",
    description: "Η Optimems παρέχει λύσεις ενεργειακής διαχείρισης με τεχνητή νοημοσύνη για βελτιστοποίηση δικτύου, ενσωμάτωση ανανεώσιμων πηγών ενέργειας και ενεργειακό έλεγχο σε πραγματικό χρόνο.",
    ogAlt: "Optimems - Κέντρο Ενεργειακής Διαχείρισης για Βελτιστοποίηση Δικτύου",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const meta = metadata[locale] || metadata.en

  return {
    metadataBase: new URL("https://optimems.gr"),
    title: {
      default: meta.title,
      template: "%s | Optimems",
    },
    description: meta.description,
    openGraph: {
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'el' ? 'en' : 'el',
      siteName: 'Optimems',
      images: [
        {
          url: '/optimems-open-graph.png',
          width: 1200,
          height: 630,
          alt: meta.ogAlt,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@optimems',
      creator: '@optimems',
      images: ['/optimems-open-graph.png']
    },
    alternates: {
      canonical: `https://optimems.gr/${locale}`,
      languages: {
        'el': 'https://optimems.gr/el',
        'en': 'https://optimems.gr/en'
      }
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
