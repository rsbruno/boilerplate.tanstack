import { type VariantProps, tv } from "tailwind-variants";

const alertVariants = tv({
  variants: {
    variant: {
      warning: {
        iconWrapper: "bg-yellow-100 text-yellow-600",
        root: "border-yellow-200 bg-yellow-50",
        description: "text-yellow-600",
        title: "text-yellow-700",
        icon: "text-yellow-600"
      },
      success: {
        iconWrapper: "bg-green-100 text-green-600",
        root: "border-green-200 bg-green-50",
        description: "text-green-600",
        title: "text-green-700",
        icon: "text-green-600"
      },
      info: {
        iconWrapper: "bg-blue-100 text-blue-600",
        root: "border-blue-200 bg-blue-50",
        description: "text-blue-600",
        title: "text-blue-700",
        icon: "text-blue-600"
      },
      danger: {
        iconWrapper: "bg-red-100 text-red-600",
        root: "border-red-200 bg-red-50",
        description: "text-red-600",
        title: "text-red-700",
        icon: "text-red-600"
      }
    }
  },
  slots: {
    iconWrapper: "flex shrink-0 items-center justify-center rounded-lg p-2",
    root: "relative flex w-full items-start gap-3 rounded-xl border p-4",
    content: "flex min-w-0 flex-1 flex-col gap-1",
    description: "opacity-90",
    title: "leading-none",
    icon: "size-5"
  },
  defaultVariants: {
    variant: "info"
  }
});

type AlertVariant = "danger" | "warning" | "success" | "info";
type AlertVariantProps = VariantProps<typeof alertVariants>;

export { alertVariants };
export type { AlertVariant, AlertVariantProps };
