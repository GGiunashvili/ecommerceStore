"use client";

import React from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  discountPrice: number;
  percent: number;
  images: {
    id: number;
    image_url: string;
  }[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/detail/${product.id}`)}
    >
      <div className="relative ">
        <img
          src={product.images[0].image_url}
          alt={product.name}
          className="w-full rounded-md h-[200px] object-contain"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          -{product.percent}%
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-bold text-[14px] md:text-[16px]">
            {product.discountPrice} $
          </span>
          <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
            {product.price} $
          </span>
        </div>
        <p className="text-gray-500 text-[10px] mt-2 truncate">
          Monthly: From {(product.discountPrice / 6).toFixed(2)}$
        </p>
        <h3 className="font-bold text-[12px] md:text-[14px] line-clamp-2 h-[42px]">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
