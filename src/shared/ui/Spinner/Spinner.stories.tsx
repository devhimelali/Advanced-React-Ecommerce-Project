import type { Meta, StoryObj } from '@storybook/react-vite';

import {AppIcon, Spinner} from "@/shared/ui";

const meta = {
    title: 'shared/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};