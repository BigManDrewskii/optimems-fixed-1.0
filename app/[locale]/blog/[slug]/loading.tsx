export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero image skeleton */}
      <div className="w-full h-[40vh] md:h-[50vh] bg-muted/30 animate-pulse" />

      {/* Article header skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl py-12">
        <div className="animate-pulse space-y-6">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="h-4 w-24 bg-muted/50 rounded mb-8" />
            
            <div className="h-10 md:h-12 lg:h-14 w-3/4 bg-muted rounded mb-8" />
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="h-8 w-8 bg-muted/30 rounded-full" />
              <div className="h-4 w-24 bg-muted/40 rounded" />
              <div className="h-4 w-16 bg-muted/40 rounded" />
              <div className="flex items-center gap-1.5">
                <div className="h-4 w-4 bg-muted/30 rounded" />
                <div className="h-4 w-16 bg-muted/40 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article content skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl py-12">
        <div className="animate-pulse space-y-3">
          {Array.from({ length: 15 }).map(() => (
            <div key="line-1" className="h-4 bg-muted/30 rounded" style={{ width: `${75 + Math.random() * 25}%` }} />
          ))}
        </div>
      </div>

      {/* Related posts skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12">
        <div className="animate-pulse border-t border-border">
          <div className="pt-8 space-y-4">
            <div className="h-8 w-32 bg-muted rounded" />
            <div className="h-4 w-64 bg-muted/50 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {Array.from({ length: 3 }).map(() => (
                <div key="related-1" className="h-[200px] bg-muted/30 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}