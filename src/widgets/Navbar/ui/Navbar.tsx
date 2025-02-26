import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {classNames} from 'shared/lib/classNames/classNames';

import style from './Navbar.module.scss';


interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {className} = props;
    return (
        <div className={classNames(style.Navbar, {}, [className])}>
            <div className={style.links}>

            </div>
        </div>
    );
};