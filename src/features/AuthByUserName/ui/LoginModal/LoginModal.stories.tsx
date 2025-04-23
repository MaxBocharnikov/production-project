import type {Meta, StoryObj} from '@storybook/react';
import {LoginModal} from '../LoginModal/LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        //layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        isOpen: false,
        onClose: () => {},
    }
};