import type { ReactNode } from "react";

import { useToastContext } from "./context";

interface ToastContentProps {
  children: ReactNode;
}

function ToastContent({ children }: ToastContentProps) {
  const { slots } = useToastContext("ToastContent");
  return <div className={slots.content()}>{children}</div>;
}

export { ToastContent };
export type { ToastContentProps };
