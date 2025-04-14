import { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

const meta: Meta<typeof UserCard> = {
    component: UserCard,
    title: "Components/UserCard",
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof UserCard>

export const Primary: Story = {
    args: {
        name: "Mario Rossi",
        email: "mario.rossi@example.com"
    }
}

export const NoName: Story = {
    args: {
        name: "",
        email: "mario.rossi@example.com"
    }
}

export const NoEmail: Story = {
    args: {
        name: "Mario Rossi",
        email: ""
    }    
}

export const ConfirmUser: Story = {
    args: {
        name: "Mario Rossi",
        email: "mario.rossi@example.com"
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        await userEvent.click(button);
    }
}