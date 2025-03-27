import { Cart, Product } from "@/lib/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart = {
  products: [
    {
      id: 1,
      description:
        'Retrospec Solana Yoga Mat 1/2" Thick w/Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce',
      reviews: [],
      price: 19.99,
      image: "/assets/images/products/mat.svg",
      inStock: 10,
      selected: 1,
      properties: [
        { key: "Color name", value: "Wild Spruce" },
        { key: "Style", value: "½ Inch" },
      ],
    },
    {
      id: 2,
      description:
        "Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR CamerasCanon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras",
      reviewsCount: 0,
      price: 120.0,
      oldPrice: undefined,
      priceFeatures: undefined,
      image: "/assets/images/products/camera-lens.png",
      isGift: false,
      inStock: 2,
      selected: 1,
      properties: [{ key: "Color name", value: "Wild Spruce" }],
    },
    {
      id: 3,
      title: "Camera Lens",
      brand: "",
      top1Rated: false,
      rating: 0,
      reviewsCount: 0,
      features: "Wild Spruce",
      price: 190.0,
      oldPrice: undefined,
      priceFeatures: undefined,
      image: "/assets/images/products/camera-lens.png",
      isGift: false,
      inStock: 0,
      selected: 0,
      properties: [{ key: "Color name", value: "Wild Spruce" }],
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.selected++;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
    },
    markAsGift(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product) {
        product.isGift = true;
      }
    },
    demarkAsGift(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product) {
        product.isGift = false;
      }
    },
    increaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product && product.selected < product.inStock) {
        product.selected++;
      }
    },
    decreaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products.find((_, index) => index === action.payload);
      if (product && product.selected > 0) {
        product.selected--;
      }
    },
    clearCart(state) {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  markAsGift,
  demarkAsGift,
  increaseSelectedVal,
  decreaseSelectedVal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
