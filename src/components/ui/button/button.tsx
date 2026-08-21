import type { ComponentPropsWithoutRef, PropsWithChildren, ComponentProps, ElementType } from "react";

import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

import type { IconButtonProps } from "@/@types/icons";

import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { ShowIf } from "@/components/utils/show";

import type { ButtonVariantProps } from "./styles";

import { buttonVariants } from "./styles";

type BaseProps = Omit<ButtonVariantProps, "icon"> & {
  icon?: IconButtonProps;
  pending?: boolean;
  loading?: boolean;
  as?: ElementType;
  text?: string;
  href?: string;
  appearance?: "solid" | "outlined" | "ghost" | "link";
};

type ButtonProps<T extends ElementType = "button"> = PropsWithChildren<
  BaseProps & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps>
> &
  Pick<ComponentProps<"button">, "ref">;

function Button<T extends ElementType = "button">({
  appearance,
  className,
  children,
  outlined,
  disabled,
  variant,
  pending,
  loading,
  ghost,
  icon,
  size,
  text,
  link,
  as,
  ...props
}: ButtonProps<T>) {
  const {
    text: typography,
    icon: iconStyles,
    spinnerRoot,
    skeleton,
    spinner,
    root
  } = buttonVariants({
    variant: disabled ? "disabled" : variant,
    icon: icon?.position,
    appearance,
    className,
    outlined,
    ghost,
    size,
    link
  });

  const Comp = as || "button";
  const dataSlot = Comp === Link || Comp === "a" ? "link" : Comp === "button" ? "button" : "custom";

  const Icon = icon?.name;

  if (loading) return <Skeleton className={skeleton()} />;

  if (children) {
    return (
      <Comp {...props} className={twMerge(root(), className)} data-slot={dataSlot}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      {...props}
      type={Comp === "button" ? (props.type ?? "button") : undefined}
      className={twMerge(root(), className)}
      disabled={disabled || pending}
      data-slot={dataSlot}
    >
      <ShowIf if={Boolean(pending)}>
        <span className={spinnerRoot()}>
          <Spinner className={spinner()} />
        </span>
      </ShowIf>
      <ShowIf if={Boolean(Icon)}>{Icon && <Icon className={twMerge(iconStyles(), icon?.className)} size={icon?.size} />}</ShowIf>
      <ShowIf if={Boolean(text)}>
        <Typography className={twMerge(typography())} color="custom">
          {text}
        </Typography>
      </ShowIf>
    </Comp>
  );
}

export { Button };
export type { ButtonProps };
