import Button from "../../ui/Button";
import { MdArrowForward } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";

function Hero() {
  return (
    <section className="relative h-fit overflow-hidden bg-black text-white sm:h-screen">
      <div className="md: relative z-10 flex w-50 flex-col gap-1 p-4 sm:w-80 md:mt-20 md:ml-40">
        <h1 className="font-heading text-5xl md:text-6xl">
          STRONGER <span className="text-amber-400">EVERY</span> DAY.
        </h1>
        <p className="mb-2 text-sm leading-6 text-stone-400">
          Join Gymbo fitness and become the strongest version of yourself
        </p>
        <div className="mb-2 flex flex-col gap-3 sm:flex-row">
          <Button type="primary">
            Join Now
            <MdArrowForward className="ml-4 inline size-6" />
          </Button>
          <Button type="secondary">
            <IoPlayCircleOutline className="mr-2 inline size-6" />
            Watch video
          </Button>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 h-64 w-64 zoom-120 object-cover sm:h-120 sm:w-3/4 sm:zoom-100"
        src="../../../public/images/gymGuy5.jpg"
        alt="gym-guy-image"
      />
    </section>
  );
}

export default Hero;
