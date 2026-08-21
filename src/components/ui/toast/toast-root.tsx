import { type ComponentPropsWithoutRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { ToastVariantProps } from "./styles";

import { ToastContext } from "./context";
import { toastVariants } from "./styles";

interface ToastRootProps extends ComponentPropsWithoutRef<"div">, ToastVariantProps {}

function ToastRoot({ className, children, variant, ...props }: ToastRootProps) {
  const slots = useMemo(() => toastVariants({ variant }), [variant]);
  const contextValue = useMemo(() => ({ slots }), [slots]);

  return (
    <ToastContext.Provider value={contextValue}>
      <div className={twMerge(slots.root(), className)} {...props}>
        {children}
      </div>
    </ToastContext.Provider>
  );
}

export { ToastRoot };
export type { ToastRootProps };
