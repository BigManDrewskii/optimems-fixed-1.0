import { motion } from 'framer-motion';
import { useId, useEffect, useState } from 'react';
import { PowerGaugeData } from '../../types/dashboard.types';
import { useDashboardAnimation, useDecimalAnimation } from '../hooks';

interface PowerGaugeDemoProps {
  data: PowerGaugeData;
  size?: 'sm' | 'md' | 'lg';
}

export default function PowerGaugeDemo({
  data,
  size = 'md',
}: PowerGaugeDemoProps) {
  const gaugeId = useId();
  const { ref, isInView } = useDashboardAnimation();
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { totalPower, totalSize, percentage, isLowPower = false, warningThreshold = 30 } = data;

  // Size configurations
  const sizeConfig = {
    sm: { container: 'w-full max-w-[200px]', text: 'text-xl' },
    md: { container: 'w-full max-w-sm', text: 'text-3xl' },
    lg: { container: 'w-full max-w-md', text: 'text-4xl' },
  };

  // SVG geometry
  const radius = 85;
  const innerRadius = 75;
  const circumference = 2 * Math.PI * radius;
  const startAngle = -45;
  const endAngle = 270;
  const totalAngle = endAngle - startAngle;
  const offset = circumference - (animatedValue / 100) * (totalAngle / 360) * circumference;

  const isWarning = animatedValue < warningThreshold;
  const useRedGradient = isWarning || isLowPower;

  // Animate the gauge fill
  useEffect(() => {
    if (isInView && totalPower > 0) {
      setIsAnimating(true);
      const duration = 1500;
      const startValue = 0;
      const startTime = performance.now();

      const animate = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setAnimatedValue(startValue + (percentage - startValue) * easeOut);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setAnimatedValue(percentage);
    }
  }, [percentage, isInView, totalPower]);

  // Calculate tick positions
  const getTickPosition = (value: number, maxValue: number) => {
    const angle = (value / maxValue) * totalAngle + startAngle;
    const radian = (angle * Math.PI) / 180;
    return {
      x: 100 + radius * 1.15 * Math.cos(radian),
      y: 100 + radius * 1.15 * Math.sin(radian),
    };
  };

  const getMajorTickPosition = (value: number, maxValue: number) => {
    const angle = (value / maxValue) * totalAngle + startAngle;
    const radian = (angle * Math.PI) / 180;
    return {
      x1: 100 + radius * 0.95 * Math.cos(radian),
      y1: 100 + radius * 0.95 * Math.sin(radian),
      x2: 100 + radius * 1.05 * Math.cos(radian),
      y2: 100 + radius * 1.05 * Math.sin(radian),
    };
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className={`${sizeConfig[size].container} mx-auto py-4`}
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 200 200"
        aria-labelledby={`power-gauge-title-${gaugeId}`}
      >
        <title id={`power-gauge-title-${gaugeId}`}>
          Power Gauge showing {totalPower} MW out of {totalSize} MWp
        </title>

        <defs>
          {/* Gauge gradient */}
          <linearGradient
            id={`gaugeGradient-${gaugeId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {useRedGradient ? (
              <>
                <stop offset="0%" stopColor="#EB333D" stopOpacity="1" />
                <stop offset="100%" stopColor="#d62638" stopOpacity="1" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
              </>
            )}
          </linearGradient>

          {/* Glow gradient */}
          <linearGradient
            id={`glowGradient-${gaugeId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {useRedGradient ? (
              <>
                <stop offset="0%" stopColor="#EB333D" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#d62638" stopOpacity="0.2" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </>
            )}
          </linearGradient>

          {/* Glow filter */}
          <filter id={`glow-${gaugeId}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#1e293b"
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${(totalAngle / 360) * circumference} ${circumference}`}
          strokeDashoffset={-((startAngle + 90) / 360) * circumference}
        />

        {/* Inner glow ring */}
        <circle
          cx="100"
          cy="100"
          r={innerRadius}
          stroke={`url(#glowGradient-${gaugeId})`}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * totalAngle + startAngle;
          if (angle > endAngle) return null;
          const radian = (angle * Math.PI) / 180;
          const isMainTick = i % 2 === 0;
          const innerR = isMainTick ? radius - 6 : radius - 3;
          const outerR = radius - 2;

          return (
            <line
              key={`tick-${i}`}
              x1={100 + innerR * Math.cos(radian)}
              y1={100 + innerR * Math.sin(radian)}
              x2={100 + outerR * Math.cos(radian)}
              y2={100 + outerR * Math.sin(radian)}
              stroke="#475569"
              strokeWidth={isMainTick ? 1.5 : 0.5}
              opacity={isMainTick ? 0.8 : 0.4}
            />
          );
        })}

        {/* Animated value arc */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          stroke={`url(#gaugeGradient-${gaugeId})`}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[1500ms] ease-out"
          filter={`url(#glow-${gaugeId})`}
          transform="rotate(-45 100 100)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Major tick labels */}
        {[0, 100, 200, 300, 400, 500, 600, 700].map((value) => {
          const pos = getTickPosition(value, 700);
          const tick = getMajorTickPosition(value, 700);
          return (
            <g key={`gauge-marker-${gaugeId}-${value}`}>
              <line
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="#475569"
                strokeWidth="2"
              />
              <text
                x={pos.x}
                y={pos.y}
                fill="#64748b"
                fontSize="9"
                fontWeight="500"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {value}
              </text>
            </g>
          );
        })}

        {/* Center circle background */}
        <circle cx="100" cy="100" r="45" fill="#0f172a" opacity="0.8" />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {isWarning && (
          <div className="absolute top-8 flex items-center space-x-1 animate-pulse">
            <div className="w-2 h-2 bg-destructive rounded-full" />
            <span className="text-destructive text-xs font-medium">Low Power</span>
          </div>
        )}
        <p className="text-[var(--dashboard-text-secondary)] text-xs mb-1 tracking-wide uppercase">
          Total Power
        </p>
        <p
          className={`${sizeConfig[size].text} font-bold tracking-tight transition-all duration-300 ${
            useRedGradient ? 'text-destructive' : 'text-[var(--dashboard-text-primary)]'
          }`}
        >
          {isAnimating ? Math.round(animatedValue) : totalPower}
        </p>
        <p
          className={`${
            useRedGradient ? 'text-red-400' : 'text-cyan-400'
          } text-base font-semibold`}
        >
          MW
        </p>
        <div className="mt-2 pt-2 border-t border-[var(--dashboard-border)]/50">
          <p className="text-[var(--dashboard-text-secondary)] text-xs tracking-wide uppercase">
            Total Size
          </p>
          <p className="text-[var(--dashboard-text-primary)] text-lg font-semibold">{totalSize}</p>
          <p className="text-emerald-400 text-sm font-medium">MWp</p>
        </div>
      </div>
    </motion.div>
  );
}
