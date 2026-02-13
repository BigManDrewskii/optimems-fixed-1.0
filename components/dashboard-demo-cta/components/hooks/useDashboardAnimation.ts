import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * Hook for scroll-triggered animations
 * Uses Framer Motion's useInView to detect when element enters viewport
 */
export function useDashboardAnimation(threshold = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, isInView };
}

/**
 * Hook for staggered list animations
 * Returns animation variants for container and items
 */
export function useStaggeredAnimation(staggerDelay = 0.1) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return { containerVariants, itemVariants };
}

/**
 * Hook for fade-in animation
 */
export function useFadeInAnimation(delay = 0) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return variants;
}

/**
 * Hook for scale-in animation
 */
export function useScaleInAnimation(delay = 0) {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return variants;
}
