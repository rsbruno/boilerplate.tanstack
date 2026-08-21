import { type VariantProps, tv } from "tailwind-variants";

const badgeVariants = tv({
  compoundVariants: [
    {
      class: {
        root: "bg-white border-primary",
        text: "text-primary"
      },
      appearance: "outlined",
      variant: "primary"
    },
    {
      class: {
        root: "bg-white border-secondary",
        text: "text-secondary"
      },
      appearance: "outlined",
      variant: "secondary"
    },
    {
      class: {
        root: "bg-white border-success-700",
        text: "text-success-700"
      },
      appearance: "outlined",
      variant: "success"
    },
    {
      class: {
        root: "bg-white border-warning-700",
        text: "text-warning-700"
      },
      appearance: "outlined",
      variant: "warning"
    },
    {
      class: {
        root: "bg-white border-danger-700",
        text: "text-danger-700"
      },
      appearance: "outlined",
      variant: "danger"
    },
    {
      class: {
        root: "bg-white border-gray-200",
        text: "text-typography-700"
      },
      appearance: "outlined",
      variant: "surface"
    },
    {
      class: {
        root: "bg-white border-gray-300",
        text: "text-typography-500"
      },
      appearance: "outlined",
      variant: "disabled"
    },
    {
      class: {
        root: "!bg-primary-50 border-transparent",
        text: "!text-primary-700"
      },
      appearance: "ghost",
      variant: "primary"
    },
    {
      class: {
        root: "!bg-secondary-50 border-transparent",
        text: "!text-secondary-700"
      },
      variant: "secondary",
      appearance: "ghost"
    },
    {
      class: {
        root: "!bg-success-50 border-transparent",
        text: "!text-success-700"
      },
      appearance: "ghost",
      variant: "success"
    },
    {
      class: {
        root: "!bg-warning-50 border-transparent",
        text: "!text-warning-700"
      },
      appearance: "ghost",
      variant: "warning"
    },
    {
      class: {
        root: "!bg-danger-50 border-transparent",
        text: "!text-danger-700"
      },
      appearance: "ghost",
      variant: "danger"
    },
    {
      class: {
        root: "!bg-typography-100 border-transparent",
        text: "!text-typography-700"
      },
      appearance: "ghost",
      variant: "surface"
    },
    {
      class: {
        root: "!bg-gray-200 border-transparent",
        text: "!text-typography-500"
      },
      variant: "disabled",
      appearance: "ghost"
    }
  ],
  variants: {
    variant: {
      disabled: {
        root: "bg-gray-200 border-gray-300",
        text: "text-typography-500"
      },
      surface: {
        root: "bg-gray-100 border-gray-200",
        text: "text-typography-900"
      },
      success: {
        root: "bg-success-600 border-success-600",
        text: "text-white"
      },
      warning: {
        root: "bg-warning-600 border-warning-600",
        text: "text-white"
      },
      secondary: {
        root: "bg-secondary border-secondary",
        text: "text-white"
      },
      danger: {
        root: "bg-danger-600 border-danger-600",
        text: "text-white"
      },
      primary: {
        root: "bg-primary border-primary",
        text: "text-white"
      }
    },
    size: {
      "2xl": { root: "gap-2.5 px-4" },
      sm: { root: "gap-1.5 px-2.5" },
      xxs: { root: "gap-1 px-1.5" },
      md: { root: "gap-1.5 px-3" },
      base: { root: "gap-2 px-3" },
      lg: { root: "gap-2 px-3.5" },
      xs: { root: "gap-1 px-2" },
      xl: { root: "gap-2 px-4" }
    },
    appearance: {
      outlined: {
        root: "!bg-transparent"
      },
      ghost: {
        root: "border-transparent"
      },
      solid: {}
    }
  },
  slots: {
    root: "inline-flex items-center justify-center rounded-full border no-effect w-fit whitespace-nowrap",
    text: "font-semibold stroke-0 leading-none"
  },
  defaultVariants: {
    appearance: "solid",
    variant: "primary",
    size: "sm"
  }
});

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export { badgeVariants };
export type { BadgeVariantProps };
