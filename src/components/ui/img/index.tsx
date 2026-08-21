import type { ComponentPropsWithoutRef } from "react";

import { type SkeletonProps, Skeleton } from "../skeleton";

export function Image({ className, loading, ...props }: ComponentPropsWithoutRef<"img"> & SkeletonProps) {
  if (loading) return <Skeleton className={className} {...props} />;
  return <img className={className} {...props} />;
}
