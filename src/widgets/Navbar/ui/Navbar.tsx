import React, {FC, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';

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
    }, []);

    const onLoginCloseHandler = useCallback((): void => {
        setIsAuthModalOpen(false);
    }, []);

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLoginClickHandler}
                >
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModalOpen} onClose={onLoginCloseHandler} />
            </div>
        </div>
    );
};