import { Link } from "react-router";
import Button from "../ui/Button";
import CustomForm from "../ui/CustomForm";
import Input from "../ui/Input";
import LoginContainer from "../ui/LoginContainer";

function SignUp() {
  return (
    <LoginContainer>
      <CustomForm>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="text-sm text-stone-500">
            Sign up to start your journey
          </p>
        </div>
        <Input
          label="Name"
          placeholder="Enter your name"
          name="name"
          type="text"
        />
        <Input
          label="Email"
          placeholder="Enter your email address"
          name="email"
          type="email"
        />
        <Input
          label="Password"
          placeholder="Enter a Password"
          name="password"
          type="password"
        />
        <Input
          label="Confirm your password"
          placeholder="Confirm your password"
          name="confirm"
          type="password"
        />

        <Button onClick={() => {}}>Sign Up</Button>

        <div className="flex justify-center gap-2">
          <p className="text-center text-sm text-stone-500">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="text-sm font-semibold text-amber-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </CustomForm>
    </LoginContainer>
  );
}

export default SignUp;
