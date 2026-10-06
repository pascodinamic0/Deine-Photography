'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
    const clampedValue =
      typeof value === 'number'
        ? Math.min(Math.max(value, 0), safeMax)
        : 0;
    const percentage =
      safeMax === 0 ? 0 : Math.round((clampedValue / safeMax) * 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={clampedValue}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

