import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

interface PopoverTriggerProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {}

const PopoverTrigger = forwardRef<ComponentRef<typeof PopoverPrimitive.Trigger>, PopoverTriggerProps>((props, ref) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" ref={ref} {...props} />;
});
PopoverTrigger.displayName = "PopoverTrigger";

export { PopoverTrigger };
export type { PopoverTriggerProps };
