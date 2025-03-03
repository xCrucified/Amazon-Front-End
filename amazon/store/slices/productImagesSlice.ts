import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductImage {
  id: number;
  url: string;
}

interface ProductImagesState {
  images: ProductImage[];
}

const initialState: ProductImagesState = {
  images: [
    {
      id: 0,
      url: "/assets/images/banner.png",
    },
    {
      id: 1,
      url: "/assets/images/products/drone.png",
    },
    {
      id: 2,
      url: "/assets/images/products/drone.png",
    },
    {
      id: 3,
      url: "/assets/images/products/kettle.svg",
    },
    {
      id: 4,
      url: "/assets/images/products/mat.svg",
    },
  ],
};

const productImagesSlice = createSlice({
  name: 'productImages',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ProductImage[]>) => {
      state.images = action.payload;
    },
    addImage: (state, action: PayloadAction<ProductImage>) => {
      state.images.push(action.payload);
    },
    removeImage: (state, action: PayloadAction<number>) => {
      state.images = state.images.filter(image => image.id !== action.payload);
    },
  },
});

export const { setImages, addImage, removeImage } = productImagesSlice.actions;

export default productImagesSlice.reducer;