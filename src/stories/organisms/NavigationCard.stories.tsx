import type { Meta, StoryObj } from "@storybook/react";
import { List } from "@phosphor-icons/react";
import { NavigationCard } from "../../components/NavigationCard";

const meta = {
  title: "Organisms/NavigationCard",
  component: NavigationCard,
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
    title: "Navigation Card",
  },
} satisfies Meta<typeof NavigationCard>;
export default meta;
type Story = StoryObj<typeof NavigationCard>;

export const Default: Story = {
  render: (args) => <NavigationCard {...args} icon={<List />} className="w-96" />,
};
