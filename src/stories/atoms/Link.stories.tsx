import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../../components/Link";

const meta = {
  title: "Atoms/Link",
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
    <Link href="" {...args}>
      Link
    </Link>
  ),
};
