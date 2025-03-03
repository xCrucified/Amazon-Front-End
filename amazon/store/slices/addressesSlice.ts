import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
  id: string;
  name: string;
  fullname: string;
  phoneNumber: string;
  country: string;
  city: string;
  street: string;
  building: string;
  postalCode: string;
  isDefault: boolean;
}

interface AddressesState {
  addresses: Address[];
}

const initialState: AddressesState = {
  addresses: [
    {
      id: "1",
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
      id: "2",
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
    markAsDefault(state, action: PayloadAction<string>) {
      state.addresses.forEach((addr) => {
        addr.isDefault = addr.id === action.payload;
      });
    },
    addAddress(state, action: PayloadAction<Address>) {
      // Add the new address
      state.addresses.push(action.payload);
      // Mark the new address as default
      state.addresses.forEach((addr) => {
        addr.isDefault = addr.id === action.payload.id;
      });
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

export const { markAsDefault, addAddress, updateAddress, removeAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
