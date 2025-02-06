import {FC} from 'react';
import {Loader} from 'shared/ui/Loader/Loader';
import {classNames} from 'shared/lib/classNames';

import style from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const {className} = props;
    return (
        <div className={classNames(style.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};