import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

// Optimized font loading with next/font
const ibm = IBM_Plex_Sans({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
})

// Root layout is minimal - actual rendering happens in [locale]/layout.tsx
// This layout is used for middleware and static assets
export const metadata: Metadata = {
  metadataBase: new URL("https://optimems.gr"),
  generator: "Optimems",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning className={ibm.variable}>
      <head>
        {/* Set lang attribute based on URL */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const path = window.location.pathname;
                const locale = path.split('/')[1] || 'el';
                document.documentElement.setAttribute('lang', locale);

                // Theme initialization
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme) {
                    if (theme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } else {
                    // Fallback to system preference if no theme is set in localStorage
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                    }
                  }
                } catch (e) {
                  // Failsafe in case localStorage is disabled
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FC5855" />
      </head>
      <body className={`relative ${ibm.className} bg-background min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
