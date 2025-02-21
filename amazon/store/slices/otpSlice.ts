import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OtpState {
  cooldown: number;
}

const initialState: OtpState = {
  cooldown: 60,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setCooldown(state, action: PayloadAction<number>) {
      state.cooldown = action.payload;
    },
    decrementCooldown(state) {
      if (state.cooldown > 0) {
        state.cooldown -= 1;
      }
    },
  },
});

export const { setCooldown, decrementCooldown } = otpSlice.actions;
export default otpSlice.reducer;