interface ButtonProps {
  children: React.ReactNode;
  type?: string;
}
//Used to be able to recieve string props,then used them to index different styles
interface stringIndex {
  [key: string]: string;
}

const baseStyles =
  "cursor-pointer rounded-sm border-2 px-4 py-2 text-[0.8rem] font-bold  ";

const variations: stringIndex = {
  primary:
    "border-amber-400 bg-amber-400 text-black transition-all hover:bg-amber-500 hover:border-amber-500",
  secondary:
    "border-white bg-black text-white transition-all hover:border-amber-400 hover:bg-amber-400 hover:text-black",
};

function Button({ children, type = "primary" }: ButtonProps) {
  return <button className={baseStyles + variations[type]}>{children}</button>;
  <button className="border"></button>;
}

export default Button;
