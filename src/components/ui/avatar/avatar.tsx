import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

import { LoadingFallback } from "../skeleton";

interface AvatarProps extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  loading?: boolean;
}

const Avatar = forwardRef<ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(({ className, loading, ...props }, ref) => {
  return (
    <LoadingFallback skeletonClassName="size-8 rounded-full" className={className} loading={loading}>
      <AvatarPrimitive.Root
        className={twMerge("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
        data-slot="avatar"
        ref={ref}
        {...props}
      />
    </LoadingFallback>
  );
});
Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarProps };
