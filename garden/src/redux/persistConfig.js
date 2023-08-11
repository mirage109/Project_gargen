import storage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";
import basketReducer from "./basketSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedBasketReducer = persistReducer(persistConfig, basketReducer);

export default persistedBasketReducer;
