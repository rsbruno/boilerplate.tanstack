import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends ComponentPropsWithoutRef<"div"> {
  loading?: boolean;
}

const Skeleton = forwardRef<ElementRef<"div">, SkeletonProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={twMerge("bg-skeleton! inline-block w-full animate-pulse rounded-md", className)}
      data-slot="skeleton"
      ref={ref}
      {...props}
    />
  );
});
Skeleton.displayName = "Skeleton";

export { Skeleton };
export type { SkeletonProps };
