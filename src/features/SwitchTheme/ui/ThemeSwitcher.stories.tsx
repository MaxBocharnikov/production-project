import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

import {ThemeSwitcher} from 'features/SwitchTheme';

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};