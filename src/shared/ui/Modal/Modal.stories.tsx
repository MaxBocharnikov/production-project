import type {Meta, StoryObj} from '@storybook/react';

import {Modal} from './Modal';
import {ButtonTheme} from 'shared/ui/Button/Button';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        isOpen: false,
        children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    parameters: {
        loki: {
            skip: true
        },
    }
};
