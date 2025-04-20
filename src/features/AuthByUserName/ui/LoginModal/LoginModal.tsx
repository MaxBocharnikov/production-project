import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Modal} from 'shared/ui/Modal/Modal';
import {LoginForm} from 'features/AuthByUserName/ui/LoginForm/LoginForm';

import style from './LoginModal.module.scss';


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
            className={classNames(style.LoginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    );
};