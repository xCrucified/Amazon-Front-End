import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import headerReducer from "./slices/headerSlice";

export const store = configureStore({
  reducer: {
    signup: singupReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
