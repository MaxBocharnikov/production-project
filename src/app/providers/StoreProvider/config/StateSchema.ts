import {CounterSchema} from 'entities/Counter';
import {UserSchema} from 'entities/User';
import {LoginSchema} from 'features/AuthByUserName';
import {Action, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduceManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: Action) => StateSchema,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void
}

export interface ReduxWithManager extends EnhancedStore<ReducersMapObject<StateSchema>> {
    reducerManager: ReduceManager;
}