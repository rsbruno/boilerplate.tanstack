import { useToastContext } from "./context";

function ToastBadge() {
  const { slots } = useToastContext("ToastBadge");
  return <span className={slots.badge()} />;
}

export { ToastBadge };
