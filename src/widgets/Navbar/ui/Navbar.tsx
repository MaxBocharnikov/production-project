import React, {FC, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Modal} from 'shared/ui/Modal/Modal';
import style from './Navbar.module.scss';


interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

    const onLoginClickHandler = useCallback((): void => {
        setIsAuthModalOpen(true);
    }, [])

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLoginClickHandler}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModalOpen} onClose={onLoginClickHandler}>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                </Modal>
            </div>
        </div>
    );
};