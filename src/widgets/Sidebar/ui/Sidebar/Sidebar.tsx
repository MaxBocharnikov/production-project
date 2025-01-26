import {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames';
import {ThemeSwitcher} from 'features/SwitchTheme';
import {SwitchLanguage} from 'features/SwitchLanguage';

import style from './Sidebar.module.scss';
import {useTranslation} from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {t} = useTranslation();
    const {className} = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('Переключить')}</button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <SwitchLanguage />
            </div>
        </div>
    );
};