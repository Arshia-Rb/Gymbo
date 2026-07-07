import { useContext } from "react";
import { NavLink } from "react-router";
import { MobileMenuContext } from "../context/MobileMenueContext";

interface NavBarLinksProps {
  parentClassName?: string;
}

function NavBarLinks({ parentClassName }: NavBarLinksProps) {
  const { isMenuOpen, setIsMenuOpen } = useContext(MobileMenuContext)!;

  return (
    <div className={parentClassName}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `w-2/3 pb-3 text-center sm:w-max sm:p-0 ${isActive ? "text-amber-400" : "text-white"}`
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to={"/membership"}
        className={({ isActive }) =>
          `w-2/3 pb-3 text-center sm:w-max sm:p-0 ${isActive ? "text-amber-400" : "text-white"}`
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        Membership
      </NavLink>

      <NavLink
        to={"/classes"}
        className={({ isActive }) =>
          `w-2/3 pb-3 text-center sm:w-max sm:p-0 ${isActive ? "text-amber-400" : "text-white"}`
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        Classes
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          `w-2/3 pb-3 text-center sm:w-max sm:p-0 ${isActive ? "text-amber-400" : "text-white"}`
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        About
      </NavLink>
    </div>
  );
}

export default NavBarLinks;
