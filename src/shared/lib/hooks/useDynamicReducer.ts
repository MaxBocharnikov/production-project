import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { ReduxWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';

export interface DynamicReducerItem {
    key: StateSchemaKeys;
    reducer: Reducer;
    removeAfterUnmount?: boolean;
}

export const useDynamicReducer = (
    reducers: DynamicReducerItem[],
) => {
    const store = useStore() as ReduxWithManager;

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        reducers.forEach(({ key, reducer }) => {
            store.reducerManager.add(key, reducer);
        });

        return () => {
            reducers.forEach(({ key, removeAfterUnmount }) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(key);
                }
            });
        };
    }, []);
};
