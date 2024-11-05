import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../../components/Link";
import { ArrowSquareOut } from "@phosphor-icons/react";

const meta = {
  title: "Molecules/NavigationLink",
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (args) => (
    <Link href="" className="no-underline text-black hover:text-green-500" {...args}>
      <ArrowSquareOut />
      Link
    </Link>
  ),
};
