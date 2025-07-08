import { cn } from "@/lib/cn";

export function GameTitle({ className }) {
  return (
    <div className={`${cn(className)}`}>
      <h1 className="mb-2 text-4xl">Крестики нолики</h1>
    </div>
  );
}
