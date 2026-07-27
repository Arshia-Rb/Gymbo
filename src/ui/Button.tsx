interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  onClick?: () => void;
}
//Used to be able to recieve string props,then used them to index different styles
interface stringIndex {
  [key: string]: string;
}

const baseStyles = "cursor-pointer rounded-sm px-4 py-2  font-bold  ";

const variations: stringIndex = {
  primary:
    "border-amber-400 text-[0.8rem]  border-2 bg-amber-400 text-black transition-all hover:bg-amber-500 hover:border-amber-500",
  secondary:
    "border-white text-[0.8rem] bg-black border-2 text-white transition-all hover:border-amber-400 hover:bg-amber-400 hover:text-black",
  pricing:
    "w-full text-[0.8rem] text-center border-amber-400 text-white bg-neutral-950 border-1 transition-all hover:bg-amber-400 hover:text-black",
  mostPopular:
    "w-full text-[0.8rem] text-center border-amber-400 transition-all text-black bg-amber-400 border-1 hover:bg-amber-500",
  form: " w-full text-center border-amber-400 text-black bg-amber-400 border-1 hover:bg-amber-500",
};

function Button({ children, type = "primary", onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={baseStyles + variations[type]}>
      {children}
    </button>
  );
}

export default Button;
