import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";

export const store = configureStore({
  reducer: {
    example: singupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
