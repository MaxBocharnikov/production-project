import {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames';

import './styles/index.scss'

export const App = () => {
    const {theme, onThemeToggle} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={onThemeToggle}>Switch theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};