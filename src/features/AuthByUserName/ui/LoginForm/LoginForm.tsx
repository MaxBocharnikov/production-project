import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';

import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Input autofocus={true} placeholder={t('Введите username')} type={'text'} />
            <Input placeholder={t('Введите пароль')} type={'text'} />
            <Button>
                {t('Войти')}
            </Button>
        </div>
    );
};