import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames';

import style from './NotFoundPage.module.scss';


export const NotFoundPage: FC = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(style.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
};