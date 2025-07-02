import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reduceManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer);

    const store =  configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
    return {
        ...store,
        reducerManager,
    }
}
//
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch