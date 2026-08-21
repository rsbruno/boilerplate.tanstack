import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface DialogTriggerProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {}

const DialogTrigger = forwardRef<ComponentRef<typeof DialogPrimitive.Trigger>, DialogTriggerProps>((props, ref) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" ref={ref} {...props} />;
});
DialogTrigger.displayName = "DialogTrigger";

export { DialogTrigger };
export type { DialogTriggerProps };
