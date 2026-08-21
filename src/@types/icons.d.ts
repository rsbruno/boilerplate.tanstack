import type { ComponentType, SVGProps } from "react";

export type IconButtonProps = {
  name: ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;
  position?: "left" | "center" | "right";
  className?: string;
  size?: number;
};
