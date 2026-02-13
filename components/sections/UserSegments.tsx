"use client"

import { SectionHeader } from "@/components/shared"
import { VideoCard } from "@/components/shared/Card/VideoCard"
import { userSegments } from "@/data/landing-page"
import { useTranslations } from "next-intl"
import { userSegmentKeys } from "@/lib/i18n/translation-keys"

const segmentVideoMap: Record<string, string> = {
  'Home Owners': 'homeOwners',
  'C&I Building Owners': 'commercialBuilding',
  'Aggregators': 'aggregators',
  'RES Park Owners': 'resPark',
  'DSOs & TSOs': 'gridOperators',
}

export function UserSegments() {
  const t = useTranslations('home')

  const getSegmentTranslation = (key: typeof userSegmentKeys[number], field: 'title' | 'tagline' | 'description') => {
    return t(`userSegments.segments.${key}.${field}`)
  }

  const renderSegmentCard = (index: number) => {
    const key = userSegmentKeys[index]
    const segment = userSegments[index]
    const videoKey = segmentVideoMap[segment.title]

    return (
      <VideoCard
        key={key}
        videoKey={videoKey || ''}
        title={getSegmentTranslation(key, 'title')}
        tagline={getSegmentTranslation(key, 'tagline')}
        description={getSegmentTranslation(key, 'description')}
        displayOrder={index}
      />
    )
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <SectionHeader
          title={t('coreValueStatement.text')}
        />

        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {userSegmentKeys.slice(0, 3).map((_, index) => renderSegmentCard(index))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[3, 4].map((index) => renderSegmentCard(index))}
          </div>
        </div>
      </div>
    </section>
  )
}
