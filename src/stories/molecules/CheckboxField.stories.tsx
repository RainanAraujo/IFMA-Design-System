import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxField } from "../../components/CheckboxField";

const meta = {
  title: "Molecules/CheckboxField",
  component: CheckboxField,
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
    label: "Checkbox Field",
  },
} satisfies Meta<typeof CheckboxField>;
export default meta;
type Story = StoryObj<typeof CheckboxField>;

export const Default: Story = {
  render: (args) => <CheckboxField {...args} label={args.label} />,
};
