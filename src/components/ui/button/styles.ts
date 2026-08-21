import { type VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  compoundVariants: [
    {
      class: {
        root: "!p-0"
      },
      icon: "center"
    },
    {
      class: {
        text: "text-primary hover:underline underline-offset-2"
      },
      variant: "primary",
      link: true
    },
    {
      class: {
        spinner: "stroke-primary",
        spinnerRoot: "bg-white",
        icon: "text-primary",
        text: "text-primary"
      },
      variant: "primary",
      outlined: true
    },
    {
      class: {
        spinner: "stroke-typography-700",
        icon: "text-typography-700",
        text: "text-typography-700",
        spinnerRoot: "bg-white"
      },
      variant: "secondary",
      outlined: true
    },
    {
      class: {
        spinner: "stroke-success-700",
        icon: "text-success-700",
        text: "text-success-700",
        spinnerRoot: "bg-white"
      },
      variant: "success",
      outlined: true
    },
    {
      class: {
        spinner: "stroke-danger-700",
        spinnerRoot: "bg-white",
        icon: "text-danger-700",
        text: "text-danger-700"
      },
      variant: "danger",
      outlined: true
    },
    {
      class: {
        spinner: "stroke-warning-700",
        icon: "text-warning-700",
        text: "text-warning-700",
        spinnerRoot: "bg-white"
      },
      variant: "warning",
      outlined: true
    },
    {
      class: {
        spinner: "stroke-typography-700",
        icon: "text-typography-700",
        text: "text-typography-700",
        spinnerRoot: "bg-white"
      },
      variant: "surface",
      outlined: true
    },
    {
      class: {
        root: "!bg-gray-200 !border-gray-300",
        spinner: "stroke-typography-500",
        icon: "text-typography-500",
        text: "text-typography-500",
        spinnerRoot: "bg-gray-200"
      },
      variant: "disabled",
      outlined: true
    },
    {
      class: {
        root: "hover:!bg-primary/10",
        spinner: "stroke-primary",
        spinnerRoot: "bg-white",
        icon: "text-typography",
        text: "text-primary"
      },
      variant: "primary",
      ghost: true
    },
    {
      class: {
        spinner: "stroke-secondary-700",
        root: "hover:!bg-secondary/10",
        icon: "text-secondary-700",
        text: "text-secondary-700",
        spinnerRoot: "bg-white"
      },
      variant: "secondary",
      ghost: true
    },
    {
      class: {
        root: "hover:!bg-success/10",
        spinner: "stroke-success",
        spinnerRoot: "bg-white",
        icon: "text-success",
        text: "text-success"
      },
      variant: "success",
      ghost: true
    },
    {
      class: {
        root: "hover:!bg-danger/10",
        spinner: "stroke-danger",
        spinnerRoot: "bg-white",
        icon: "text-danger",
        text: "text-danger"
      },
      variant: "danger",
      ghost: true
    },
    {
      class: {
        root: "hover:!bg-warning/10",
        spinner: "stroke-warning",
        spinnerRoot: "bg-white",
        icon: "text-warning",
        text: "text-warning"
      },
      variant: "warning",
      ghost: true
    },
    {
      class: {
        root: "hover:!bg-typography-200/30",
        spinnerRoot: "bg-typography-100",
        spinner: "stroke-typography",
        icon: "text-typography",
        text: "text-typography"
      },
      variant: "surface",
      ghost: true
    },
    {
      class: {
        root: "!bg-gray-200 !border-gray-300",
        spinner: "stroke-typography-500",
        icon: "text-typography-500",
        text: "text-typography-500",
        spinnerRoot: "bg-gray-200"
      },
      variant: "disabled",
      ghost: true
    },
    {
      class: {
        root: "hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 focus-visible:ring-primary-500/35",
        typography: "!text-white",
        spinnerRoot: "bg-primary",
        spinner: "stroke-white",
        icon: "text-white"
      },
      appearance: "solid",
      variant: "primary"
    },
    {
      class: {
        root: "hover:bg-secondary-600 hover:border-secondary-600 active:bg-secondary-700 active:border-secondary-700 focus-visible:ring-secondary-500/35"
      },
      variant: "secondary",
      appearance: "solid"
    },
    {
      class: {
        root: "border-primary hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500/35",
        spinnerRoot: "bg-typography-50",
        spinner: "stroke-primary",
        text: "!text-primary",
        icon: "!text-primary"
      },
      appearance: "outlined",
      variant: "primary"
    },
    {
      class: {
        root: "border-secondary hover:bg-secondary-50 active:bg-secondary-100 focus-visible:ring-secondary-500/35",
        spinnerRoot: "bg-typography-50",
        spinner: "stroke-secondary",
        text: "!text-secondary",
        icon: "!text-secondary"
      },
      appearance: "outlined",
      variant: "secondary"
    },
    {
      class: {
        root: "hover:bg-primary-100 active:bg-primary-200 focus-visible:ring-primary-500/35",
        spinnerRoot: "bg-primary-50",
        spinner: "stroke-primary",
        text: "!text-primary-700",
        icon: "!text-primary-700"
      },
      appearance: "ghost",
      variant: "primary"
    },
    {
      class: {
        root: "!bg-secondary-50 hover:!bg-secondary-100 active:!bg-secondary-200 focus-visible:ring-secondary-500/35",
        spinner: "stroke-secondary-700",
        spinnerRoot: "bg-secondary-50",
        text: "!text-secondary-700",
        icon: "!text-secondary-700"
      },
      variant: "secondary",
      appearance: "ghost"
    },
    {
      class: {
        root: "!bg-danger-50 hover:!bg-danger-100 active:!bg-danger-200 focus-visible:ring-danger-500/35",
        spinner: "stroke-danger-700",
        spinnerRoot: "bg-danger-50",
        text: "!text-danger-700",
        icon: "!text-danger-700"
      },
      appearance: "ghost",
      variant: "danger"
    },
    {
      class: {
        text: "!text-primary hover:underline underline-offset-2",
        root: "focus-visible:ring-primary-500/35",
        icon: "!text-primary"
      },
      appearance: "link",
      variant: "primary"
    },
    {
      class: {
        text: "!text-secondary hover:underline underline-offset-2",
        root: "focus-visible:ring-secondary-500/35",
        icon: "!text-secondary"
      },
      variant: "secondary",
      appearance: "link"
    },
    {
      class: {
        text: "!text-typography-700 hover:underline underline-offset-2",
        root: "focus-visible:ring-gray-500/35",
        icon: "!text-typography-700"
      },
      variant: "surface",
      appearance: "link"
    }
  ],
  variants: {
    variant: {
      surface: {
        root: "bg-gray-100 border-gray-200",
        spinner: "stroke-typography-700",
        text: "text-typography-900",
        icon: "text-typography-700",
        spinnerRoot: "bg-gray-100"
      },
      disabled: {
        root: "bg-gray-200 border-gray-300 cursor-not-allowed",
        text: "text-typography-500",
        icon: "text-typography-500",
        spinnerRoot: "bg-gray-200"
      },
      chrome: {
        root: "bg-white border-gray-200 hover:bg-gray-50 focus-visible:ring-primary-500/35",
        icon: "text-typography-900",
        spinnerRoot: "bg-white"
      },
      success: {
        root: "bg-success-600 border-success-600",
        spinnerRoot: "bg-success-600",
        spinner: "stroke-white",
        icon: "text-white"
      },
      warning: {
        root: "bg-warning-600 border-warning-600",
        spinnerRoot: "bg-warning-600",
        spinner: "stroke-white",
        icon: "text-white"
      },
      secondary: {
        root: "bg-secondary border-secondary",
        spinnerRoot: "bg-secondary",
        spinner: "stroke-white",
        icon: "text-white"
      },
      danger: {
        root: "bg-danger-600 border-danger-600",
        spinnerRoot: "bg-danger-600",
        spinner: "stroke-white",
        icon: "text-white"
      },
      primary: {
        root: "bg-primary border-primary",
        spinnerRoot: "bg-primary",
        spinner: "stroke-white",
        icon: "text-white"
      }
    },
    appearance: {
      link: {
        root: "!bg-transparent !h-min !min-h-0 !min-w-0 !p-0 border-none rounded-sm transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none"
      },
      /* "Quiet" do Andes: fundo da marca translúcido já em repouso — é o secundário real do ML, não um transparente. */
      ghost: {
        root: "bg-primary-50 border-transparent transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none"
      },
      outlined: {
        root: "!bg-transparent transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none"
      },
      solid: {
        root: "transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none"
      }
    },
    /* Escala Andes: 32 / 36 / 40 / 48px. O padding cresce junto com a altura pra manter a proporção do ML. */
    size: {
      xs: {
        root: "h-app-xs min-w-app-xs min-h-app-xs gap-1.5 px-3",
        skeleton: "h-app-xs min-w-app-xs min-h-app-xs",
        text: "text-xs!"
      },
      sm: {
        root: "h-app-sm min-w-app-sm min-h-app-sm gap-2 px-4",
        skeleton: "h-app-sm min-w-app-sm min-h-app-sm",
        text: "text-sm!"
      },
      base: {
        root: "h-app min-w-app min-h-app px-5",
        skeleton: "h-app min-w-app min-h-app",
        text: "text-md!"
      },
      lg: {
        root: "h-12 min-h-12 min-w-12 px-6",
        skeleton: "h-12 min-h-12 min-w-12",
        text: "text-base!"
      }
    },
    icon: {
      right: {
        root: "flex-row-reverse"
      },
      center: {
        root: "flex-row"
      },
      left: {
        root: "flex-row"
      }
    },
    link: {
      true: {
        root: "!bg-transparent border-none p-0 h-min rounded-none"
      }
    },
    ghost: {
      true: {
        root: "bg-transparent border-transparent px-2"
      }
    },
    outlined: {
      true: {
        root: "!bg-transparent"
      }
    }
  },
  slots: {
    /* Anel de foco no padrão Andes/ML: 3px translúcido colado na borda, sem offset — o halo deslocado lê como Bootstrap. */
    root: "inline-flex gap-2 items-center justify-center cursor-pointer border no-effect relative overflow-hidden rounded-md select-none focus-visible:ring-[3px] focus-visible:ring-offset-0",
    text: "font-semibold stroke-0 text-typography-50 leading-none whitespace-nowrap",
    spinnerRoot: "flex-center bg-primary absolute top-0 left-0 size-full",
    spinner: "text-typography-50 size-6",
    skeleton: "rounded-md",
    icon: "stroke-2"
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
    icon: "left"
  }
});

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export { buttonVariants };
export type { ButtonVariantProps };
