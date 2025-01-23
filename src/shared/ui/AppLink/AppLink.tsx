import {FC} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';

import style from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    return (
        <Link
            to={to}
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};