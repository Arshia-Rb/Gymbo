import Footer from "../../ui/Footer";
import ClassCard from "./ClassCard";

function ClassesLayout() {
  return (
    <>
      <article className="h-fit w-full bg-zinc-950 px-9 py-5 pt-10 text-white">
        <h3 className="mb-2 text-sm text-amber-400">Popular Classes</h3>
        <h2 className="text-lg font-bold text-white">
          Choose the plan that fits you
        </h2>
        <p className="text-xs text-stone-400">
          Flexible plans for every fitness goal.
        </p>
        <div className="space-y-6 pt-10">
          <ClassCard
            img="../../public/images/classes/strength.jpg"
            heading="Strength training"
            schedule="Mon, Wed, Fri. 6:00 PM"
            content="Build muscle and get stronger with expert trainers"
          />
          <ClassCard
            img="../../public/images/classes/yoga.jpg"
            heading="Yoga class"
            schedule="Sun. 7:00 AM"
            content="Improve felexibility, reduce stress, and find your balance"
          />
          <ClassCard
            img="../../public/images/classes/boxing.jpg"
            heading="Boxing training"
            schedule="Sat. 10:00 AM"
            content="Fun, high-energy boxing workout for all levels."
          />
        </div>
      </article>
      <Footer />
    </>
  );
}

export default ClassesLayout;
