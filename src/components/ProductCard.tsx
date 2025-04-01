const ProductCard = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white w-full">
      {/* Product Image */}
      <div className="relative">
        <img
          src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
          alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
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
            19 ₾
          </span>
          <span className="text-gray-400 line-through text-[12px] md:text-[14px]">
            35 ₾
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-2">თვეში: 5ლ დან</p>

        <h3 className="font-bold text-[12px] md:text-[14px]">
          Make It Real სამაჯურების ასაწყობი ნაკრები
        </h3>
        <p className="text-gray-500 text-[12px]">Toys • სათამაშო</p>

        {/* Delivery Date */}
      </div>
    </div>
  );
};

export default ProductCard;
