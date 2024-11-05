import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../../components/Loading/Loading";

const meta = {
  title: "Atoms/Loading",
  component: Loading,
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
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  render: (args) => <Loading {...args}>Label</Loading>,
};
