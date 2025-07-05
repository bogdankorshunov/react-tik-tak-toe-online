import srcAvatar from "../../public/images/avatar.jpg";
import { ChevronDown } from "lucide-react";
import { AvatarItem } from "./tik-tak/avatar-item";
import { UIButton } from "./ui-kit/ui-button";

export function Header({}) {
  return (
    <header className="bg-slate-50 p-4 shadow">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src="/images/logo.svg" alt="logo" width={32} height={32} />
          <UIButton>Играть</UIButton>
          <div className="flex items-center gap-2">
            <AvatarItem
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
