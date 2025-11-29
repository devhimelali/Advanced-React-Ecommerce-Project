import type { Meta, StoryObj } from '@storybook/react-vite';

import {NotFoundPage} from "@/pages/NotFound";

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};