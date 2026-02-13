"use client"

import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { useState, useCallback } from "react"
import { ZoomIn, ZoomOut, RotateCcw, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"

interface Position {
  coordinates: [number, number]
  zoom: number
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

interface LocationPin {
  name: string
  coordinates: [number, number]
  status: "active" | "future"
}

const locations: LocationPin[] = [
  { name: "Greece", coordinates: [23.7275, 37.9838], status: "active" },
  { name: "Sweden", coordinates: [18.0686, 59.3293], status: "active" },
  { name: "Cyprus", coordinates: [33.4299, 35.1264], status: "active" },
  { name: "N. Macedonia", coordinates: [21.4254, 41.9981], status: "active" },
  { name: "Bulgaria", coordinates: [25.4858, 42.7339], status: "active" },
  { name: "Romania", coordinates: [26.1025, 44.4268], status: "active" },
  { name: "Hungary", coordinates: [19.0402, 47.4979], status: "active" },
  { name: "Spain", coordinates: [-3.7038, 40.4168], status: "future" },
  { name: "Portugal", coordinates: [-9.1393, 38.7223], status: "future" },
]

export function EuropeMap() {
  const { theme } = useTheme()
  const t = useTranslations('common')
  const [position, setPosition] = useState<Position>({
    coordinates: [15, 50],
    zoom: 1,
  })
  const [hoveredGeography, setHoveredGeography] = useState<string | null>(null)

  const handleZoomIn = useCallback(() => {
    if (position.zoom >= 4) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }))
  }, [position.zoom])

  const handleZoomOut = useCallback(() => {
    if (position.zoom <= 1) return
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }))
  }, [position.zoom])

  const handleReset = useCallback(() => {
    setPosition({ coordinates: [15, 50], zoom: 1 })
  }, [])

  const handleGeographyHover = useCallback((geoId: string | null) => {
    setHoveredGeography(geoId)
  }, [])

  const pinSize = 12 / position.zoom

  const getMapColors = useCallback(() => {
    return theme === "dark"
      ? {
          default: "oklch(0.35 0.05 250)",
          hover: "oklch(0.65 0.18 25)",
        }
      : {
          default: "oklch(0.98 0.01 250)",
          hover: "oklch(0.58 0.15 195)",
        }
  }, [theme])

  const colors = getMapColors()

  return (
    <div
      className="relative w-full h-full min-h-[400px] overflow-hidden"
      role="region"
      aria-label="Optimems market presence across Europe"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [15, 50],
          scale: 600,
        }}
        className="w-full h-full"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          minZoom={1}
          maxZoom={4}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="var(--map-border)"
                  strokeWidth={0.5}
                  fill={hoveredGeography === geo.rsmKey ? colors.hover : colors.default}
                  onMouseEnter={() => handleGeographyHover(geo.rsmKey)}
                  onMouseLeave={() => handleGeographyHover(null)}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map(({ name, coordinates, status }) => (
            <Marker key={name} coordinates={coordinates}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <circle
                    r={pinSize}
                    fill={status === "active" ? "var(--pin-active)" : "var(--pin-future)"}
                    style={{ cursor: "pointer" }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${name} - ${status === "active" ? "Active location" : "Coming soon"}`}
                  />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span>{name}</span>
                </TooltipContent>
              </Tooltip>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-1.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleZoomIn}
          disabled={position.zoom >= 4}
          className="h-8 w-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleZoomOut}
          disabled={position.zoom <= 1}
          className="h-8 w-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReset}
          className="h-8 w-8 bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
          aria-label="Reset map view"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50">
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--pin-active)" }} aria-hidden="true" />
          <span className="text-xs text-muted-foreground">{t('mapActive')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--pin-future)" }} aria-hidden="true" />
          <span className="text-xs text-muted-foreground">{t('mapComingSoon')}</span>
        </div>
      </div>
    </div>
  )
}
