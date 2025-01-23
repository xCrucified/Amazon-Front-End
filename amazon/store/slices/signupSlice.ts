import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "date-fns";

interface UserDataState {
  username: string;
  email: string;
  password: string;
  rPassword: string;
  birthDate: string;
  countryCode: string;
  countryCodeLabel: string;
  phoneNumber: string;
  avatarPicture: string;
  avatarPictureUrl: string;
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
  avatarPicture: "",
  avatarPictureUrl: "",
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
    setAvatarPicture: (state, action: PayloadAction<string>) => {
      state.avatarPicture = action.payload;
    },
    setAvatarPictureUrl: (state, action: PayloadAction<string>) => {
      state.avatarPictureUrl = action.payload;
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
      state.avatarPicture = "";
      state.avatarPictureUrl = "";
    },
    clearImage: (state) => {
      state.avatarPicture = "";
      state.avatarPictureUrl = "";
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
  setAvatarPicture,
  setAvatarPictureUrl,
  clearData,
  clearImage,
} = fieldSlice.actions;
export default fieldSlice.reducer;
