import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { currencyReducer } from '../slices/currencySlice';
import { coinsReducer } from '../slices/coinsSlice';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        coins: coinsReducer,
        currency: currencyReducer,
    };

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
