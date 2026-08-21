import { type VariantProps, tv } from "tailwind-variants";

const dialogVariants = tv({
  slots: {
    content:
      "fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    close:
      "absolute top-4 right-4 flex-center size-8 cursor-pointer rounded-md text-typography-600 transition-colors outline-none hover:bg-gray-100 hover:text-typography-900 focus-visible:ring-[3px] focus-visible:ring-primary-500/35 disabled:pointer-events-none",
    overlay:
      "fixed inset-0 z-50 bg-typography-900/50 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    footer: "flex shrink-0 flex-col-reverse gap-2 border-t border-gray-200 px-5 py-4 sm:flex-row sm:justify-end",
    header: "flex shrink-0 flex-col gap-1 border-b border-gray-200 px-5 py-4 pr-14",
    body: "flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-5"
  },
  variants: {
    size: {
      base: { content: "sm:max-w-lg" },
      lg: { content: "sm:max-w-2xl" },
      sm: { content: "sm:max-w-sm" }
    }
  },
  defaultVariants: {
    size: "base"
  }
});

type DialogVariantProps = VariantProps<typeof dialogVariants>;

export { dialogVariants };
export type { DialogVariantProps };
