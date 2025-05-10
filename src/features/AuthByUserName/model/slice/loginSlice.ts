import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/LoginSchema';
import {loginByUserName} from '../../model/services/LoginByUserName/LoginByUserName';


const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        clearData: (state) => {
            state.username = '';
            state.password = '';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        builder.addCase(loginByUserName.fulfilled, (state, { payload }) => {
            state.isLoading = false;
        })
    }
})

export const {actions: loginActions} = loginSlice

export default loginSlice.reducer