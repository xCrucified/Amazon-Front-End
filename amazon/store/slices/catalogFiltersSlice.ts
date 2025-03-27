import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatalogFiltersState {
  category: string | null;
  subcategory: string | null;
  priceRange: [number, number];
  searchQuery: string;
  sortBy: string | null;
}

const initialState: CatalogFiltersState = {
  category: null,
  subcategory: null,
  priceRange: [0, 1000],
  searchQuery: "",
  sortBy: null,
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
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSortBy(state, action: PayloadAction<string | null>) {
      state.sortBy = action.payload;
    },
    resetFilters(state) {
      state.category = initialState.category;
      state.priceRange = initialState.priceRange;
      state.searchQuery = initialState.searchQuery;
      state.sortBy = initialState.sortBy;
    },
  },
});

export const { setCategory, setPriceRange, setSearchQuery, setSortBy, resetFilters } =
  catalogFiltersSlice.actions;

export default catalogFiltersSlice.reducer;
