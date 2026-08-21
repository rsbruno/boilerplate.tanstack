import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

interface PopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

const PopoverContent = forwardRef<ComponentRef<typeof PopoverPrimitive.Content>, PopoverContentProps>(
  ({ sideOffset = 8, align = "end", className, ...props }, ref) => {
    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          className={twMerge(
            "z-50 min-w-48 rounded-lg border border-gray-200 bg-white p-1 shadow-lg outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className
          )}
          data-slot="popover-content"
          sideOffset={sideOffset}
          align={align}
          ref={ref}
          {...props}
        />
      </PopoverPrimitive.Portal>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export { PopoverContent };
export type { PopoverContentProps };
