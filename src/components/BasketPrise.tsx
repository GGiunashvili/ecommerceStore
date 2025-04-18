import { useState, useEffect } from "react";
import { Product } from "../pages/Basket";
export default function BasketPrice({
  savedProducts,
}: {
  savedProducts: Product[];
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState<number>(0);

  useEffect(() => {
    // კალათაში ყველა პროდუქტის სრულ ფასი და ფასდაკლული ფასის გამოთვლა
    const total = savedProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );
    const totalDiscount = savedProducts.reduce(
      (acc, product) => acc + product.discount_price,
      0
    );

    setTotalPrice(total);
    setTotalDiscountPrice(totalDiscount);
  }, [savedProducts]);

  return (
    <div className="sticky top-[208px] md:top-[168px] flex flex-col gap-y-[12px] md:border-gray-200 md:shadow-md md:border mx-auto bg-white mt-[12px] md:mt-0 md:rounded-[16px] md:p-[20px]">
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-bold text-left">
          Products ({savedProducts.length})
        </p>
        <p className="text-[14px] font-bold">{totalDiscountPrice} $</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-medium text-left">Discount</p>
        <p className="text-[14px] font-medium">
          {totalPrice - totalDiscountPrice} $
        </p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-medium text-left">Delivery Fee</p>
        <p className="text-[14px] font-medium">0 $</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-[14px] font-bold text-left">Total Price</p>
        <p className="text-[14px] font-bold">{totalDiscountPrice} $</p>
      </div>
      <button className="w-full bg-green-400 text-white py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  );
}
