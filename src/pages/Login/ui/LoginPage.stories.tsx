import type { Meta, StoryObj } from '@storybook/react-vite';

import {LoginPage} from "@/pages/Login";

const meta = {
    title: 'pages/LoginPage',
    component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};