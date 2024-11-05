import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../../components/InputField";

const meta = {
  title: "Molecules/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    placeholder: "Enter text",
    label: "Label",
  },
} satisfies Meta<typeof InputField>;
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: (args) => <InputField {...args} label={args.label} />,
};
