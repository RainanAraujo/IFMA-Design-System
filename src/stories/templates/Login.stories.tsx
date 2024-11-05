import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

export default {
  title: "Templates/LoginPage",
  parameters: {
    layout: "fullscreen",
  },
};

export const LoginPage = () => {
  return (
    <div className="flex flex-col w-full h-screen p-5">
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <img src="logo" alt="logo" className="w-96 h-40 bg-gray-100" />
        <div className="max-w-96 w-full  flex flex-col items-center gap-8 ">
          <h1 className="text-medium  ">Lorem, ipsum</h1>
          <form className="space-y-3 w-full">
            <InputField label="Lorem, ipsum" placeholder="Lorem, ipsum" />
            <InputField label="Lorem, ipsum" placeholder="Lorem, ipsum" />
            <Button size="small" className="w-full">
              Lorem, ipsum
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
