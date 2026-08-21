import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import { Skeleton } from "./skeleton";

interface LoadingFallbackProps {
  loading: boolean | undefined;
  skeletonClassName: string;
  children: ReactNode;
  className?: string;
}

function LoadingFallback({ skeletonClassName, className, children, loading }: LoadingFallbackProps) {
  if (loading) return <Skeleton className={twMerge(skeletonClassName, className)} />;
  return children;
}

export { LoadingFallback };
export type { LoadingFallbackProps };
