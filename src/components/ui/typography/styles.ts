import { type VariantProps as Props, tv } from "tailwind-variants";

const variants = tv(
  {
    variants: {
      size: {
        base: {
          skeleton: "h-[var(--text-base--line-height)] rounded-[3px]",
          root: "text-base"
        },
        "2xl": {
          skeleton: "h-[var(--text-2xl--line-height)] rounded-[3px]",
          root: "text-2xl"
        },
        xxs: {
          skeleton: "h-[var(--text-xxs--line-height)] rounded-[3px]",
          root: "text-xxs"
        },
        xs: {
          skeleton: "h-[var(--text-xs--line-height)] rounded-[3px]",
          root: "text-xs"
        },
        sm: {
          skeleton: "h-[var(--text-sm--line-height)] rounded-[3px]",
          root: "text-sm"
        },
        md: {
          skeleton: "h-[var(--text-md--line-height)] rounded-[3px]",
          root: "text-md"
        },
        lg: {
          skeleton: "h-[var(--text-lg--line-height)] rounded-[3px]",
          root: "text-lg"
        },
        xl: {
          skeleton: "h-[var(--text-xl--line-height)] rounded-[3px]",
          root: "text-xl"
        }
      },
      color: {
        "100": {
          root: "text-typography-100"
        },
        "200": {
          root: "text-typography-200"
        },
        "250": {
          root: "text-typography-250"
        },
        "300": {
          root: "text-typography-300"
        },
        "350": {
          root: "text-typography-350"
        },
        "400": {
          root: "text-typography-400"
        },
        "500": {
          root: "text-typography-500"
        },
        "600": {
          root: "text-typography-600"
        },
        "700": {
          root: "text-typography-700"
        },
        "800": {
          root: "text-typography-800"
        },
        "900": {
          root: "text-typography-900"
        },
        "950": {
          root: "text-typography-950"
        },
        "50": {
          root: "text-typography-50"
        },
        base: {
          root: "text-typography"
        },
        custom: {
          root: ""
        }
      },
      variant: {
        semibold: {
          root: "font-semibold"
        },
        regular: {
          root: "font-normal"
        },
        medium: {
          root: "font-medium"
        },
        light: {
          root: "font-light"
        },
        bold: {
          root: "font-bold"
        }
      }
    },
    defaultVariants: {
      variant: "regular",
      color: "base",
      size: "base"
    },
    slots: {
      skeleton: "min-w-20",
      root: ""
    }
  },
  {
    twMerge: false
  }
);

type VariantProps = Props<typeof variants>;

export { variants };
export type { VariantProps };
