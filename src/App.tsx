import {Suspense} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames';

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
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};