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
  name: string | null;
  categoryId: number;
  subcategoryId: number;
  description: string;
  reviews: Review[];
  price: number;
  images: ProductImage[];
  inStock: number;
  selected: number | null;
  properties: ProductProperties[] | null;
}

export interface ProductImage {
  id: number;
  image: string;
  productId: number;
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

export interface Address {
  id: number;
  name: string;
  fullname: string;
  phoneNumber: string;
  country: string;
  city: string;
  street: string;
  building: string;
  postalCode: string;
  isDefault: boolean;
}

export interface PaymentCard {
  name: string;
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cardType: CardType;
  cvv: string;
}

export type CardType = "visa" | "mastercard";
