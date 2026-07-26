import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import NavBar from "../ui/NavBar";
import IconContainer from "../ui/IconContainer";

function About() {
  return (
    <>
      <NavBar />
      <div className="h-dvh bg-zinc-950 p-10 text-white">
        <h2 className="font-heading text-4xl font-bold tracking-wide">
          ABOUT <span className="text-amber-400">US</span>
        </h2>
        <p className="mt-5 text-lg">
          At Gymbo, we try to provide the best possible service, to those who
          need professional help in their fitness journey.
        </p>
        <div className="mt-10 rounded-2xl border border-stone-700 bg-neutral-900 p-4">
          <h2 className="text-lg font-bold">Contact us:</h2>

          <p className="mt-6 flex items-center gap-2">
            <IconContainer Icon={FaPhone} />
            +1(555)123-4567
          </p>
          <p className="mt-6 flex items-center gap-2">
            <IconContainer Icon={FaLocationDot} />
            123 Fitness St, Fit city, FC 1234
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
