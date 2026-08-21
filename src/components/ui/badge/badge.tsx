import { type ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";

import type { BadgeVariantProps } from "./styles";

import { badgeVariants } from "./styles";

type BaseProps = BadgeVariantProps & {
  size?: ComponentProps<typeof Typography>["size"];
  asChild?: boolean;
  loading?: boolean;
};

interface BadgeProps extends BaseProps, Omit<ComponentProps<"span">, keyof BaseProps> {}

function Badge({ size = "sm", appearance, className, children, variant, asChild, loading, ref, ...props }: BadgeProps) {
  const { text, root } = badgeVariants({ appearance, variant, size });

  const Comp = asChild ? Slot : "span";

  if (loading) return <Skeleton className={twMerge(root(), "w-10", className)} />;

  return (
    <Comp className={twMerge(root(), className)} data-slot="badge" ref={ref} {...props}>
      <Typography variant="semibold" className={text()} color="custom" size={size}>
        {children}
      </Typography>
    </Comp>
  );
}
Badge.displayName = "Badge";

export { Badge };
export type { BadgeProps };
