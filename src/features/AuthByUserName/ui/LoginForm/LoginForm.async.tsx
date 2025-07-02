import {lazy, ComponentType} from "react";
import {LoginFormProps} from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<ComponentType<LoginFormProps>>(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500)
}))

