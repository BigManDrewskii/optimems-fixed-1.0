"use client"

import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { ClientOnly } from "@/components/shared/ClientOnly"

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    loading?: "eager" | "lazy"
  }
}

interface VideoProps {
  src: string
  format?: "webm" | "mp4"
  aspectRatio?: 'video' | 'square' | 'custom'
  maxHeight?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  className?: string
  poster?: string
  controls?: boolean
  preload?: "none" | "metadata" | "auto"
  sources?: { webm?: string; webmLight?: string; mp4?: string; mp4Light?: string }
  cacheBust?: boolean
  title?: string
  alt?: string
  loading?: "eager" | "lazy"
}

export function Video({
  src,
  format = "webm",
  aspectRatio = 'video',
  maxHeight,
  autoplay = true,
  muted = true,
  loop = true,
  playsInline = true,
  className,
  poster,
  controls = false,
  preload = "metadata",
  sources,
  cacheBust = false,
  title,
  alt,
  loading = "lazy",
}: VideoProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const aspectRatioClasses = useMemo(() => {
    const classes: Record<string, string> = {
      video: 'aspect-video',
      square: 'aspect-square',
      custom: '',
    }
    return classes[aspectRatio] || ''
  }, [aspectRatio])

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted/30 text-muted-foreground",
          className
        )}
        role="alert"
        aria-live="polite"
      >
        <p className="text-sm">
          <strong>{title || "Video unavailable"}</strong>
        </p>
      </div>
    )
  }

  const videoLabel = title || alt

  if (!videoLabel && !poster) {
    console.warn('Video component should have either title, alt, or poster prop for accessibility')
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background/50",
        aspectRatioClasses,
        className
      )}
      style={maxHeight ? { maxHeight } : undefined}
    >
      {!isLoaded && poster && (
        <img
          src={poster}
          className="absolute inset-0 w-full h-full object-cover"
          alt={alt || ""}
        />
      )}
      <ClientOnly
        fallback={
          <video
            autoPlay={autoplay}
            muted={muted}
            loop={loop}
            playsInline={playsInline}
            controls={controls}
            preload={preload}
            loading={loading}
            className={cn(
              "w-full h-full object-cover",
              !isLoaded && poster && "opacity-0",
              isLoaded && "opacity-100"
            )}
            onError={() => setHasError(true)}
            onLoadedData={() => setIsLoaded(true)}
            aria-label={videoLabel || "Video content"}
          >
            {!sources && <source src={src} type={`video/${format}`} />}
          </video>
        }
      >
        <VideoWithTheme
          sources={sources}
          src={src}
          format={format}
          autoplay={autoplay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          controls={controls}
          preload={preload}
          loading={loading}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          setHasError={setHasError}
          poster={poster}
          alt={alt}
          videoLabel={videoLabel || ''}
        />
      </ClientOnly>
    </div>
  )
}

interface VideoWithThemeProps {
  sources?: { webm?: string; webmLight?: string; mp4?: string; mp4Light?: string }
  src: string
  format: string
  autoplay: boolean
  muted: boolean
  loop: boolean
  playsInline: boolean
  controls: boolean
  preload: "none" | "metadata" | "auto"
  loading: "eager" | "lazy"
  isLoaded: boolean
  setIsLoaded: (v: boolean) => void
  setHasError: (v: boolean) => void
  poster?: string
  alt?: string
  videoLabel: string
}

function VideoWithTheme({
  sources,
  src,
  format,
  autoplay,
  muted,
  loop,
  playsInline,
  controls,
  preload,
  loading,
  isLoaded,
  setIsLoaded,
  setHasError,
  poster,
  alt,
  videoLabel,
}: VideoWithThemeProps) {
  const { resolvedTheme } = useTheme()
  const videoRef = useRef<HTMLVideoElement>(null)
  const isLight = resolvedTheme === "light"

  const resolvedSources = useMemo(() => {
    if (!sources) return null
    return {
      webm: isLight && sources.webmLight ? sources.webmLight : sources.webm,
      mp4: isLight && sources.mp4Light ? sources.mp4Light : sources.mp4,
    }
  }, [isLight, sources])

  useEffect(() => {
    if (videoRef.current && resolvedSources) {
      videoRef.current.load()
    }
  }, [resolvedSources])

  return (
    <video
      ref={videoRef}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      preload={preload}
      loading={loading}
      key={resolvedSources?.webm || resolvedSources?.mp4}
      className={cn(
        "w-full h-full object-cover",
        !isLoaded && poster && "opacity-0",
        isLoaded && "opacity-100"
      )}
      onError={() => setHasError(true)}
      onLoadedData={() => setIsLoaded(true)}
      aria-label={videoLabel || "Video content"}
    >
      {resolvedSources?.webm && <source src={resolvedSources.webm} type="video/webm" />}
      {resolvedSources?.mp4 && <source src={resolvedSources.mp4} type="video/mp4" />}
      {!resolvedSources && <source src={src} type={`video/${format}`} />}
    </video>
  )
}
