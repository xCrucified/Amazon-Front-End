import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, jwtParse } from "@/lib/utils";
import { RootState } from "../store";

interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const getUserFromToken = (token: string | null): IUser | null => (token ? jwtParse(token) : null);

const userInit = (): IUserState => {
  const sessionAccessToken = sessionStorage.getItem(process.env.ACCESS_TOKEN || "");
  const savedAccessToken = localStorage.getItem(process.env.ACCESS_TOKEN || "");
  const sessionRefToken = sessionStorage.getItem(process.env.REFRESH_TOKEN || "");
  const savedRefToken = localStorage.getItem(process.env.REFRESH_TOKEN || "");
  const accessToken: string | null = sessionAccessToken || savedAccessToken;
  const refreshToken: string | null = sessionRefToken || savedRefToken;
  const user = getUserFromToken(accessToken);
  return {
    user: user,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

const initialState: IUserState = userInit();
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.user = getUserFromToken(action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.user = getUserFromToken(action.payload);
      state.accessToken = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const getUser = (state: RootState) => state.user.user;
export const getAccessToken = (state: RootState) => state.user.accessToken;
export const getRefreshToken = (state: RootState) => state.user.refreshToken;
export const { setCredentials, updateAccessToken, logOut } = userSlice.actions;
export default userSlice.reducer;
