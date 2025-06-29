import { cn } from "../../utils/cn";
import { tv } from "tailwind-variants";
export function UIButton({
  className,
  variant = "primary",
  color = "blue",
  size = "md",
  children,
}) {
  const btnClasses = cn(
    "rounded-md",
    className,
    {
      outline: `bg-white border border-${color}-400 text-${color}-400 hover:bg-${color}-300 hover:text-${color}-300 active:bg-${color}-500 active:text-${color}-500`,
      primary: `bg-${color}-400 text-white hover:bg-${color}-300 hover:text-${color}-300 active:bg-${color}-500 active:text-${color}-500`,
    }[variant],
    {
      sm: "text-sm p-2",
      md: "text-base py-2 px-4",
      lg: "text-lg p-6",
    }[size]
  );
  return <button className={btnClasses}>{children}</button>;
}
