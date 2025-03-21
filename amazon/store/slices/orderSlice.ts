import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address } from "./addressesSlice";
import { PaymentCard } from "./paymentCardsSlice";
import { Product } from "./cartSlice";

interface Order {
  id: string | null;
  products: Product[];
  address: Address | null;
  card: PaymentCard | null;
  date: string | null;
}

const initialState: Order = {
  id: null,
  products: [],
  address: null,
  card: null,
  date: null,
};

const stateSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setOrderProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setOrderAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    setOrderCard: (state, action: PayloadAction<PaymentCard>) => {
      state.card = action.payload;
    },
    setOrderDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    clearOrder: (state) => {
      state.id = null;
      state.products = [];
      state.address = null;
      state.card = null;
      state.date = null;
    },
  },
});

export const {
  setOrderId,
  setOrderProducts,
  setOrderAddress,
  setOrderCard,
  setOrderDate,
  clearOrder,
} = stateSlice.actions;
export default stateSlice.reducer;
