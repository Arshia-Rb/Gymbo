import { useNavigate } from "react-router";

function Logo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <span
      onClick={handleClick}
      className="cursor-pointer text-3xl font-bold text-white"
    >
      Gym<span className="font-logo font-medium text-amber-400">bo</span>
    </span>
  );
}

export default Logo;
