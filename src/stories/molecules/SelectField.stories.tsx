import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "../../components/SelectField";

const meta = {
  title: "Molecules/SelectField",
  component: SelectField,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    className: {
      control: false,
    },
    options: {
      control: false,
    },
  },
  args: {
    label: "Label",
  },
} satisfies Meta<typeof SelectField>;
export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  render: (args) => (
    <SelectField
      {...args}
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ]}
    />
  ),
};
