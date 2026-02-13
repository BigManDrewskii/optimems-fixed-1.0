export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero section skeleton */}
      <div className="relative pt-32 md:pt-40 lg:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="animate-pulse space-y-6 max-w-4xl mx-auto">
            <div className="h-12 w-3/4 bg-muted rounded mx-auto" />
            <div className="h-6 w-full bg-muted/50 rounded mx-auto" />
            <div className="h-6 w-2/3 bg-muted/50 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-16">
        <div className="animate-pulse space-y-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={`section-${i}`} className="space-y-6">
              <div className="h-8 w-1/2 bg-muted rounded" />
              <div className="h-32 bg-muted/20 rounded-xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-4 w-full bg-muted/50 rounded" />
                <div className="h-4 w-3/4 bg-muted/50 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}