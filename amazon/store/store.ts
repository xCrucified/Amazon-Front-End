import { configureStore } from "@reduxjs/toolkit";
import singupReducer from "./slices/signupSlice";
import categoryReducer from "./slices/categorySlice";
import productImagesReducer from "./slices/productImagesSlice";

export const store = configureStore({
  reducer: {
    example: singupReducer,
    category: categoryReducer,
    images: productImagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
