import React from "react";

interface Props {
  className?: string;
}
const items: ProductItemProps[] = [
  {
    id: 1,
    name: "Product 1",
    rate: 4.5,
    price: 29.99,
    oldPrice: 39.99,
    properties: {
      Color: "Red",
      style: "Casual",
    },
    createDate: "2024-01-20",
  },
  {
    id: 2,
    name: "Product 2",
    rate: 4.2,
    price: 25.99,
    oldPrice: 35.99,
    properties: {
      Color: "Blue",
      style: "Formal",
    },
    createDate: "2024-01-21",
  },
  {
    id: 3,
    name: "Product 3",
    rate: 4.8,
    price: 49.99,
    oldPrice: 59.99,
    properties: {
      Color: "Green",
      style: "Sport",
    },
    createDate: "2024-01-22",
  },
  {
    id: 4,
    name: "Product 4",
    rate: 4.0,
    price: 19.99,
    oldPrice: 29.99,
    properties: {
      Color: "Black",
      style: "Casual",
    },
    createDate: "2024-01-23",
  },
  {
    id: 5,
    name: "Product 5",
    rate: 3.9,
    price: 15.99,
    oldPrice: 25.99,
    properties: {
      Color: "White",
      style: "Classic",
    },
    createDate: "2024-01-24",
  },
  {
    id: 6,
    name: "Product 6",
    rate: 4.6,
    price: 39.99,
    oldPrice: 49.99,
    properties: {
      Color: "Yellow",
      style: "Casual",
    },
    createDate: "2024-01-25",
  },
  {
    id: 7,
    name: "Product 7",
    rate: 4.3,
    price: 34.99,
    oldPrice: 44.99,
    properties: {
      Color: "Pink",
      style: "Elegant",
    },
    createDate: "2024-01-26",
  },
  {
    id: 8,
    name: "Product 8",
    rate: 4.7,
    price: 59.99,
    oldPrice: 69.99,
    properties: {
      Color: "Gray",
      style: "Business",
    },
    createDate: "2024-01-27",
  },
  {
    id: 9,
    name: "Product 9",
    rate: 4.1,
    price: 27.99,
    oldPrice: 37.99,
    properties: {
      Color: "Brown",
      style: "Casual",
    },
    createDate: "2024-01-28",
  },
  {
    id: 10,
    name: "Product 10",
    rate: 4.9,
    price: 69.99,
    oldPrice: 79.99,
    properties: {
      Color: "Purple",
      style: "Luxury",
    },
    createDate: "2024-01-29",
  },
];
export const ProductItemsGroupList: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export default ProductItemsGroupList;
