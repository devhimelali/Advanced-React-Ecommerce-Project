import type { Meta, StoryObj } from '@storybook/react-vite';

import {PageLoader} from "@/widgets/PageLoader";

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
};