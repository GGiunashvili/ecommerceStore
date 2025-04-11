import { FavoriteBorder, ShoppingCartCheckout } from "@mui/icons-material";
const ProductCard = () => {
  return (
    <div className="bg-white w-full">
      {/* Product Image */}
      <div className="relative">
        <img
          src="https://picsum.photos/600/300" // Replace with the actual image URL
          alt="Make It Real Bracelet Building Set"
          className="w-full rounded-md"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          -46%
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-bold text-[14px] md:text-[16px]">
            19 $
          </span>
          <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
            35 $
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-2">Monthly: From 5$</p>

        <h3 className="font-bold text-[12px] md:text-[14px]">
          Make It Real Bracelet Building Set
        </h3>
        <p className="text-gray-500 text-[12px] mb-[4px]">Toys • Toy</p>
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
        {/* Delivery Date */}
      </div>
    </div>
  );
};

export default ProductCard;
