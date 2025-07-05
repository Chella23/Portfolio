
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'avatar' | 'custom';
  lines?: number;
  className?: string;
}

const SkeletonLoader = ({ type = 'card', lines = 3, className = '' }: SkeletonLoaderProps) => {
  if (type === 'avatar') {
    return (
      <div className={`animate-pulse ${className}`}>
        <Skeleton className="h-48 w-48 rounded-full mx-auto mb-4" />
        <Skeleton className="h-4 w-32 mx-auto mb-2" />
        <Skeleton className="h-3 w-24 mx-auto" />
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className={`animate-pulse space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} />
        ))}
      </div>
    );
  }

  if (type === 'card') {
    return (
      <div className={`animate-pulse p-6 border rounded-lg ${className}`}>
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5 mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  return (
    <div className={`animate-pulse ${className}`}>
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default SkeletonLoader;
