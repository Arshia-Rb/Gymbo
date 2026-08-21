import { FormProvider, useForm } from "react-hook-form";
import CustomForm from "../ui/CustomForm";
import Input from "../ui/Input";
import LoginContainer from "../ui/LoginContainer";
import type { data } from "./Login";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

function ForgotPassword() {
  const methods = useForm<data>();

  const navigate = useNavigate();

  function onSubmit() {
    //it should sends the email address for verification. then:
    navigate("/email-verification");
  }

  return (
    <LoginContainer>
      <FormProvider {...methods}>
        <CustomForm onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Reset your password</h2>
            <p className="text-sm text-stone-500">
              Enter your email address to reset your password
            </p>
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <Button submit type="form">
            Reset Password
          </Button>
        </CustomForm>
      </FormProvider>
    </LoginContainer>
  );
}

export default ForgotPassword;
