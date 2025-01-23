import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

import style from './SwitchLanguage.module.scss';

interface SwitchLanguageProps {
    className?: string;
}

export const SwitchLanguage: FC<SwitchLanguageProps> = (props) => {
    const {className} = props;
    const {i18n, t} = useTranslation()

    const onLanguageChange = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onLanguageChange}
            className={classNames(style.SwitchLanguage, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};