import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { useDialogContext } from "./context";

interface DialogOverlayProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {}

const DialogOverlay = forwardRef<ComponentRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
  ({ className, ...props }, ref) => {
    const { slots } = useDialogContext("DialogOverlay");

    return <DialogPrimitive.Overlay className={slots.overlay({ className })} data-slot="dialog-overlay" ref={ref} {...props} />;
  }
);
DialogOverlay.displayName = "DialogOverlay";

export { DialogOverlay };
export type { DialogOverlayProps };
