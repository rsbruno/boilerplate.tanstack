import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";

import { useDialogContext } from "./context";

interface DialogHeaderProps extends ComponentPropsWithoutRef<"div"> {}

const DialogHeader = forwardRef<ComponentRef<"div">, DialogHeaderProps>(({ className, ...props }, ref) => {
  const { slots } = useDialogContext("DialogHeader");

  return <div className={slots.header({ className })} data-slot="dialog-header" ref={ref} {...props} />;
});
DialogHeader.displayName = "DialogHeader";

export { DialogHeader };
export type { DialogHeaderProps };
