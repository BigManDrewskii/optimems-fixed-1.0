export default function Loading() {
  return (
    <div className="min-h-screen pb-24">
      {/* Page header skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] pt-32 md:pt-40 lg:pt-48 pb-8">
        <div className="animate-pulse space-y-4 max-w-6xl mx-auto">
          <div className="h-10 w-48 bg-muted rounded" />
          <div className="h-4 w-80 bg-muted/50 rounded" />
        </div>
      </div>

      {/* Category filter skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-4">
        <div className="animate-pulse">
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map(() => (
              <div key="category-1" className="h-10 w-24 bg-muted/40 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Blog grid skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-8">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key="blog-card-1" className="space-y-4">
              <div className="h-[200px] bg-muted/30 rounded-xl" />
              <div className="h-5 w-3/4 bg-muted/40 rounded" />
              <div className="h-3 w-1/2 bg-muted/30 rounded" />
              <div className="h-3 w-1/3 bg-muted/20 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-8">
        <div className="animate-pulse flex justify-center items-center gap-2">
          <div className="h-10 w-10 bg-muted/40 rounded-lg" />
          <div className="h-10 w-10 bg-muted rounded-lg" />
          <div className="h-10 w-10 bg-muted rounded-lg" />
          <div className="h-10 w-10 bg-muted/40 rounded-lg" />
        </div>
      </div>
    </div>
  )
}