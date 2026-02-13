declare module "react-simple-maps" {
  import React from "react"

  export interface ComposableMapProps {
    children: React.ReactNode
    projection?: string
    projectionConfig?: {
      center?: [number, number]
      scale?: number
      rotate?: [number, number, number]
      parallels?: [number, number]
    }
    width?: number
    height?: number
    className?: string
    style?: React.CSSProperties
  }

  export interface GeographiesProps {
    children: (props: { geographies: any[] }) => React.ReactNode
    geography: string | object
    parseOutline?: (geo: any) => any
  }

  export interface GeographyProps {
    geography: any
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onMouseDown?: () => void
    onMouseUp?: () => void
    onFocus?: () => void
    onBlur?: () => void
  }

  export interface MarkerProps {
    children: React.ReactNode
    coordinates: [number, number]
    onClick?: () => void
  }

  export interface ZoomableGroupProps {
    children: React.ReactNode
    zoom?: number
    center?: [number, number]
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }) => void
    minZoom?: number
    maxZoom?: number
    translateExtent?: [[number, number], [number, number]]
  }

  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
  export const Marker: React.FC<MarkerProps>
  export const ZoomableGroup: React.FC<ZoomableGroupProps>
}
