import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDataState {
  username: string;
  email: string;
  password: string;
  rPassword: string;
  otp: string;
  phoneNumber: string;
}

const initialState: UserDataState = {
  username: "",
  email: "",
  password: "",
  rPassword: "",
  otp: "",
  phoneNumber: "",
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setRPassword: (state, action: PayloadAction<string>) => {
      state.rPassword = action.payload;
    },
    setOTP: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearData: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.rPassword = "";
      state.otp = "";
      state.phoneNumber = "";
    },
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  setRPassword,
  setOTP,
  setPhoneNumber,
  clearData,
} = fieldSlice.actions;
export default fieldSlice.reducer;
