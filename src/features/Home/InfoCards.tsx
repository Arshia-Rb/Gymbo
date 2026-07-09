import InfoRow from "./InfoRow";
import { FaDumbbell } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";

function InfoCards() {
  return (
    <ul className="relative mx-auto my-3 flex w-5/6 flex-col gap-2 divide-y divide-stone-800 rounded-2xl border border-stone-800 bg-zinc-950 md:mt-20 md:flex-row md:divide-x md:divide-y-0">
      <li className="p-4">
        <InfoRow
          Icon={FaDumbbell}
          header="Modern Equipment"
          content="Train with the best equipment for maximum results."
        ></InfoRow>
      </li>
      <li className="p-4">
        <InfoRow
          Icon={RiUserStarFill}
          header="Expert Trainers"
          content="Certified trainers to guide you at every step."
        ></InfoRow>
      </li>
      <li className="p-4">
        <InfoRow
          Icon={FaRegCalendar}
          header="Group Classes"
          content="Join various classes that keep you motivated."
        ></InfoRow>
      </li>
      <li className="p-4">
        <InfoRow
          Icon={MdOutlineQrCode2}
          header="QR membership"
          content="Use your given code to enter the gym."
        ></InfoRow>
      </li>
    </ul>
  );
}

export default InfoCards;
