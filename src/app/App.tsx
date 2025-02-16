import React, {Suspense, useEffect} from 'react';
import {AppRouter} from 'app/providers/AppRouter';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';
import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme();

    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error('');
        }
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};