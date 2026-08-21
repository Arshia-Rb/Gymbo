import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../ui/CustomForm";
import LoginContainer from "../ui/LoginContainer";
import Button from "../ui/Button";

function EmailVerification() {
  const { register, handleSubmit, setFocus } = useForm();

  const numberOfDigits = [1, 2, 3, 4, 5, 6];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    if (e.target.value && index < 5) {
      setFocus(`code${index + 1}`);
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const code = [
      data.code0,
      data.code1,
      data.code2,
      data.code3,
      data.code4,
      data.code5,
    ].join("");
    //then sends the code to back-end to verify
    console.log(code);
  };

  return (
    <LoginContainer>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Verify your email address</h2>
          <p className="text-sm text-stone-500">
            we have sent an email to{" "}
            <span className="font-bold text-white">YOUR-EMAIL</span>. please
            enter the code we've sent you:
          </p>
        </div>
        <div className="flex gap-4">
          {numberOfDigits.map((_, index) => (
            <input
              className="h-12 w-12 rounded-lg border text-center text-xl focus:border-amber-400"
              maxLength={1}
              {...register(`code${index}`, {
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, index),
              })}
            />
          ))}
        </div>
        <Button submit type="form">
          Verify
        </Button>
      </CustomForm>
    </LoginContainer>
  );
}

export default EmailVerification;
