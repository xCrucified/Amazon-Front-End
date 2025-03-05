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
      url: "/assets/images/productImg.png",
    },
    {
      id: 1,
      url: "/assets/images/productImg.png",
    },
    {
      id: 2,
      url: "/assets/images/productImg.png",
    },
    {
      id: 3,
      url: "/assets/images/productImg.png",
    },
    {
      id: 4,
      url: "/assets/images/productImg.png",
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