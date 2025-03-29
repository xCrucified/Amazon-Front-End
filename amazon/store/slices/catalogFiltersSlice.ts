import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatalogFiltersState {
  category: string | null;
  subcategory: string | null;
  priceRange: [number, number] | null;
  inStock: boolean | null;
  search: string | null;
  minRating: number | null;
  sortBy: string | null;
}

const initialState: CatalogFiltersState = {
  category: "Electronics",
  subcategory: null,
  priceRange: [0, 1000],
  inStock: false,
  search: "",
  minRating: 1,
  sortBy: "priceDesc",
};

const catalogFiltersSlice = createSlice({
  name: "catalogFilters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
    setSubcategory(state, action: PayloadAction<string | null>) {
      state.subcategory = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setInStock(state, action: PayloadAction<boolean>) {
      state.inStock = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setMinRating(state, action: PayloadAction<number>) {
      state.minRating = action.payload;
    },
    setSortBy(state, action: PayloadAction<string | null>) {
      state.sortBy = action.payload;
    },
    resetFilters(state) {
      state.category = null;
      state.subcategory = null;
      state.priceRange = [0, 1000];
      state.inStock = false;
      state.search = "";
      state.minRating = 1;
      state.sortBy = "priceDesc";
    },
  },
});

export const {
  setCategory,
  setSubcategory,
  setPriceRange,
  setInStock,
  setSearch,
  setMinRating,
  setSortBy,
  resetFilters,
} = catalogFiltersSlice.actions;

export default catalogFiltersSlice.reducer;
