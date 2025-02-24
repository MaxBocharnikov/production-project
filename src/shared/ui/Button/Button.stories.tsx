import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

import {Button, ButtonTheme} from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'Button'
    }
};

export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR
    }
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        theme: ButtonTheme.OUTLINED
    }
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button dark'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const ClearDark: Story = {
    args: {
        children: 'Clear dark',
        theme: ButtonTheme.CLEAR
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const OutlinedDark: Story = {
    args: {
        children: 'Outlined dark',
        theme: ButtonTheme.OUTLINED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};