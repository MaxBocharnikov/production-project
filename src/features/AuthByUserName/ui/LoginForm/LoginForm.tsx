import {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from '../../model/selectors/getLoginState';
import {loginByUserName} from '../../model/services/LoginByUserName/LoginByUserName';
import {Text, TextTheme} from 'shared/ui/Text/Text';

import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}


export const LoginForm = memo((props: LoginFormProps) => {
    const dispatch = useDispatch();
    const {className} = props;
    const {t} = useTranslation();
    const loginForm = useSelector(getLoginState);

    const {username, password, error, isLoading} = loginForm;

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({username, password}));
    }, [dispatch, username, password])

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text title={error} theme={TextTheme.ERROR}/>}
            <Input value={username} onChange={onChangeUserName} autofocus={true} placeholder={t('Введите username')} type={'text'} />
            <Input value={password} onChange={onChangePassword} placeholder={t('Введите пароль')} type={'text'} />
            <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINED} >
                {t('Войти')}
            </Button>
        </div>
    );
});