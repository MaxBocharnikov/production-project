import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {PageError} from 'widgets/PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};