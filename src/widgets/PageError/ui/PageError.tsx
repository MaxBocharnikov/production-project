import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';

import style from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation();

    const onReloadClick = (): void => {
        location.reload();
    }

    return (
        <div className={classNames(style.PageError, {}, [className])}>
            <div>{t('Кажется что-то пошло не так')}</div>
            <Button onClick={onReloadClick}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};