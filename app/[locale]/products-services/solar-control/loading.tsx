export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton for product pages */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="animate-pulse space-y-6 max-w-4xl mx-auto">
            <div className="h-12 w-2/3 bg-muted rounded mx-auto" />
            <div className="h-6 w-full bg-muted/50 rounded mx-auto" />
            <div className="h-6 w-3/4 bg-muted/50 rounded mx-auto" />
            <div className="h-12 w-48 bg-muted/70 rounded-lg mt-8 mx-auto" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-16">
        <div className="animate-pulse space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`feature-${i + 1}`} className="h-[120px] bg-muted/30 rounded-xl" />
              ))}
          </div>
          
          {/* Features grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={`detail-${i + 1}`} className="space-y-4">
                <div className="h-6 w-3/4 bg-muted rounded" />
                <div className="h-4 w-full bg-muted/50 rounded" />
                <div className="h-4 w-2/3 bg-muted/50 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}