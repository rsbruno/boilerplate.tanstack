import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";

export type IconButtonProps = {
  name: IconType | ComponentType<SVGProps<SVGSVGElement>>;
  position?: "left" | "center" | "right";
  className?: string;
  size?: number;
};
