import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../components/Card";

const meta = {
  title: "Molecules/Card",
  component: Card,
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
    title: "Card Button",
    description: "This is a card button",
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card
      {...args}
      cover={{
        src: "cover",
        alt: "cover",
      }}
    />
  ),
};
