"use client";

import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-green-600 font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
