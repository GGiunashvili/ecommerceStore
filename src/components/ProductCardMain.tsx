"use client";

import { FavoriteBorder } from "@mui/icons-material";
import AddToBasketButton from "../components/AddToBasketButton";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  name: string;
  price: number;
  discountPrice: number;
  percent: number;
  imageUrl: string;
  productId: number;
};

const ProductCardMain = ({
  name,
  price,
  discountPrice,
  percent,
  imageUrl,
  productId,
}: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/detail/${productId}`)}
      >
        <div className="relative ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full rounded-md h-[200px] object-contain"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
            -{percent}%
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 mt-2">
            <span className="text-red-500 font-bold text-[14px] md:text-[16px]">
              {discountPrice} $
            </span>
            <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
              {price} $
            </span>
          </div>
          <p className="text-gray-500 text-[10px] mt-2 truncate">
            Monthly: From {(discountPrice / 6).toFixed(2)}$
          </p>
          <h3 className="font-bold text-[12px] md:text-[14px] line-clamp-2 h-[42px]">
            {name}
          </h3>
        </div>
      </div>

      <div className="flex items-center mt-2 gap-2">
        <button className="bg-gray-100 rounded-md px-2 py-1">
          <FavoriteBorder style={{ fontSize: "20px" }} />
        </button>
        <AddToBasketButton productId={productId} />
      </div>
    </div>
  );
};

export default ProductCardMain;
