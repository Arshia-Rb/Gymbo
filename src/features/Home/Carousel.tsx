import ImageSlider from "../../ui/ImageSlider";

function Carousel() {
  return (
    <section className="w-full border-y-2 bg-black px-9 py-5 pb-10">
      <h3 className="mb-2 text-sm text-amber-400">Gym enviroment</h3>
      <h2 className="text-lg font-bold text-white">
        Check out our gym enviroment
      </h2>
      <ImageSlider />
    </section>
  );
}

export default Carousel;
