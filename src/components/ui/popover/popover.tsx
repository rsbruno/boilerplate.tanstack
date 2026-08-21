import type { ComponentPropsWithoutRef } from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

interface PopoverProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}

function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

export { Popover };
export type { PopoverProps };
