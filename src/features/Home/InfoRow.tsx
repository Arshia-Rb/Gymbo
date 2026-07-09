import type { IconType } from "react-icons";
import IconContainer from "../../ui/IconContainer";

interface InfoRowProps {
  header: string;
  content: string;
  Icon: IconType;
}

function InfoRow({ header, content, Icon }: InfoRowProps) {
  return (
    <div className="flex items-center gap-4">
      <IconContainer Icon={Icon} />
      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-bold">{header}</h3>
        <p className="text-xs text-stone-400">{content}</p>
      </div>
    </div>
  );
}

export default InfoRow;
