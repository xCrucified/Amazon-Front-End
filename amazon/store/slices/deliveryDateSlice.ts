import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeliveryDateState {
  date: string;
  isSelected: boolean;
}

const initialState: DeliveryDateState = {
  date: "",
  isSelected: false,
};

const stateSlice = createSlice({
  name: "deliveryDate",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setSelected: (state, action: PayloadAction<boolean>) => {
      state.isSelected = action.payload;
    },
    clearDeliveyDate(state) {
      state.date = "";
      state.isSelected = false;
    }
  },
});

export const { setDate, setSelected, clearDeliveyDate } = stateSlice.actions;
export default stateSlice.reducer;
