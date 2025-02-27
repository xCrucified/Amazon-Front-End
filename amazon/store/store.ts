import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import categoryReducer from "./slices/categorySlice";
import headerReducer from "./slices/headerSlice";
import otpReducer from "./slices/otpSlice";

export const store = configureStore({
  reducer: {
    signup: singupReducer,
    category: categoryReducer,
    header: headerReducer,
    otp: otpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
