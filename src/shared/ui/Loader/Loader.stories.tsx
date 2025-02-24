import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

import {Loader} from 'shared/ui/Loader/Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};