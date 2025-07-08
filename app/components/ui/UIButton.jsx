import { tv } from "tailwind-variants";

/**
 * 1. Описываем правила генерации классов
 */
const button = tv({
  base: `rounded-md font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`,
  variants: {
    variant: {
      primary: "",
      outline: "border",
    },
    color: {
      /* добавляйте нужные цвета по мере необходимости */
      blue: "",
      red: "",
      green: "",
      gray: "",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-4 text-lg",
    },
  },

  /**
   * 2. Комбинированные варианты:
   *    здесь задаём конкретные наборы классов
   *    для каждой пары (variant, color).
   */
  compoundVariants: [
    /* primary */
    {
      variant: "primary",
      color: "blue",
      class: "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600",
    },
    {
      variant: "primary",
      color: "red",
      class: "bg-red-500 text-white hover:bg-red-400 active:bg-red-600",
    },
    {
      variant: "primary",
      color: "green",
      class: "bg-green-500 text-white hover:bg-green-400 active:bg-green-600",
    },
    {
      variant: "primary",
      color: "gray",
      class: "bg-gray-500 text-white hover:bg-gray-400 active:bg-gray-600",
    },

    /* outline */
    {
      variant: "outline",
      color: "blue",
      class: `border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100`,
    },
    {
      variant: "outline",
      color: "red",
      class: `border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100`,
    },
    {
      variant: "outline",
      color: "green",
      class: `border-green-500 text-green-500 hover:bg-green-50 active:bg-green-100`,
    },
    {
      variant: "outline",
      color: "gray",
      class: `border-gray-500 text-gray-500 hover:bg-gray-50 active:bg-gray-100`,
    },
  ],

  /* 3. Значения по умолчанию */
  defaultVariants: {
    variant: "primary",
    color: "blue",
    size: "md",
  },
});

export function UIButton({
  variant,
  color,
  size,
  className,
  children,
  ...rest
}) {
  return (
    <button className={button({ variant, color, size, className })} {...rest}>
      {children}
    </button>
  );
}
