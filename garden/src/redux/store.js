import { configureStore } from "@reduxjs/toolkit";
import { productsApi} from "./productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer, 
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});

setupListeners(store.dispatch);
