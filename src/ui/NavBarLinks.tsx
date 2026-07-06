import { NavLink } from "react-router";

function NavBarLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "text-amber-400" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/membership"}
        className={({ isActive }) =>
          isActive ? "text-amber-400" : "text-white"
        }
      >
        Membership
      </NavLink>
      <NavLink
        to={"/classes"}
        className={({ isActive }) =>
          isActive ? "text-amber-400" : "text-white"
        }
      >
        Classes
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "text-amber-400" : "text-white"
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default NavBarLinks;
