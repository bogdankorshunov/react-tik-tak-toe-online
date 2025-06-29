import Image from "next/image";
import { cn } from "../../utils/cn";

const sizeMap = {
  xs: "w-6 h-6", // 24 px
  sm: "w-8 h-8", // 32 px
  md: "w-10 h-10", // 40 px (значение «по умолчанию»)
  lg: "w-12 h-12", // 48 px
  xl: "w-16 h-16", // 64 px
};
export function AvatarItem({ src, name, description, size = "md" }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${cn(
          "relative overflow-hidden rounded-full bg-gray-200",
          sizeMap[size],
        )}`}
      >
        <Image src={src} fill className="object-cover" alt="Avatar" />
      </div>
      <div>
        <div className="leading-tight">{name}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
  );
}
