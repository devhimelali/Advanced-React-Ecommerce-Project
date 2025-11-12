import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
    },
}

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
    },
};

export const rounded: Story = {
    args: {
        form: 'rounded',
    },
};

export const Pill: Story = {
    args: {
        form: 'pill',
    },
};

export const Circle: Story = {
    args: {
        form: 'circle',
    },
};
