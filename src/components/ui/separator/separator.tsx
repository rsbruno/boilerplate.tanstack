import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { twMerge } from "tailwind-merge";

interface SeparatorProps extends ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  loading?: boolean;
}

const Separator = forwardRef<ElementRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ orientation = "horizontal", decorative = true, loading = false, className, ...props }, ref) => {
    return (
      <SeparatorPrimitive.Root
        className={twMerge(
          loading ? "bg-skeleton" : "bg-primary",
          "shrink-0",
          "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:h-5 data-[orientation=vertical]:w-px",
          className
        )}
        orientation={orientation}
        decorative={decorative}
        data-loading={loading}
        data-slot="separator"
        ref={ref}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

export { Separator };
export type { SeparatorProps };
