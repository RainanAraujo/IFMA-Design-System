import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
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
    disabled: false,
    checked: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};
