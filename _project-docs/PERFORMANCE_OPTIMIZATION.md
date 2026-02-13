# Performance Optimization Recommendations

## Critical Issue: LCP Performance (21.8s)

### Problem
The consult page has an extremely poor LCP (Largest Contentful Paint) time of 21.8 seconds, primarily caused by the background video in the hero section loading slowly.

### Immediate Solutions

#### 1. Video Poster as LCP Element
```tsx
// In ConsultHero.tsx, modify the Video component:
<Video
  src=""
  sources={videoSources}
  autoplay
  muted
  loop
  playsInline
  preload="metadata"  // Changed from "eager" to "metadata"
  loading="lazy"       // Add lazy loading
  className="w-full h-full"
  title="Consulting services video background"
  poster="/images/sections/consult-hero-poster.jpg"
  priority              // Add priority to poster image
/>
```

#### 2. Separate Video Component Optimization
Create a new optimized video component:

```tsx
// components/shared/OptimizedVideo.tsx
"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedVideoProps {
  poster: string
  sources: { webm: string; mp4: string }
  className?: string
  title?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}

export function OptimizedVideo({ poster, sources, className, title, autoplay, muted, loop }: OptimizedVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    // Load video after initial paint
    const timer = setTimeout(() => {
      setShouldLoadVideo(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Always show poster as LCP element */}
      <Image
        src={poster}
        alt={title || ''}
        fill
        className="object-cover"
        priority  // This ensures it's the LCP element
        sizes="100vw"
      />
      
      {/* Load video only after component mounts and delay */}
      {shouldLoadVideo && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={sources.webm} type="video/webm" />
          <source src={sources.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
```

#### 3. Mobile Video Optimization
```tsx
// Add mobile-specific video handling
const isMobile = useMediaQuery('(max-width: 768px)')
const mobileVideoSources = isMobile ? {
  webm: '/videos/consult_mobile_compressed.webm',
  mp4: '/videos/consult_mobile_compressed.mp4'
} : videoSources
```

## JavaScript Bundle Optimization

### Problem
Total blocking time of 1,030ms indicates large JavaScript bundles and inefficient execution.

### Solutions

#### 1. Further Code Splitting
```tsx
// In ConsultContent.tsx, make more sections dynamic
const ConsultServices = dynamic(() => import("@/components/products/consult").then(m => ({ default: m.ConsultServices })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: false  // Change to false for better performance
})

const ConsultTechnology = dynamic(() => import("@/components/products/consult").then(m => ({ default: m.ConsultTechnology })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: false
})
```

#### 2. Reduce Animation Overhead
```tsx
// Use reduced motion for better performance
const reducedMotion = useReducedMotion()

// In animations:
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: reducedMotion ? 0 : 0.7,
    delay: reducedMotion ? 0 : 0.2 
  }}
>
```

## Implementation Priority

1. **Immediate (Critical)**: Implement video poster optimization
2. **High Priority**: Add lazy loading to video
3. **Medium Priority**: Create optimized video component
4. **Long Term**: Further code splitting

## Expected Performance Improvements

After implementing these changes:
- **LCP**: Should reduce from 21.8s to < 2.5s
- **Performance Score**: Should improve from 51/100 to > 80/100
- **TBT**: Should reduce from 1,030ms to < 300ms

## Testing Required

1. **Lighthouse Testing**: Run after each optimization
2. **Real Device Testing**: Test on actual mobile devices
3. **Network Throttling**: Test on slow 3G connections
4. **Visual Regression**: Ensure video transitions work smoothly