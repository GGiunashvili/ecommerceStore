import { FavoriteBorder, ShoppingCartCheckout } from "@mui/icons-material";

// ProductCard.tsx (No changes needed)
type ProductCardProps = {
  name: string;
  price: number;
  discountPrice: number;
  percent: number;
  imageUrl: string;
};

const ProductCardMain = ({
  name,
  price,
  discountPrice,
  percent,
  imageUrl,
}: ProductCardProps) => {
  return (
    <div className="bg-white w-full">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full rounded-md h-[200px]"
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
          <span className="text-gray-400 line-through text-[12px] md:text-[14px] ">
            {price} $
          </span>
        </div>
        <p className="text-gray-500 text-[10px] mt-2 truncate overflow-hidden whitespace-nowrap">
          Monthly: From {discountPrice / 6}$
        </p>

        <h3 className="font-bold text-[12px] md:text-[14px] line-clamp-2">
          {name}
        </h3>
        {/* <p className="text-gray-500 text-[12px]">Electronics • Smartphone</p> */}
      </div>
      <div className="flex">
        <button className="bg-gray-100 rounded-md mr-2 px-2">
          <FavoriteBorder style={{ fontSize: "20px" }} /> {/* Search Icon */}
        </button>
        <button className="bg-purple-100 w-full rounded-md p-[4px] ">
          <ShoppingCartCheckout style={{ fontSize: "20px" }} />{" "}
          {/* Search Icon */}
          Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCardMain;
