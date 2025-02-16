import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

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
            className={classNames(className)}
        >
            {t('Язык')}
        </Button>
    );
};