import React, {FC, useMemo, useState} from 'react';
import {ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY} from './ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

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

