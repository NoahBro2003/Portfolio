"use client";
import { Provider } from "react-redux";
import store from "@/stores";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistedStore = persistStore(store);

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </Provider>
  );
}
