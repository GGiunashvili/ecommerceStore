"use client";

import { ShoppingCartCheckout } from "@mui/icons-material";
import { FC, useState } from "react";

interface AddToBasketButtonProps {
  productId: string | number;
}

const AddToBasketButton: FC<AddToBasketButtonProps> = ({ productId }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToBasket = async () => {
    const existing = localStorage.getItem("selectedProductIds");
    let ids: string[] = existing ? JSON.parse(existing) : [];

    const productIdString = productId.toString();

    if (!ids.includes(productIdString)) {
      ids.push(productIdString);
      localStorage.setItem("selectedProductIds", JSON.stringify(ids));
      console.log("Added ID:", productId);
    } else {
      console.log("ID already exists:", productId);
    }

    // ახლა გამოგვაქვს accessToken localStorage-დან
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("No access token found");
      return;
    }

    setLoading(true);

    try {
      // მაგალითად, user ID 2 გაქვს, შენივე ლინკიდან იდენტიფიცირე
      // products უნდა იყოს მთელი array product IDs-ით (numbers, არა strings)
      const response = await fetch(
        "https://dati.pythonanywhere.com/basket/4/",
        {
          method: "PUT", // ან POST თუ ახალი ქმნი
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // აქ ტოკენი იწოდება
          },
          body: JSON.stringify({
            products: ids.map((id) => Number(id)),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update basket");
      }

      const data = await response.json();
      console.log("Basket updated:", data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToBasket}
      disabled={loading}
      className="bg-purple-100 flex-1 rounded-md px-2 py-1 flex items-center justify-center gap-1 transition-all duration-150 active:scale-95 active:shadow-inner disabled:opacity-50"
    >
      <ShoppingCartCheckout style={{ fontSize: "20px" }} />
      {loading ? "Adding..." : "Add"}
    </button>
  );
};

export default AddToBasketButton;
