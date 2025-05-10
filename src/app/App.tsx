import React, {Suspense, useEffect} from 'react';
import {AppRouter} from 'app/providers/AppRouter';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';

export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    // useEffect(() => {
    //     if (Math.random() < 0.5) {
    //         throw new Error('');
    //     }
    // }, []);

    return (
        <div className={classNames('app')}>
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