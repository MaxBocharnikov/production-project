import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface SwitchLanguageProps {
    short?: boolean;
    className?: string;
}

export const SwitchLanguage: FC<SwitchLanguageProps> = (props) => {
    const {short, className} = props;
    const {i18n, t} = useTranslation()

    const onLanguageChange = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onLanguageChange}
            className={classNames(className)}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};