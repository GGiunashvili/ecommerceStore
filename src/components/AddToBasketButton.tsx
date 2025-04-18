"use client";
import { ShoppingCartCheckout } from "@mui/icons-material";

import { FC } from "react";

interface AddToBasketButtonProps {
  productId: string | number;
}

const AddToBasketButton: FC<AddToBasketButtonProps> = ({ productId }) => {
  const handleAddToBasket = () => {
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
  };

  return (
    <button
      onClick={handleAddToBasket}
      className="bg-purple-100 flex-1 rounded-md px-2 py-1 flex items-center justify-center gap-1 transition-all duration-150 active:scale-95 active:shadow-inner"
    >
      <ShoppingCartCheckout style={{ fontSize: "20px" }} />
      Add
    </button>
  );
};

export default AddToBasketButton;
