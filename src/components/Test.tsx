"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Characteristic {
  id: number;
  brend: string;
  model: string;
  power: string;
  cable_length: number;
  Warranty_period: number;
}

interface Product {
  name: string;
  price: number;
  percent: number;
  characteristic: Characteristic[];
  image_url: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get<Product>("https://dati.pythonanywhere.com/products/1/")
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Axios error:", err));
  }, []);

  if (!product) return <p>იტვირთება...</p>;

  const info = product.characteristic[0];

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full rounded-lg"
      />
      <h1 className="text-xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">ფასი: {product.price} ₾</p>

      {info && (
        <div className="mt-4">
          <p>
            <strong>ბრენდი:</strong> {info.brend}
          </p>
          <p>
            <strong>მოდელი:</strong> {info.model}
          </p>
          <p>
            <strong>ბატარეა:</strong> {info.power}
          </p>
          <p>
            <strong>კაბელის სიგრძე:</strong> {info.cable_length}მ
          </p>
          <p>
            <strong>გარანტია:</strong> {info.Warranty_period} წელი
          </p>
        </div>
      )}
    </div>
  );
}
