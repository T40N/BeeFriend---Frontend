import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import beeGardenSlice from "./beeGardenSlice.js/beeGardenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import magazynSlice from "./magazynSlice/magazynSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  user: userSlice.reducer,
  beeGarden: beeGardenSlice.reducer,
  magazyn: magazynSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
