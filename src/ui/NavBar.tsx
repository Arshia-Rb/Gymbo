import Button from "./Button";
import NavBarLinks from "./NavBarLinks";
import { HiOutlineMenu } from "react-icons/hi";

function NavBar() {
  return (
    <nav className="flex justify-between bg-black px-4 py-4 text-white sm:px-8">
      <span className="cursor-pointer text-3xl font-bold">
        Gym<span className="font-logo font-medium text-amber-400">bo</span>
      </span>
      <NavBarLinks className="hidden sm:flex sm:items-center sm:gap-6 sm:text-base sm:font-semibold" />
      <div className="hidden sm:flex sm:gap-4">
        <Button type="secondary">Log In</Button>
        <Button>Sign Up</Button>
      </div>
      <button className="sm:hidden">
        <HiOutlineMenu className="h-8 w-8" />
      </button>
    </nav>
  );
}

export default NavBar;
