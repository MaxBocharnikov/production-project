import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'features/SwitchTheme';
import {SwitchLanguage} from 'features/SwitchLanguage';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';


import style from './Sidebar.module.scss';
import {routePaths} from 'shared/config/routeConfig';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const {t: mainT} = useTranslation('main');
    const {t: aboutT } = useTranslation('about');

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div data-testid="sidebar" className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            <Button
                data-testid={'toggle'}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
                className={style.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={style.items}>
                <AppLink className={style.item} theme={AppLinkTheme.INVERTED} to={routePaths.main}>
                    <MainIcon className={style.icon} />
                    <span className={style.link}>{mainT('Главная страница')}</span>
                </AppLink>
                <AppLink className={style.item} theme={AppLinkTheme.INVERTED} to={routePaths.about}>
                    <AboutIcon className={style.icon}/>
                    <span className={style.link}>{aboutT('О нас')}</span>
                </AppLink>
            </div>
            <div className={style.switchers}>
                <ThemeSwitcher/>
                <SwitchLanguage short={collapsed}/>
            </div>
        </div>
    );
};