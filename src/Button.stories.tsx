import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { within } from "@testing-library/react"
import { userEvent } from "@storybook/testing-library"

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components/Button",
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "CLICK ME",
        onClick: async () => alert("Clicked!"),

    },
};

const onClick = async () => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            alert("Clicked!");
            resolve();
        }, 5000);
    })
}

export const Disabled: Story = {
    args: {
        label: "CLICK ME",
        onClick: onClick,
    },
};

export const WithInteraction: Story = {
    args: {
        label: "CLICK ME",
        onClick: async () => alert("clicked!"),
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        await userEvent.click(button);
    }
}