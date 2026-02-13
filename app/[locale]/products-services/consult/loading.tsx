export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="animate-pulse space-y-6 max-w-2xl mx-auto">
            <div className="h-10 w-3/4 bg-muted rounded" />
            <div className="h-5 w-full bg-muted/50 rounded" />
            <div className="h-5 w-2/3 bg-muted/50 rounded" />
            <div className="h-12 w-40 bg-muted/70 rounded-lg mt-4" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] py-16">
        <div className="animate-pulse space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map(() => (
              <div key="service-1" className="h-[250px] bg-muted/30 rounded-xl" />
            ))}
          </div>
          
          {/* Technology skeleton */}
          <div className="h-[300px] bg-muted/20 rounded-xl mt-8" />
          
          {/* Process skeleton */}
          <div className="space-y-6 mt-16">
            <div className="h-8 w-48 bg-muted rounded" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map(() => (
                <div key="step-1" className="h-[120px] bg-muted/30 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}