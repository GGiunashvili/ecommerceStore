export default function BasketPrice() {
  return (
    <div className="sticky top-[208px] md:top-[168px] flex flex-col gap-y-[12px] md:border-gray-200 md:shadow-md md:border mx-auto bg-white mt-[12px] md:mt-0 md:rounded-[16px] md:p-[20px]">
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-bold text-left">Products (11)</p>
        <p className="text-[14px] font-bold">6779.00 $</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-medium text-left">Discount</p>
        <p className="text-[14px] font-medium">10$</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-medium text-left">Delivery Fee</p>
        <p className="text-[14px] font-medium">0</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-bold text-left">Total Price</p>
        <p className="text-[14px] font-bold">1290$</p>
      </div>
      <button className="w-full bg-green-400 text-white py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  );
}
