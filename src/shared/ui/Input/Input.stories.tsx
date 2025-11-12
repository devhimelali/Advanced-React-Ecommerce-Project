import type { Meta, StoryObj } from '@storybook/react-vite';

import {AppIcon, Input} from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/Search.svg?react"

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { value: "", placeholder: "Enter text ......" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        placeholder: 'Default',
    },
};

export const WithValue: Story = {
    args: {
        value: "Some Value"
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        value: 'password'
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Rounded: Story = {
    args: {
        rounded: true,
    },
};

export const WithIcon: Story = {
    args: {
        Icon: <AppIcon Icon={SearchIcon}/>
    },
};
