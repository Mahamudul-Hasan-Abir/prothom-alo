"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

const LazySection = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded" />,
}: LazySectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
};

export default LazySection;
