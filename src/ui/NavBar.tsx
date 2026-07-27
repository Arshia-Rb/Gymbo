import { useContext } from "react";
import Button from "./Button";
import NavBarLinks from "./NavBarLinks";
import { HiOutlineMenu } from "react-icons/hi";
import { MobileMenuContext } from "../context/MobileMenueContext";
import Logo from "./Logo";
import { useNavigate } from "react-router";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const { setIsMenuOpen } = useContext(MobileMenuContext)!;
  const { isMenuOpen } = useContext(MobileMenuContext)!;

  const navigate = useNavigate();

  function handleMenuClick() {
    setIsMenuOpen((state) => !state);
  }

  return (
    <nav className="sticky top-0 left-0 z-40 flex w-full justify-between bg-black px-4 py-2 text-white sm:px-8">
      {isMenuOpen && <MobileMenu />}
      <Logo />
      <NavBarLinks parentClassName="hidden sm:flex sm:items-center sm:gap-6 sm:text-base sm:font-semibold" />
      <div className="hidden sm:flex sm:gap-4">
        <Button onClick={() => navigate("/login")} type="secondary">
          Log In
        </Button>
        <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
      </div>
      <button onClick={handleMenuClick} className="sm:hidden">
        <HiOutlineMenu className="h-8 w-8" />
      </button>
    </nav>
  );
}

export default NavBar;
