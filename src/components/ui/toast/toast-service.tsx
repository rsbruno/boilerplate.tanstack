import { toast as sonner } from "sonner";

import type { ToastVariantProps } from "./styles";

import { ToastDescription } from "./toast-description";
import { ToastContent } from "./toast-content";
import { ToastBadge } from "./toast-badge";
import { ToastTitle } from "./toast-title";
import { ToastRoot } from "./toast-root";

function variant(statusCode: number): ToastVariantProps["variant"] {
  switch (true) {
    case statusCode >= 500:
      return "danger";
    case statusCode >= 400:
      return "warning";
    case statusCode >= 300:
      return "info";
    case statusCode >= 200:
      return "success";
    default:
      return "info";
  }
}

function dispatch(payload: { message?: string; title: string }, options?: Partial<ToastVariantProps>) {
  sonner.custom(() => (
    <ToastRoot variant={options?.variant} className="min-w-80">
      <ToastBadge />
      <ToastContent>
        <ToastTitle>{payload.title}</ToastTitle>
        <ToastDescription>{payload.message}</ToastDescription>
      </ToastContent>
    </ToastRoot>
  ));
}

const toast = { dispatch, variant };

export { toast };
