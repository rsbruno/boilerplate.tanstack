import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { twMerge } from "tailwind-merge";

interface AvatarImageProps extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

const AvatarImage = forwardRef<ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(({ className, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      className={twMerge("aspect-square size-full object-cover", className)}
      data-slot="avatar-image"
      alt="Foto de perfil"
      ref={ref}
      {...props}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

export { AvatarImage };
export type { AvatarImageProps };
