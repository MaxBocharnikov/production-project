import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/classNames';

import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props;
    return (
        <button
            className={classNames(style.Button, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};