import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';


export interface UseTheme {
    theme: Theme;
    onThemeToggle: () => void;
}

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const onThemeToggle = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY ,newTheme);
    }

    return {
        theme,
        onThemeToggle,
    }
}