import type { IconType } from "react-icons";

interface IconContainerProps {
  Icon: IconType;
}

function IconContainer({ Icon }: IconContainerProps) {
  return (
    <div className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-stone-800">
      <Icon className="w-full text-amber-400" />
    </div>
  );
}

export default IconContainer;
