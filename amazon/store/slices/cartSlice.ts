import { Cart, Product } from "@/lib/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.selected!++;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
    },
    increaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product && product.selected! < product.inStock) {
        product.selected!++;
      }
    },
    decreaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product && product.selected! > 0) {
        product.selected!--;
      }
    },
    clearCart(state) {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseSelectedVal,
  decreaseSelectedVal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
