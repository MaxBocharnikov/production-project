import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema';
import {counterReducer} from 'entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
//
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch