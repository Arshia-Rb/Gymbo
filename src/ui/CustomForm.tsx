import type { ReactNode } from "react";

interface CustomFormProps {
  children: ReactNode;
}

function CustomForm({ children }: CustomFormProps) {
  return (
    <form className="flex max-w-md flex-col gap-6 rounded-2xl border border-stone-800 bg-zinc-950 px-8 py-6">
      {children}
    </form>
  );
}

export default CustomForm;
