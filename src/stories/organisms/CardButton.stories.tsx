import type { Meta, StoryObj } from "@storybook/react";
import { CardButton } from "../../components/CardButton";
import { Image } from "@phosphor-icons/react";

const meta = {
  title: "Organisms/CardButton",
  component: CardButton,
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
} satisfies Meta<typeof CardButton>;
export default meta;
type Story = StoryObj<typeof CardButton>;

export const Default: Story = {
  render: (args) => <CardButton {...args} avatar={<Image size={46} className="text-gray-300" />} />,
};
