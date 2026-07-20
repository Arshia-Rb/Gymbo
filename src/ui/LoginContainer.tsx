interface LoginContainerProps {
  children: React.ReactNode;
}

function LoginContainer({ children }: LoginContainerProps) {
  return (
    <div className="flex h-dvh items-center justify-center overflow-scroll bg-black text-white">
      {children}
    </div>
  );
}

export default LoginContainer;
