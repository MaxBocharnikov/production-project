import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import i18n from 'shared/config/i18n';
import {AUTH_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';

type LoginByUserNameArgs = {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameArgs, {rejectValue: string}>(
    'login/loginByUserName',
    async (loginData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            if(!response.data) {
                throw new Error()
            }
            localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue('Auth error');
        }
    },
)