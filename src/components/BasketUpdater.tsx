"use client";

import { useState } from "react";

const BasketCreator = () => {
  const [productId, setProductId] = useState<number | "">("");

  const createBasket = async (productId: number) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Access token not found");
      return;
    }

    const response = await fetch("https://dati.pythonanywhere.com/basket/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        products: [productId],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Failed to create basket:", error);
    } else {
      const data = await response.json();
      console.log("Basket created:", data);
    }
  };

  const handleClick = () => {
    if (typeof productId === "number") {
      createBasket(productId);
      setProductId("");
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(Number(e.target.value))}
        placeholder="Enter product ID"
        className="border px-2 py-1 mr-2"
      />
      <button
        onClick={handleClick}
        className="bg-green-600 text-white px-4 py-1 rounded"
      >
        ბასკეტის შექმნა
      </button>
    </div>
  );
};

export default BasketCreator;
