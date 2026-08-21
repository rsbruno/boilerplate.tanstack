import { type VariantProps, tv } from "tailwind-variants";

const fieldContainerVariants = tv({
  base: [
    "text-typography-900 w-full rounded-md border bg-white outline-none",
    "border-gray-300 hover:border-gray-400",
    "placeholder:text-typography-350",
    "transition-colors duration-150",
    "focus-visible:border-primary focus-visible:ring-primary-500/35 focus-visible:ring-[3px] focus-visible:ring-offset-0",
    "disabled:bg-gray-100 disabled:border-gray-200 disabled:text-typography-500 disabled:cursor-not-allowed disabled:hover:border-gray-200"
  ],
  variants: {
    size: {
      sm: "h-app-sm px-3.5 text-sm",
      xs: "h-app-xs px-3 text-xs",
      base: "h-app px-4 text-md",
      lg: "h-12 px-4 text-base"
    },
    error: {
      true: "border-danger-600 hover:border-danger-700 focus-visible:border-danger-600 focus-visible:ring-danger-500/35"
    }
  },
  defaultVariants: {
    error: false,
    size: "base"
  }
});

type FieldContainerVariantProps = VariantProps<typeof fieldContainerVariants>;

export { fieldContainerVariants };
export type { FieldContainerVariantProps };
