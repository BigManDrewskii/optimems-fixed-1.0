import { useState, useEffect, useRef } from 'react';

/**
 * Hook for animating number counters
 * Animates from 0 to endValue when element comes into view
 *
 * @param endValue - The final value to count to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @param startWhen - Boolean to trigger animation (default: true)
 * @returns The current animated value
 */
export function useCounterAnimation(
  endValue: number,
  duration: number = 2000,
  startWhen: boolean = true
) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Only animate once
    if (hasAnimated.current || !startWhen) {
      return;
    }

    hasAnimated.current = true;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOut
      );
      setValue(currentValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setValue(endValue); // Ensure we end exactly at endValue
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [endValue, duration, startWhen]);

  // Reset if startWhen changes to false
  useEffect(() => {
    if (!startWhen) {
      hasAnimated.current = false;
      setValue(0);
    }
  }, [startWhen]);

  return value;
}

/**
 * Hook for animating decimal values
 * Similar to useCounterAnimation but preserves decimal places
 *
 * @param endValue - The final value to count to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @param decimals - Number of decimal places (default: 1)
 * @returns The current animated value
 */
export function useDecimalAnimation(
  endValue: number,
  duration: number = 2000,
  decimals: number = 1
) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue =
        startValue + (endValue - startValue) * easeOut;
      setValue(parseFloat(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setValue(endValue);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [endValue, duration, decimals]);

  return value;
}
