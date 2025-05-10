import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';
import {getUserAuthData, userActions} from 'entities/User';
import {loginActions} from 'features/AuthByUserName/model/slice/loginSlice';

import style from './Navbar.module.scss';


interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props;
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);

    const onLogoutClickHandler = useCallback((): void => {
        dispatch(userActions.logout());
    }, [dispatch])

    const onLoginClickHandler = useCallback((): void => {
        setIsAuthModalOpen(true);
    }, []);

    const onLoginCloseHandler = useCallback((): void => {
        setIsAuthModalOpen(false);
    }, []);

    useEffect(() => {
        if(authData && isAuthModalOpen) {
            dispatch(loginActions.clearData());
            setIsAuthModalOpen(false);
        }
    }, [authData, isAuthModalOpen, dispatch]);

    const renderContent = (): ReactNode => {
        if(authData) {
            return (
                <div className={style.links}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogoutClickHandler}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            )
        }
        return (
            <div className={style.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLoginClickHandler}
                >
                    {t('Войти')}
                </Button>
                <LoginModal isOpen={isAuthModalOpen} onClose={onLoginCloseHandler}/>
            </div>
        )
    }

    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            {renderContent()}
        </div>
    );
};