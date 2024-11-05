import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input/Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
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
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
};
