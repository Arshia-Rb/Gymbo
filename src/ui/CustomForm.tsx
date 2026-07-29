import type { ReactNode } from "react";

interface CustomFormProps {
  children: ReactNode;
  onSubmit: () => void;
}

function CustomForm({ children, onSubmit }: CustomFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex max-w-md flex-col gap-6 rounded-2xl border border-stone-800 bg-zinc-950 px-8 py-6"
    >
      {children}
    </form>
  );
}

export default CustomForm;
