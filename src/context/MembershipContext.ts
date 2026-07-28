import { createContext, type Dispatch, type SetStateAction } from "react";

interface MembershipContextType {
  hasMembership: boolean;
  setHasMembership: Dispatch<SetStateAction<boolean>>;
}

export const MembershipContext = createContext<MembershipContextType | null>(
  null,
);
