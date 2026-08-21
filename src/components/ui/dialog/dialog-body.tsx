import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from "react";

import { useDialogContext } from "./context";

interface DialogBodyProps extends ComponentPropsWithoutRef<"div"> {}

const DialogBody = forwardRef<ComponentRef<"div">, DialogBodyProps>(({ className, ...props }, ref) => {
  const { slots } = useDialogContext("DialogBody");

  return <div className={slots.body({ className })} data-slot="dialog-body" ref={ref} {...props} />;
});
DialogBody.displayName = "DialogBody";

export { DialogBody };
export type { DialogBodyProps };
