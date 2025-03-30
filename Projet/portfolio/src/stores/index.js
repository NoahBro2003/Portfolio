import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import finalReducer from "./reducers";

import { FLUSH, PERSIST, PURGE, PAUSE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, finalReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
            },
        }),
})

export default store