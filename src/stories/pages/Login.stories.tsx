import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

export default {
  title: "Pages/LoginPage",
  parameters: {
    layout: "fullscreen",
  },
};

export const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-screen p-5">
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <img src="./logo.svg" alt="logo" className="h-20" />
        <div className="max-w-96 w-full  flex flex-col items-center gap-8 ">
          <h1 className="text-medium  ">Welcome</h1>
          <form className="space-y-3 w-full">
            <InputField label="E-mail" placeholder="Write your e-mail" />
            <InputField label="Password" placeholder="Write your password" />
            <Button size="small" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
