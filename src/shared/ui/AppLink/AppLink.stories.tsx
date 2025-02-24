import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'App Link',
    }
};

export const Inverted: Story = {
    args: {
        children: 'App Link',
        theme: AppLinkTheme.INVERTED
    }
};

export const Red: Story = {
    args: {
        children: 'App Link',
        theme: AppLinkTheme.RED
    }
};


export const PrimaryDark: Story = {
    args: {
        children: 'App Link',
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const InvertedDark: Story = {
    args: {
        children: 'App Link',
        theme: AppLinkTheme.INVERTED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const RedDark: Story = {
    args: {
        children: 'App Link',
        theme: AppLinkTheme.RED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};