import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Props {
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <div className={className}>
      <h1>Best Sellers in Sports & Outdoors</h1>
      <div className="product-list">
        {data.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Цена: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
