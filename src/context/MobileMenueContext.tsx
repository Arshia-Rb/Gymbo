import { createContext, type Dispatch, type SetStateAction } from "react";

interface MyContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuContext = createContext<MyContextType | null>(null);
