import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

import {Button, ButtonSize, ButtonTheme} from './Button';

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

export const OutlinedL: Story = {
    args: {
        children: 'Outlined L',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L
    }
};

export const OutlinedXl: Story = {
    args: {
        children: 'Outlined XL',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL
    }
};

export const Background: Story = {
    args: {
        children: 'Background',
        theme: ButtonTheme.BACKGROUND
    }
};

export const InvertedBackground: Story = {
    args: {
        children: 'InvertedBackground',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const SquareL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L
    }
};

export const SquareXL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL
    }
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
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

export const DisabledDark: Story = {
    args: {
        children: 'Button',
        disabled: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};