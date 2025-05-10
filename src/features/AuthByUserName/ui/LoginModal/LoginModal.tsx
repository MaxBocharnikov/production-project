import React, {FC} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {LoginForm} from '../LoginForm/LoginForm';


interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {isOpen, onClose, className} = props;
    return (
        <Modal
            isOpen={isOpen}
            lazy={true}
            onClose={onClose}
            className={className}
        >
            <LoginForm />
        </Modal>
    );
};