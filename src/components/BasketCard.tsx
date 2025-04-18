import { Delete } from "@mui/icons-material";

interface BasketCardProps {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  percent: number;
  imageUrl: string;
  onRemove: (id: string) => void;
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
  return (
    <div className="flex h-fit border border-gray-200 rounded-lg shadow-md p-4 bg-white w-full">
      {/* Product Image */}
      <img
        src={imageUrl} // Use actual image URL from props
        alt={name}
        className="w-full max-w-[120px] max-h-[120px] rounded-md"
      />

      {/* Product Info */}
      <div className="flex justify-between w-full pl-[16px] gap-[20px] items-start">
        {/* Product Name & Info */}
        <div>
          <h3 className="font-bold text-[12px] md:text-[14px]">{name}</h3>
          <p className="text-gray-500 text-[12px]">Toys • Toy</p>
          <p className="text-gray-500 text-sm">Monthly: From 5$</p>
        </div>

        {/* Price */}
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

        {/* Remove Button */}
        <button onClick={() => onRemove(id)}>
          <Delete className="text-black" style={{ fontSize: "24px" }} />
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
