import { Delete } from "@mui/icons-material";

const BasketCard = () => {
  return (
    <div className="flex border border-gray-200 rounded-lg shadow-md p-4 bg-white w-full">
      {/* Product Image */}
      <img
        src="https://picsum.photos/600/300" // Replace with the actual image URL
        alt="Make It Real Bracelet Building Set"
        className="w-full max-w-[120px] max-h-[120px] rounded-md"
      />

      {/* Product Info */}
      <div className="flex justify-between w-full pl-[16px] gap-[20px] items-start">
        {/* Price */}
        <div>
          <h3 className="font-bold text-[12px] md:text-[14px]">
            Make It Real Bracelet Building Set
          </h3>
          <p className="text-gray-500 text-[12px]">Toys • Toy</p>
          <p className="text-gray-500 text-sm">Monthly: From 5$</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-[14px] md:text-[16px]">
            19 $
          </span>
          <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
            35 $
          </span>
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
            -46%
          </span>
        </div>
        <button>
          {" "}
          <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
        </button>

        {/* Delivery Date */}
      </div>
    </div>
  );
};

export default BasketCard;
