import { cn } from "@/lib/cn";

export function GameCell({ onClick, children, isWinning, disabled }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "-mt-px -ml-px flex items-center justify-center border border-gray-300",
        isWinning && "border-green-400 bg-green-200",
        disabled && "cursor-not-allowed opacity-50",
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
