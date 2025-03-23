import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  activeId: number | null;
}

const initialState: CategoryState = {
  activeId: 1,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
  },
});

export const { setActiveId } = categorySlice.actions;
export default categorySlice.reducer;
