export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Page header skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] pt-32 md:pt-40 lg:pt-48 pb-8">
        <div className="animate-pulse space-y-4 max-w-4xl mx-auto">
          <div className="h-10 w-48 bg-muted rounded mx-auto" />
          <div className="h-4 w-80 bg-muted/50 rounded mx-auto" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-16">
        <div className="animate-pulse space-y-8">
          {/* Documentation sections skeleton */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`doc-section-${i + 1}`} className="space-y-6">
              <div className="h-8 w-2/3 bg-muted rounded" />
              <div className="h-32 bg-muted/20 rounded-xl" />
              <div className="h-4 w-3/4 bg-muted/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}