import { useNavigate } from "react-router";
import type { PlanStructure } from "../features/Home/Plans";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";

interface PricingCardProps {
  plan: PlanStructure;
}

function PricingCard({ plan }: PricingCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative my-6 h-80 w-full rounded-2xl border-2 ${plan.mostPopular ? "border-amber-400" : "border-stone-800"} bg-neutral-950 p-6`}
    >
      {plan.mostPopular && (
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

      <Button
        onClick={() => navigate("/login")}
        type={`${plan.mostPopular ? "mostPopular" : "pricing"}`}
      >
        Choose Plan
      </Button>
    </div>
  );
}

export default PricingCard;
