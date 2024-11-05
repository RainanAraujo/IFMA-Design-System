import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { SelectField } from "../../components/SelectField";

export default {
  title: "Organisms/Form",
};

export const Form = () => {
  return (
    <form className="space-y-3">
      <InputField label="First Name" placeholder="Enter your first name" />
      <InputField label="Last Name" placeholder="Enter your last name" />
      <SelectField
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        label="Select an option"
      />
      <Button size="small" className="w-full">
        Submit
      </Button>
    </form>
  );
};
