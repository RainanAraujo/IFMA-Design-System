import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../components/Label";

const meta = {
  title: "Atoms/Label",
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>Label</Label>,
};
