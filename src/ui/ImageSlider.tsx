import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images: string[] = [
  "gymEnvironment.jpg",
  "gymEnvironment1.jpg",
  "gymEnvironment3.jpg",
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
    <div className="mt-10 flex">
      <button onClick={handlePrev} className="text-2xl text-stone-400">
        <IoIosArrowBack />
      </button>
      <img
        src={`../../public/images/environment/${images[imageIndex]}`}
        className="mx-auto max-w-3/4 rounded-2xl border-4 border-stone-400 object-cover shadow-md shadow-stone-400"
      />
      <button onClick={handleNext} className="text-2xl text-stone-400">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ImageSlider;
