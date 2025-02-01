import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    example: singupReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
