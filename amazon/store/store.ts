import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import categoryReducer from "./slices/categorySlice";
import headerReducer from "./slices/headerSlice";
import otpReducer from "./slices/otpSlice";
import cartReducer from "./slices/cartSlice";
import addressesReducer from "./slices/addressesSlice";
import paymentCardsReducer from "./slices/paymentCardsSlice";

export const store = configureStore({
  reducer: {
    signup: singupReducer,
    category: categoryReducer,
    header: headerReducer,
    otp: otpReducer,
    cart: cartReducer,
    addresses: addressesReducer,
    paymentCards: paymentCardsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
