import { AppLayout } from "@/app/app-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations()

  return (
    <AppLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {t('errors.pageNotFound')}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t('errors.pageNotFoundDescription')}
          </p>
          <Button variant="primary" asChild>
            <Link href="/">
              {t('errors.goHome')}
            </Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  )
}
