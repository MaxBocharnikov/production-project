import React, {FC, useMemo, useState} from 'react';
import {ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY} from '../lib/ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({initialTheme, children}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultContext = useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={defaultContext}>
            {children}
        </ThemeContext.Provider>
    );
};

