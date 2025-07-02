import React, {FC, Suspense} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {Loader} from 'shared/ui/Loader/Loader';
import {LoginFormAsync} from 'features/AuthByUserName/ui/LoginForm/LoginForm.async';


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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};