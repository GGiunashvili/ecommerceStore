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
    <div className="border rounded-lg shadow-md p-4 bg-white w-full">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full rounded-md" />
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
        <p className="text-gray-500 text-sm mt-2">
          Monthly: From {discountPrice / 6}$
        </p>

        <h3 className="font-bold text-[12px] md:text-[14px]">{name}</h3>
        {/* <p className="text-gray-500 text-[12px]">Electronics • Smartphone</p> */}
      </div>
    </div>
  );
};

export default ProductCardMain;
