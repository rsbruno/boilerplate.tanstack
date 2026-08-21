import { type ComponentPropsWithoutRef, type ElementType } from "react";
import { twMerge } from "tailwind-merge";

import type { VariantProps } from "./styles";

import { Skeleton } from "../skeleton";
import { variants } from "./styles";

type TypographyProps<T extends ElementType> = {
  className?: string;
  as?: T;
  loading?: boolean;
} & VariantProps &
  Omit<ComponentPropsWithoutRef<T>, "className" | "size" | "translate">;

function Typography<T extends ElementType = "span">({
  className,
  children,
  variant,
  loading,
  color,
  size,
  as,
  ...props
}: TypographyProps<T>) {
  const { skeleton, root } = variants({ variant, color, size });

  const Component = as || "span";

  if (loading) return <Skeleton className={twMerge(skeleton(), className)} {...props} />;

  return (
    <Component className={twMerge(className, root())} data-slot="typography" {...props}>
      {children}
    </Component>
  );
}

export { Typography };
export type { TypographyProps };
