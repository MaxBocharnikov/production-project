import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'features/SwitchTheme';
import {SwitchLanguage} from 'features/SwitchLanguage';

import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {t} = useTranslation();
    const {className} = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div data-testid="sidebar" className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            {/*<button data-testid={'toggle'} onClick={onToggle}>{t('Переключить')}</button>*/}
            <button data-testid={'toggle'} onClick={onToggle}>Переключить</button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <SwitchLanguage />
            </div>
        </div>
    );
};