import { Link, useNavigate } from "react-router";
import Button from "../ui/Button";
import Input from "../ui/Input";
import LoginContainer from "../ui/LoginContainer";
import CustomForm from "../ui/CustomForm";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type data = {
  email: string;
  password: string;
};

const FAKE_USER = {
  email: "Gymbo.fitness@email.com",
  password: "qwerty",
  id: "KSJFBSV3646HBGZJ3",
};

function Login() {
  const [wrongData, setWrongData] = useState(false);

  const methods = useForm<data>();

  const { setIsAuth } = useContext(AuthContext)!;

  const navigate = useNavigate();

  function onSubmit(data: data) {
    setWrongData(false);
    if (
      FAKE_USER.email === data.email &&
      FAKE_USER.password === data.password
    ) {
      setIsAuth(true);
      navigate("/membership");
    } else {
      setWrongData(true);
    }
  }

  return (
    <LoginContainer>
      <FormProvider {...methods}>
        <CustomForm onSubmit={methods.handleSubmit(onSubmit)}>
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
          {wrongData && (
            <p className="text-center text-sm text-red-700">
              Wrong email or password!
            </p>
          )}
          <Button submit type="form">
            Log in
          </Button>

          <div className="flex justify-center gap-2">
            <p className="text-center text-sm text-stone-500">
              Don't have an account?
            </p>
            <Link
              to="/sign-up"
              className="text-sm font-semibold text-amber-400 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </CustomForm>
      </FormProvider>
    </LoginContainer>
  );
}

export default Login;
