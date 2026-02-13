'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const categories = [
  { label: 'All', value: '' },
  { label: 'News', value: 'news' },
  { label: 'Jobs', value: 'jobs' },
  { label: 'Webinars', value: 'webinars' },
  { label: 'Lesson Learned', value: 'lesson-learned' },
]

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category') || ''

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    params.delete('page')
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Blog category filter">
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.value}
          onClick={() => handleCategoryChange(cat.value)}
          aria-pressed={currentCategory === cat.value}
          className={`px-4 py-2 rounded-full text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none ${
            currentCategory === cat.value
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
