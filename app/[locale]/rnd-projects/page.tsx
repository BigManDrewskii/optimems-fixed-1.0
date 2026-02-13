import { AppLayout } from "@/app/app-layout"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export default function RndProjectsPage() {
  const t = useTranslations('pages.rndProjects')

  return (
    <AppLayout>
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('headline')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t('description')}
          </p>
          <Button asChild variant="primary">
            <Link href="/contact">{t('cta')}</Link>
          </Button>
        </div>
      </main>
    </AppLayout>
  )
}
