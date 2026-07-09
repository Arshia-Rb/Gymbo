import type { PlanStructure } from "../features/Home/Plans";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";

interface PricingCardProps {
  plan: PlanStructure;
  mostPopular?: boolean;
}

function PricingCard({ plan, mostPopular }: PricingCardProps) {
  return (
    <div
      className={`relative my-6 h-80 w-full rounded-2xl border-2 ${mostPopular ? "border-amber-400" : "border-stone-800"} bg-neutral-950 p-6`}
    >
      {mostPopular && (
        <span className="absolute -top-9 right-1/2 translate-1/2 rounded-sm bg-amber-400 px-4 py-2 text-sm font-bold text-black">
          Most Popular
        </span>
      )}
      <h3 className="font-bold text-white">{plan.title}</h3>
      <p className="text-xs text-stone-400">{plan.subTitle}</p>
      <h2 className="my-4 text-xs font-bold text-white">
        <strong className="mr-1 text-3xl">${plan.price}</strong> /month
      </h2>
      <ul className="flex h-32 flex-col gap-3 text-xs text-stone-400">
        {plan.tags.map((element) => (
          <li>
            <FaCheck className="mr-1 inline text-amber-400" />
            {element}
          </li>
        ))}
      </ul>

      {mostPopular ? (
        <Button type="mostPopular">Choose Plan</Button>
      ) : (
        <Button type="pricing">Choose Plan</Button>
      )}
    </div>
  );
}

export default PricingCard;
