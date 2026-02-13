"use client"

import { useTranslations } from "next-intl"
import { AppLayout } from "@/app/app-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations()

  return (
    <AppLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {t('errors.somethingWentWrong')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('errors.pageError')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={reset}>
              {t('errors.tryAgain')}
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/">
                {t('errors.goHome')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
