import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from 'entities/User/model/types/user';
import {AUTH_LOCALSTORAGE_KEY} from 'shared/constants/localstorage';

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initUserData: (state, action: PayloadAction<User>) => {
            const user = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
            if(user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
        }
    },
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice;