import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    XL = 'size-xl',
    L = 'size-l',
    M = 'size-m',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, square, size, ...otherProps} = props;

    const mods: Record<string, boolean> = {
        [style[theme]]: true,
        [style.square]: square,
        [style[size]]: true,
    }

    return (
        <button
            className={classNames(style.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};