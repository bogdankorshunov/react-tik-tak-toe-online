import { cn } from "@/lib/cn";

export function GameLayout({
  children,
  backLink,
  title,
  info,
  className,
  playersList,
}) {
  return (
    <div>
      <div className={cn("container mx-auto max-w-2xl px-4", className)}>
        {backLink}
        {title}
        {info}
        {children}
      </div>
      <div className="container mx-auto mt-4 max-w-2xl px-4">
        <div
          className={`${cn("grid grid-cols-2 gap-8 rounded-xl border border-gray-100 bg-white px-8 py-6 shadow-xl", className)}`}
        >
          {playersList}
        </div>
      </div>
    </div>
  );
}
