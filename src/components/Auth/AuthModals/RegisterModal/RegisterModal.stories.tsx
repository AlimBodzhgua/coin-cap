import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'config/storybook/StoreDecorator';

import { RegisterModal } from './RegisterModal';

const meta = {
    title: 'components/RegisterModal',
    component: RegisterModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RegisterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        onClose: () => console.log('close window'),
    },
};

export const isLoading: Story = {
    args: {
        isOpen: true,
        onClose: () => console.log('close window'),
    },
    decorators: StoreDecorator({
        user: {
            isLoading: true,
        }
    })
};