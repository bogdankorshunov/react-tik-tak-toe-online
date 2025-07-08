import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function GameBackLink({ href }) {
  return (
    <div className="mb-2 flex items-center gap-1 text-blue-500 hover:text-blue-400 hover:underline">
      <ArrowLeft size={20} />
      <Link href="#">На главную</Link>
    </div>
  );
}
