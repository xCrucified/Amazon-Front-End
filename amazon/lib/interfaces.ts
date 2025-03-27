export interface User {
  id: number;
  username: string;
  email: string;
  phoneNyumber: string;
  cart: Cart;
  wishlists: Wishlist[];
  orders: Order[];
}

export interface Cart {
  products: Product[];
}

export interface Wishlist {
  id: number;
  name: string;
  isPublic: boolean;
  products: Product[];
}

export interface Order {
  products: Product[];
  purchaseDate: Date;
}

export interface Product {
  id: number;
  description: string;
  reviews: Review[];
  price: number;
  image: string;
  inStock: number;
  selected: number;
  properties: ProductProperties[];
}

export interface ProductProperties {
  key: string;
  value: string;
}

export interface Review {
  id: number;
  reviewText: string;
  postDate: Date;
  rate: number;
  user: User;
}
