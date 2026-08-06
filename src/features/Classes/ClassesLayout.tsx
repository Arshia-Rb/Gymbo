import Footer from "../../ui/Footer";
import ClassCard from "./ClassCard";

function ClassesLayout() {
  return (
    <>
      <article className="h-fit w-full bg-zinc-950 px-9 py-5 pt-10 text-white">
        <h3 className="mb-2 text-sm text-amber-400">Popular Classes</h3>
        <h2 className="text-lg font-bold tracking-wide text-white">
          Find a class you'll love
        </h2>
        <p className="text-xs text-stone-400">
          Group classes that keep you motivated and consistent
        </p>
        <div className="space-y-6 pt-10 md:flex md:justify-between md:gap-2">
          <ClassCard
            img="images/classes/strength.webp"
            heading="Strength training"
            schedule="Mon, Wed, Fri. 6:00 PM"
            content="Build muscle and get stronger with expert trainers"
          />
          <ClassCard
            img="images/classes/yoga.webp"
            heading="Yoga class"
            schedule="Sun. 7:00 AM"
            content="Improve felexibility, reduce stress, and find your balance"
          />
          <ClassCard
            img="images/classes/boxing.webp"
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
