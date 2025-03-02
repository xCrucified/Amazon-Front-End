import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
  id: string;
  label?: string | "";
  country: string;
  city: string;
  postalCode: string;
  street?: string | "";
  building?: string | "";
}

interface AddressesState {
  addresses: Address[];
}

const initialState: AddressesState = {
  addresses: [
    {
      id: "home",
      label: "Home",
      country: "ukraine",
      city: "Rivne",
      postalCode: "12346",
      street: "Solomiyi Krushelnitskoi",
      building: "22/3",
    },
    {
      id: "office",
      label: "Office",
      country: "ukraine",
      city: "Kyiv",
      postalCode: "56789",
      street: "Business Park",
    },
  ],
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<Address>) {
      state.addresses.push(action.payload);
    },
    updateAddress(state, action: PayloadAction<Address>) {
      const index = state.addresses.findIndex((addr) => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    removeAddress(state, action: PayloadAction<string>) {
      state.addresses = state.addresses.filter((addr) => addr.id !== action.payload);
    },
  },
});

export const { addAddress, updateAddress, removeAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
