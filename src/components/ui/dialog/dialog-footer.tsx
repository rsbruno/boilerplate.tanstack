import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";

import { useDialogContext } from "./context";

interface DialogFooterProps extends ComponentPropsWithoutRef<"div"> {}

const DialogFooter = forwardRef<ComponentRef<"div">, DialogFooterProps>(({ className, ...props }, ref) => {
  const { slots } = useDialogContext("DialogFooter");

  return <div className={slots.footer({ className })} data-slot="dialog-footer" ref={ref} {...props} />;
});
DialogFooter.displayName = "DialogFooter";

export { DialogFooter };
export type { DialogFooterProps };
