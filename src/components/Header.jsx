import Image from "next/image";
import srcLogo from "../../public/images/logo.svg";
import srcAvatar from "../../public/images/avatar.jpg";
import { ChevronDown } from "lucide-react";
import { AvatarItem } from "./tik-tak/avatar-item";
import { UIButton } from "./ui-kit/ui-button";

export function Header({}) {
  return (
    <header className="p-4 bg-slate-50 shadow">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Image width={32} height={32} src={srcLogo} alt="logo" />
          <UIButton variant="outline">Играть</UIButton>
          <div className="flex gap-2 items-center">
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
