import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import headerReducer from "./slices/headerSlice";
import otpReducer from "./slices/otpSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    signup: singupReducer,
    header: headerReducer,
    otp: otpReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
