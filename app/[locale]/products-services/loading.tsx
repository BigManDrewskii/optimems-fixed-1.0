export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="relative pt-32 md:pt-40 lg:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          <div className="animate-pulse space-y-6 max-w-6xl mx-auto">
            <div className="h-10 w-3/4 bg-muted rounded mx-auto" />
            <div className="h-5 w-full bg-muted/50 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Products Grid skeleton */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] pb-20">
        <div className="animate-pulse">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {Array.from({ length: 2 }).map(() => (
              <div key="product-card-1" className="h-[500px] bg-muted/30 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}