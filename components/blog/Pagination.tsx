'use client'

import { Link } from '@/i18n/navigation'
import { useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const searchParams = useSearchParams()
  
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams)
    if (page === 1) {
      params.delete('page')
    } else {
      params.set('page', page.toString())
    }
    return `${baseUrl}?${params.toString()}`
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" role="navigation" aria-label="Blog pagination">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
          aria-label="Go to previous page"
        >
          Previous
        </Link>
      )}

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={`w-10 h-10 flex items-center justify-center rounded ${
              page === currentPage
                ? 'bg-primary text-primary-foreground'
                : 'border border-border hover:bg-muted transition-colors'
            }`}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="px-4 py-2 border border-border rounded hover:bg-muted transition-colors"
          aria-label="Go to next page"
        >
          Next
        </Link>
      )}
    </nav>
  )
}
