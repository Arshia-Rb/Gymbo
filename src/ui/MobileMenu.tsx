import { useContext } from "react";
import { MobileMenuContext } from "../context/MobileMenueContext";
import NavBarLinks from "./NavBarLinks";
import { VscClose } from "react-icons/vsc";
import Button from "./Button";
import { useNavigate } from "react-router";

function MobileMenu() {
  const { setIsMenuOpen } = useContext(MobileMenuContext)!;

  const navigate = useNavigate();

  function handleCloseMenu() {
    setIsMenuOpen((state) => !state);
  }

  return (
    <menu className="fixed right-0 z-50 flex h-dvh w-2/3 flex-col border-l border-stone-300 bg-black font-semibold text-white sm:hidden">
      <button onClick={handleCloseMenu} className="mt-6 mr-6 ml-auto">
        <VscClose className="h-8 w-8" />
      </button>

      <NavBarLinks parentClassName="flex flex-col items-center gap-4 divide-y divide-stone-400" />
      <div className="mt-5 flex justify-center gap-4">
        <Button
          onClick={() => {
            navigate("/login");
            handleCloseMenu();
          }}
          type="secondary"
        >
          Log In
        </Button>
        <Button
          onClick={() => {
            navigate("/sign-up");
            handleCloseMenu();
          }}
        >
          Sign Up
        </Button>
      </div>
    </menu>
  );
}

export default MobileMenu;
