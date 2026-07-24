import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-black px-8 py-6">
      <div className="flex justify-between md:justify-around">
        <div>
          <h3 className="mb-2 text-base font-bold text-white">Quick links</h3>
          <div className="flex flex-col items-center gap-4 text-xs text-stone-400">
            <Link to="/classes">Classes</Link>
            <Link to="/about">Membership</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="basis-1/3">
          <h3 className="mb-2 text-base font-bold text-white">Contact Us</h3>
          <div className="flex flex-col gap-4 text-xs text-stone-400">
            <p>
              <span>
                <FaPhone className="text-amber-400" />
              </span>
              +1(555)123-4567
            </p>
            <p>
              <span>
                <FaLocationDot className="text-amber-400" />
              </span>
              123 Fitness St, Fit city, FC 1234
            </p>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-white">Follow us</h3>
          <div className="flex gap-2">
            <a href="#">
              <FaInstagram className="size-8 text-stone-400 transition-all hover:text-rose-600" />
            </a>
            <a href="#">
              <FaYoutube className="size-8 text-stone-400 transition-all hover:text-red-700" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-stone-400">
        &copy; All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
