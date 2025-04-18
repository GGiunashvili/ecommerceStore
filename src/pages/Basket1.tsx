"use client";
import { useEffect, useState } from "react";
import BasketCard from "../components/BasketCard";

interface Product {
  id: string;
  name: string;
  price: number;
  discount_price: number;
  percent: number;
  images: { image_url: string }[];
}

export default function Basket() {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("selectedProductIds");
    const savedIds: string[] = existing ? JSON.parse(existing) : [];

    // Get saved products from the API
    Promise.all(
      savedIds.map((id) =>
        fetch(`https://dati.pythonanywhere.com/products/${id}`).then((res) =>
          res.json()
        )
      )
    ).then((data: Product[]) => {
      setSavedProducts(data);
    });
  }, []);

  const handleRemove = (id: string) => {
    // Filter out the product to be removed
    const updatedProducts = savedProducts.filter(
      (product) => product.id !== id
    );
    setSavedProducts(updatedProducts);

    // Update the localStorage with the new list of product IDs
    const updatedIds = updatedProducts.map((product) => product.id);
    localStorage.setItem("selectedProductIds", JSON.stringify(updatedIds));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {savedProducts.length > 0 ? (
        savedProducts.map((product) => (
          <BasketCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            discountPrice={product.discount_price}
            percent={product.percent}
            imageUrl={product.images?.[0]?.image_url}
            onRemove={handleRemove} // Pass handleRemove function to the BasketCard
          />
        ))
      ) : (
        <div className="col-span-full text-center">არაფერი გაქვს კალათაში</div>
      )}
    </div>
  );
}
