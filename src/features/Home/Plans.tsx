import PricingCard from "../../ui/PricingCard";

export interface PlanStructure {
  title: string;
  subTitle?: string;
  price: number;
  tags: string[];
}

const basicPlan: PlanStructure = {
  title: "Basic",
  subTitle: "Start your fitness journey",
  price: 29,
  tags: [
    "Accses to gym equipments",
    "Locker room access",
    "1 free group class / month",
  ],
};

const proPLan: PlanStructure = {
  title: "Pro",
  subTitle: "Take your training to the next level.",
  price: 59,
  tags: [
    "All Basic features ",
    "Unlimited group classes",
    "Personalized workout plan",
    "10% off on supplements",
  ],
};
const elitePlan: PlanStructure = {
  title: "Elite",
  subTitle: "For those who want the best",
  price: 89,
  tags: [
    "All Pro features ",
    "1 Personal training / week",
    "Nutrition consultation",
    "20% off on supplements",
  ],
};

function Plans() {
  return (
    <section className="w-full border-y-2 border-stone-800 bg-zinc-950 px-9 py-5">
      <h3 className="mb-2 text-sm text-amber-400">Membership plans</h3>
      <h2 className="text-lg font-bold text-white">
        Choose the plan that fits you
      </h2>
      <p className="text-xs text-stone-400">
        Flexible plans for every fitness goal.
      </p>

      <div className="flex flex-col md:flex-row md:gap-8">
        <PricingCard plan={basicPlan} />
        <PricingCard plan={proPLan} mostPopular={true} />
        <PricingCard plan={elitePlan} />
      </div>
    </section>
  );
}

export default Plans;
