import { useContext, useEffect } from "react";
import { MobileMenuContext } from "../context/MobileMenueContext";

function Overlay() {
  const { setIsMenuOpen } = useContext(MobileMenuContext)!;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    ></div>
  );
}

export default Overlay;
