import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDataState {
  username: string;
  email: string;
  password: string;
  rPassword: string;
  birthDate: string;
  countryCode: string;
  countryCodeLabel: string;
  phoneNumber: string;
}

const initialState: UserDataState = {
  username: "",
  email: "",
  password: "",
  rPassword: "",
  birthDate: new Date().toISOString(),
  countryCode: "",
  countryCodeLabel: "Select country code...",
  phoneNumber: "",
};

const textFieldSlice = createSlice({
  name: "textField",
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
    setBirthdate: (state, action: PayloadAction<string>) => {
      state.birthDate = action.payload;
    },
    setCountryCode: (state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
    },
    setCountryCodeLabel: (state, action: PayloadAction<string>) => {
      state.countryCodeLabel = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearData: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.rPassword = "";
      state.birthDate = new Date().toISOString();
      state.countryCode = "";
      state.countryCodeLabel = "Select country code...";
      state.phoneNumber = "";
    },
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  setRPassword,
  setBirthdate,
  setCountryCode,
  setCountryCodeLabel,
  setPhoneNumber,
  clearData,
} = textFieldSlice.actions;
export default textFieldSlice.reducer;
