interface InputProps {
  label: string;
  name: string;
  id?: string;
  type: string;
  placeholder: string;
}

function Input({ label, name, id, type, placeholder }: InputProps) {
  if (!id) id = name;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white">{label}</label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-3xl border border-stone-400 px-4 py-3 transition-all outline-none placeholder:text-sm focus:border-amber-400"
        required
      />
    </div>
  );
}

export default Input;
