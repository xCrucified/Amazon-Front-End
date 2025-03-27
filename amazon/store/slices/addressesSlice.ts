import { Address } from "@/lib/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressesState {
  addresses: Address[];
}

const initialState: AddressesState = {
  addresses: [
    {
      id: 0,
      name: "Home",
      fullname: "Andrew",
      phoneNumber: "+380987536324",
      country: "ukraine",
      city: "Rivne",
      postalCode: "12346",
      street: "Solomiyi Krushelnitskoi",
      building: "22/3",
      isDefault: true,
    },
    {
      id: 1,
      name: "Office",
      fullname: "Andrew",
      phoneNumber: "+380987536324",
      country: "ukraine",
      city: "Kyiv",
      postalCode: "56789",
      street: "Business Park",
      building: "312a",
      isDefault: false,
    },
  ],
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    markAsDefault(state, action: PayloadAction<number>) {
      state.addresses.forEach((addr) => {
        addr.isDefault = addr.id === action.payload;
      });
    },
    addAddress(state, action: PayloadAction<Address>) {
      state.addresses.push(action.payload);
      if (action.payload.isDefault) {
        state.addresses.forEach((addr) => (addr.isDefault = addr.id === action.payload.id));
      }
    },
    updateAddress(state, action: PayloadAction<Address>) {
      const index = state.addresses.findIndex((addr) => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    removeAddress(state, action: PayloadAction<number>) {
      state.addresses = state.addresses.filter((addr) => addr.id !== action.payload);
    },
  },
});

export const { markAsDefault, addAddress, updateAddress, removeAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
