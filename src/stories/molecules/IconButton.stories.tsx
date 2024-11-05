import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Check } from "@phosphor-icons/react";
import { Button } from "../../components/Button";

const meta = {
  title: "Molecules/IconButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Button {...args} aria-label="Button Icon">
      <Check weight="bold" />
    </Button>
  ),
};

export const ButtonWithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Check weight="bold" /> Button
    </Button>
  ),
};
