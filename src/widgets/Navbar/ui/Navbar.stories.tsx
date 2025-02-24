import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Navbar} from 'widgets/Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};