import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { User } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

interface AvatarFallbackProps extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = forwardRef<ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <AvatarPrimitive.Fallback
        className={twMerge("bg-primary z-10 flex size-full items-center justify-center rounded-full", className)}
        data-slot="avatar-fallback"
        ref={ref}
        {...props}
      >
        <User className="text-white" weight="bold" size={20} />
      </AvatarPrimitive.Fallback>
    );
  }
);
AvatarFallback.displayName = "AvatarFallback";

export { AvatarFallback };
export type { AvatarFallbackProps };
