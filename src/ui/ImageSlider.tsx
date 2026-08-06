import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images: string[] = [
  "gymEnvironment.webp",
  "gymEnvironment1.webp",
  "gymEnvironment3.webp",
];

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  //Logic for iterating between images inside the array
  function handlePrev() {
    setImageIndex((current) => (current - 1 + images.length) % images.length);
  }
  function handleNext() {
    setImageIndex((current) => (current + 1) % images.length);
  }
  //

  return (
    //Only one of these parent divs gets rendered, based on the screen size
    <>
      <div className="mt-10 flex justify-center gap-4 md:hidden">
        <button
          className="rounded-full text-2xl text-stone-400 hover:cursor-pointer hover:bg-zinc-900 hover:text-amber-400 active:bg-zinc-900"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>
        <img
          src={`images/environment/${images[imageIndex]}`}
          className="h-45 w-3/4 rounded-2xl border-4 border-zinc-900 object-cover md:h-80"
        />
        <button
          onClick={handleNext}
          className="rounded-full text-2xl text-stone-400 hover:cursor-pointer hover:bg-zinc-900 hover:text-amber-400 active:bg-zinc-900"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div className="mt-10 hidden gap-4 md:flex">
        {images.map((imgSrc) => (
          <img
            src={`images/environment/${imgSrc}`}
            className="w-1/3 rounded-2xl border-4 border-zinc-900 object-cover"
          />
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
