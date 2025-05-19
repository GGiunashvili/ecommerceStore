"use client";

import { Delete } from "@mui/icons-material";
import axios from "axios";

interface BasketCardProps {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  percent: number;
  imageUrl: string;
  onRemove?: (id: string) => void;
}

const BasketCard: React.FC<BasketCardProps> = ({
  id,
  name,
  price,
  discountPrice,
  percent,
  imageUrl,
  onRemove,
}) => {
  const handleDelete = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Token არ მოიძებნა ❌");
      return;
    }

    try {
      // ვიღებთ კალათაში არსებულ პროდუქტების ID-ებს
      const res = await axios.get("https://dati.pythonanywhere.com/basket/4/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ვფილტრავთ ისე, რომ წასაშლელი ID ამოვშალოთ
      const updatedProductIds = res.data.products.filter(
        (productId: number) => productId !== Number(id)
      );

      // ვაგზავნით განახლებულ ID-ების სიას
      await axios.patch(
        "https://dati.pythonanywhere.com/basket/4/",
        { products: updatedProductIds },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("პროდუქტი ამოიშალა კალათიდან ✅");
      onRemove?.(id);
    } catch (error) {
      console.error(error);
      alert("წაშლის დროს მოხდა შეცდომა ❌");
    }
  };

  return (
    <div className="flex h-fit border border-gray-200 rounded-lg shadow-md p-4 bg-white w-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full max-w-[120px] max-h-[120px] rounded-md"
      />
      <div className="flex justify-between w-full pl-[16px] gap-[20px] items-start">
        <div>
          <h3 className="font-bold text-[12px] md:text-[14px]">{name}</h3>
          <p className="text-gray-500 text-[12px]">Toys • Toy</p>
          <p className="text-gray-500 text-sm">Monthly: From 5$</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-red-500 font-bold text-[14px] md:text-[16px]">
            {discountPrice} $
          </span>
          <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
            {price} $
          </span>
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
            -{percent}%
          </span>
        </div>

        <button onClick={handleDelete}>
          <Delete className="text-black" style={{ fontSize: "24px" }} />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
