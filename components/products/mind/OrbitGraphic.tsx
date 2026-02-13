// Animated orbital visualization with icons orbiting concentric dashed rings around a central Optimems logo.
// All colors reference CSS custom properties so they adapt to light/dark themes.
// Orbiting icons share a unified color; central logo uses a distinct color.
import { useState, useEffect } from "react";
import { useResponsiveScale } from "./useResponsiveScale";
import { useTheme } from "next-themes";
import type { LucideIcon } from "@/lib/icons";
import {
  Sun,
  BatteryCharging,
  Zap,
  Wind,
  Droplets,
  Plug,
  Leaf,
  Flame,
  Thermometer,
} from "@/lib/icons";

interface OrbitIcon {
  Icon: LucideIcon;
  deg: number;
}

interface Ring {
  orbitClass: string;
  counterClass: string;
  radius: number;
  diameter: number;
  icons: OrbitIcon[];
}

const rings: Ring[] = [
  {
    orbitClass: "animate-[orbit-cw_25s_linear_infinite]",
    counterClass: "animate-[orbit-ccw_25s_linear_infinite]",
    radius: 130,
    diameter: 260,
    icons: [
      { Icon: Sun, deg: 0 },
      { Icon: BatteryCharging, deg: 120 },
      { Icon: Zap, deg: 240 },
    ],
  },
  {
    orbitClass: "animate-[orbit-ccw_35s_linear_infinite]",
    counterClass: "animate-[orbit-cw_35s_linear_infinite]",
    radius: 210,
    diameter: 420,
    icons: [
      { Icon: Wind, deg: 0 },
      { Icon: Droplets, deg: 120 },
      { Icon: Plug, deg: 240 },
    ],
  },
  {
    orbitClass: "animate-[orbit-ccw_50s_linear_infinite]",
    counterClass: "animate-[orbit-cw_50s_linear_infinite]",
    radius: 280,
    diameter: 560,
    icons: [
      { Icon: Leaf, deg: 0 },
      { Icon: Flame, deg: 120 },
      { Icon: Thermometer, deg: 240 },
    ],
  },
];

export function OrbitGraphic() {
  const { scale, containerSize, center, centralIconSize, reducedMotion } = useResponsiveScale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  // Disable animations if user prefers reduced motion
  const animationClass = reducedMotion ? '' : 'animate-[fade-in-up_0.7s_ease-out_both]';

  // Choose logo based on theme with fallback
  const logoSrc = mounted && resolvedTheme === 'dark' 
    ? '/optimems-logos/optimems-logo-icon-dark.svg'
    : '/optimems-logos/optimems-logo-icon-light.svg';

  return (
    <div
      className={`relative mx-auto ${animationClass} ${
        scale <= 0.5 ? 'orbit-graphic-mobile' : scale <= 0.75 ? 'orbit-graphic-tablet' : ''
      }`}
      style={{ 
        width: "100%", 
        maxWidth: containerSize, 
        aspectRatio: "1 / 1"
      }}
    >
      {/* Background grid with radial gradient dots */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480 * scale,
          height: 480 * scale,
          left: center - (240 * scale),
          top: center - (240 * scale),
          backgroundImage: "radial-gradient(circle, var(--grid-dot) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 65%)",
          maskImage: "radial-gradient(circle, black 15%, transparent 65%)",
          animation: reducedMotion ? 'none' : 'dot-glow 6s ease-in-out infinite',
        }}
      />

      <svg
        className="absolute pointer-events-none"
        width={containerSize}
        height={containerSize}
        style={{ left: 0, top: 0 }}
        role="img"
        aria-label="Energy management orbital visualization"
      >
        <title>Energy Management System Orbital Visualization</title>
        {rings.map((ring, i) => {
          const dashLen = 8;
          const gapLen = 8;
          const duration = 3 + i * 1.5;
          const direction = i % 2 === 0 ? "normal" : "reverse";
          return (
            <circle
              key={`circle-radius-${ring.radius}`}
              cx={center}
              cy={center}
              r={ring.radius * scale}
              fill="none"
              stroke="var(--orbit-ring-color)"
              strokeWidth={1.5 * scale}
              strokeDasharray={`${dashLen * scale} ${gapLen * scale}`}
              style={{
                animation: reducedMotion ? 'none' : `dash-flow ${duration}s linear infinite`,
                animationDirection: direction,
                filter: 'brightness(1.1)',
              }}
            />
          );
        })}
      </svg>



      <img 
        src={logoSrc}
        alt="Optimems Logo"
        width={centralIconSize}
        height={centralIconSize}
        className={`absolute z-10 transition-all duration-300 ${isHovered ? 'scale-110 brightness-110' : ''}`}
        style={{ 
          left: center - (centralIconSize / 2),
          top: center - (centralIconSize / 2),
          filter: 'var(--orbit-logo-filter, brightness(0) invert(1))'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {rings.map((ring, i) => (
        <div
          key={`orbit-${ring.radius}-${ring.orbitClass}`}
          className={`absolute ${reducedMotion ? '' : ring.orbitClass}`}
          style={{
            width: ring.diameter * scale,
            height: ring.diameter * scale,
            left: center - (ring.diameter * scale) / 2,
            top: center - (ring.diameter * scale) / 2,
            transformOrigin: "center center",
            willChange: reducedMotion ? "auto" : "transform",
          }}
        >
          {ring.icons.map((icon, j) => {
            const rad = (icon.deg * Math.PI) / 180;
            const x = (ring.diameter * scale) / 2 + (ring.radius * scale) * Math.cos(rad);
            const y = (ring.diameter * scale) / 2 + (ring.radius * scale) * Math.sin(rad);
            return (
              <div
                key={`ring-${i}-icon-${j}-${icon.deg}`}
                className="absolute"
                style={{
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={reducedMotion ? '' : ring.counterClass}
                  style={{ willChange: reducedMotion ? "auto" : "transform" }}
                >
                  <div
                    className="w-11 h-11 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105 hover:brightness-110"
                    style={{
                      color: "var(--orbit-icon-color)",
                      background: "var(--orbit-icon-bg)",
                      border: `${Math.max(0.5, scale)}px solid var(--orbit-icon-border)`,
                      boxShadow: "var(--orbit-icon-shadow), var(--orbit-icon-glow)",
                    }}
                  >
                    <icon.Icon size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}