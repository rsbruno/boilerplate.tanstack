import { type VariantProps, tv } from "tailwind-variants";

const toastVariants = tv({
  variants: {
    variant: {
      warning: {
        title: "text-warning",
        badge: "bg-warning"
      },
      success: {
        title: "text-success",
        badge: "bg-success"
      },
      danger: {
        title: "text-danger",
        badge: "bg-danger"
      },
      info: {
        title: "text-info",
        badge: "bg-info"
      }
    }
  },
  slots: {
    root: "flex h-min max-h-20 w-full gap-2 rounded-xl border border-gray-200 bg-white px-2 py-2.5 shadow-xs",
    badge: "block w-1 max-w-1 flex-1 rounded-full bg-amber-500",
    description: "block line-clamp-2",
    title: "block text-amber-500",
    content: "flex flex-col"
  },
  defaultVariants: {
    variant: "info"
  }
});

type ToastVariantProps = VariantProps<typeof toastVariants>;

export { toastVariants };
export type { ToastVariantProps };
