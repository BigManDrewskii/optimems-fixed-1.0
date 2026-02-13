/**
* Loading skeletons for dynamically imported landing page sections.
* Heights and layouts approximate the real sections to prevent CLS.
*/

export function UserSegmentsSkeleton() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-64 bg-muted rounded mx-auto" />
          <div className="h-4 w-96 bg-muted/50 rounded mx-auto" />
          <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 3 }).map(() => (
              <div key="user-seg-top-1" className="h-[300px] bg-muted/30 rounded-xl" />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {Array.from({ length: 2 }).map(() => (
              <div key="user-seg-bottom-1" className="h-[300px] bg-muted/30 rounded-xl" />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StatsSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-[1152px] mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Map skeleton */}
              <div className="order-2 lg:order-1">
                <div className="h-[400px] bg-muted/30 rounded-lg" />
              </div>
              
              {/* Right: Content skeleton */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="h-12 w-3/4 bg-muted rounded" />
                <div className="h-20 w-full bg-muted/50 rounded" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map(() => (
                    <div key="stat-1" className="space-y-2">
                      <div className="h-8 w-12 bg-muted rounded mx-auto" />
                      <div className="h-4 w-16 bg-muted/50 rounded mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductsSkeleton() {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="animate-pulse space-y-8">
          <div className="text-center space-y-4">
            <div className="h-8 w-48 bg-muted rounded mx-auto" />
            <div className="h-4 w-64 bg-muted/50 rounded mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 2 }).map(() => (
              <div key="product-1" className="h-[400px] bg-muted/30 rounded-xl" />
            ))}
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="h-[120px] bg-muted/20 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function ValuePropositionsSkeleton() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="text-center space-y-4">
              <div className="h-4 w-32 bg-muted rounded mx-auto" />
              <div className="h-8 w-56 bg-muted rounded mx-auto" />
              <div className="h-4 w-80 bg-muted/50 rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map(() => (
                <div key="value-prop-1" className="h-[200px] bg-muted/30 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlogPreviewSkeleton() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="animate-pulse space-y-8">
          <div className="text-center space-y-4">
            <div className="h-4 w-32 bg-muted rounded mx-auto" />
            <div className="h-8 w-40 bg-muted rounded mx-auto" />
            <div className="h-4 w-64 bg-muted/50 rounded mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map(() => (
              <div key="blog-card-1" className="space-y-4">
                <div className="h-[180px] bg-muted/30 rounded-xl" />
                <div className="h-3 w-3/4 bg-muted/40 rounded" />
                <div className="h-4 w-full bg-muted/50 rounded" />
                <div className="h-10 w-24 bg-muted/30 rounded-full" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="h-12 w-32 bg-muted/30 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}