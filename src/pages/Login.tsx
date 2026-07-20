import Button from "../ui/Button";
import Input from "../ui/Input";
import LoginContainer from "../ui/LoginContainer";

function Login() {
  return (
    <LoginContainer>
      <form className="flex max-w-md flex-col gap-6 rounded-2xl border border-stone-800 bg-zinc-950 px-8 py-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-sm text-stone-500">
            Sign in to access your account.
          </p>
        </div>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-stone-500">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-stone-300"
            />
            Remember me
          </label>

          <a href="#" className="font-medium text-stone-400 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button type="form" onClick={() => {}}>
          Log in
        </Button>

        <div className="flex justify-center gap-2">
          <p className="text-center text-sm text-stone-500">
            Don't have an account?
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-amber-400 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </form>
    </LoginContainer>
  );
}

export default Login;
