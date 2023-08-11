import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistedBasketReducer from "./persistConfig";

export const rootReducer = combineReducers({
  basket: persistedBasketReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
