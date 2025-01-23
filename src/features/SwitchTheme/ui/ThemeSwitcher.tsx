import {FC} from 'react';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames';
import DarkThemeLogo from 'shared/assets/icons/theme-dark.svg';
import LightThemeLogo from 'shared/assets/icons/theme-light.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

import style from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const {theme, onThemeToggle} = useTheme();
    return (
        <Button
            className={classNames(style.ThemeSwitcher, {}, [className])}
            onClick={onThemeToggle}
            theme={ButtonTheme.CLEAR}
        >
           {theme === Theme.DARK ? <DarkThemeLogo /> : <LightThemeLogo />}
        </Button>
    );
};