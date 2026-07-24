import { useContext } from "react";
import Plans from "../Home/Plans";
import { MembershipContext } from "../../context/MembershipContext";
import MembershipInfo from "./MembershipInfo";

function MembershipLayout() {
  const { hasMembership } = useContext(MembershipContext)!;

  return hasMembership ? (
    <>
      <div className="h-fit bg-zinc-950 px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          You don't have an active membership plan!
        </h2>
      </div>
      <Plans />
    </>
  ) : (
    <>
      <div className="flex min-h-dvh flex-col items-center bg-zinc-950 px-4 py-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Here is your membership plan:
        </h2>
        <MembershipInfo />
      </div>
    </>
  );
}

export default MembershipLayout;
