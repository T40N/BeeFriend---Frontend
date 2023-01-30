import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";

const createStore = () =>
  configureStore({
    reducer: {
      user: userSlice.reducer,
    },
  });

export const store = createStore();
