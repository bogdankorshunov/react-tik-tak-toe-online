import { ChevronDown } from "lucide-react";
import { UIAvatarItem } from "@/ui/UIAvatarItem";
import { UIButton } from "@/ui/UIButton";
import { cn } from "@/lib/cn";
import srcAvatar from "@/public/images/avatar.jpg";

export function Header({ className }) {
  return (
    <header className={cn("bg-slate-50 p-4 shadow", className)}>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src="/images/logo.svg" alt="logo" width={32} height={32} />
          <UIButton>Играть</UIButton>
          <div className="flex items-center gap-2">
            <UIAvatarItem
              src={srcAvatar}
              name="Brad Pitt"
              description="Рейтинг: 322"
            />
            <ChevronDown className="text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
