import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  isAuth: boolean;
}

const initialState: HeaderState = {
  isAuth: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = stateSlice.actions;
export default stateSlice.reducer;
