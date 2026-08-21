import { WarningCircle, CheckCircle, XCircle, Info } from "@phosphor-icons/react";
import { type ComponentProps, useMemo } from "react";
import { Slot } from "@radix-ui/react-slot";

import { type AlertVariant, alertVariants } from "./styles";
import { AlertContext } from "./context";

interface AlertRootProps extends ComponentProps<"div"> {
  variant?: AlertVariant;
  asChild?: boolean;
}

const icons: Record<AlertVariant, typeof Info> = {
  warning: WarningCircle,
  success: CheckCircle,
  danger: XCircle,
  info: Info
};

function AlertRoot({ variant = "info", className, children, asChild, ref, ...props }: AlertRootProps) {
  const slots = useMemo(() => alertVariants({ variant }), [variant]);
  const contextValue = useMemo(() => ({ slots }), [slots]);

  const Comp = asChild ? Slot : "div";
  const Icon = icons[variant];

  return (
    <AlertContext.Provider value={contextValue}>
      <Comp className={slots.root({ className })} data-slot="alert" role="alert" ref={ref} {...props}>
        <span className={slots.iconWrapper()}>
          <Icon className={slots.icon()} weight="bold" />
        </span>
        <div className={slots.content()}>{children}</div>
      </Comp>
    </AlertContext.Provider>
  );
}
AlertRoot.displayName = "AlertRoot";

export { AlertRoot };
export type { AlertRootProps };
