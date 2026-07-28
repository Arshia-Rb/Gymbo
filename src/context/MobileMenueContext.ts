import { createContext, type Dispatch, type SetStateAction } from "react";

interface MobileContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuContext = createContext<MobileContextType | null>(null);
