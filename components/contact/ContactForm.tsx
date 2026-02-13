"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export function ContactForm() {
  const t = useTranslations('contactPage.form')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement actual form submission logic
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-primary" aria-hidden="true" />
        </div>
        <h2 className={`text-2xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
          {t('success.title')}
        </h2>
        <p className={`text-muted-foreground mb-6 ${isGreek ? 'greek-text' : ''}`}>
          {t('success.message')}
        </p>
        <Button onClick={handleReset} variant="outline">
          {t('success.resetButton')}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Surname */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="contact-name">
            {t('nameLabel')} *
          </Label>
          <Input
            id="contact-name"
            name="name"
            placeholder={t("namePlaceholder")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-surname">
            {t('surnameLabel')} *
          </Label>
          <Input
            id="contact-surname"
            name="surname"
            placeholder={t("surnamePlaceholder")}
            required
          />
        </div>
      </div>

      {/* Organisation */}
      <div className="space-y-2">
        <Label htmlFor="contact-organisation">
          {t('organisationLabel')}
        </Label>
        <Input
          id="contact-organisation"
          name="organisation"
          placeholder={t("organisationPlaceholder")}
        />
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <Label htmlFor="contact-subject">
          {t('subjectLabel')} *
        </Label>
        <select
          id="contact-subject"
          name="subject"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">{t("selectSubjectPlaceholder")}</option>
          <option value="partnership">{t('subjects.partnership')}</option>
          <option value="solutions">{t('subjects.solutions')}</option>
          <option value="datasheets">{t('subjects.datasheets')}</option>
          <option value="consultation">{t('subjects.consultation')}</option>
          <option value="general">{t('subjects.general')}</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="contact-message">
          {t('messageLabel')} *
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder={t("messagePlaceholder")}
          rows={6}
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('submittingLabel') : t('submitLabel')}
        {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />}
      </Button>
    </form>
  )
}
