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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    metadataBase: new URL("https://optimems.gr"),
    title: {
      default: "Optimems | Energy Command Center for Grid Optimization",
      template: "%s | Optimems",
    },
    description: "Optimems delivers AI-powered energy management solutions for grid optimization, renewable energy integration, and real-time energy command. Transform your energy infrastructure today.",
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
          alt: 'Optimems - Energy Command Center for Grid Optimization'
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
