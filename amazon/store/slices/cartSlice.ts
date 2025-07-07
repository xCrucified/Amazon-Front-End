import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductProperties {
  category: string;
  value: string;
}

export interface Product {
  id: number;
  desc: string;
  isGift: boolean;
  inStock: number;
  selected: number;
  price: number;
  properties: ProductProperties[];
  image: string;
}

interface Cart {
  products: { [id: number]: Product };
}

const initialState: Cart = {
  products: {
    1: {
      id: 1,
      desc: 'Retrospec Solana Yoga Mat 1/2" Thick w/Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce',
      isGift: false,
      inStock: 10,
      selected: 1,
      price: 19.99,
      properties: [
        { category: "Color name", value: "Wild Spruce" },
        { category: "Style", value: "½ Inch" },
      ],
      image: "/assets/images/products/mat.svg",
    },
    2: {
      id: 2,
      desc: "Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR CamerasCanon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras",
      isGift: false,
      inStock: 2,
      selected: 1,
      price: 120.0,
      properties: [{ category: "Color name", value: "Wild Spruce" }],
      image: "/assets/images/products/camera-lens.png",
    },
    3: {
      id: 3,
      desc: "Camera Lens",
      isGift: false,
      inStock: 0,
      selected: 0,
      price: 190.0,
      properties: [{ category: "Color name", value: "Wild Spruce" }],
      image: "/assets/images/products/camera-lens.png",
    },
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      state.products[product.id] = product;
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      delete state.products[action.payload.id];
    },
    markAsGift(state, action: PayloadAction<number>) {
      const product = state.products[action.payload];
      if (product && !product.isGift) {
        product.isGift = true;
      }
    },
    demarkAsGift(state, action: PayloadAction<number>) {
      const product = state.products[action.payload];
      if (product && product.isGift) {
        product.isGift = false;
      }
    },
    increaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products[action.payload];
      if (product && product.selected < product.inStock) {
        product.selected++;
      }
    },
    decreaseSelectedVal(state, action: PayloadAction<number>) {
      const product = state.products[action.payload];
      if (product && product.selected > 0) {
        product.selected--;
      }
    },
    clearCart(state) {
      state.products = {};
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
