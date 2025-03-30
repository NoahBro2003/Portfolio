"use client"
import { Provider } from "react-redux"
import store from "@/stores"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

export default function StoreProvider({children}){
    const persistedStore = persistStore(store)
    return <Provider store={store}>
        <PersistGate persistor={persistedStore}>
            {children}
        </PersistGate>
    </Provider>
}