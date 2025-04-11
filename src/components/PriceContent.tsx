import { DateRange, LocalShipping } from "@mui/icons-material";
type Product = {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  images: { image_url: string }[];
  percent: number;
  small_description: string;
};

type Props = {
  product: Product;
};

export default function PriceContent({ product }: Props) {
  return (
    <div className="sticky top-[100px] border-gray-300 border-t md:border-none  mx-auto bg-white md:shadow-[0px_0px_16px_rgba(203,203,203,0.25)] mt-[12px] md:mt-0 md:rounded-[16px] md:p-[20px]">
      <div className="flex gap-x-[12px] items-center  mt-[12px] md:mt-0">
        <p className="text-black text-[26px] font-bold">
          {product.discount_price} $
        </p>
        <p className="text-gray-500 line-through text-[16px]">
          {product.price} $
        </p>

        <p className="bg-red-500 rounded-full text-white text-[12px] p-[4px]">
          {product.percent}%
        </p>
      </div>

      <p className=" text-sm text-left mt-2">
        <DateRange style={{ fontSize: "24px" }} /> Monthly:{" "}
        <span className="font-bold">148$-from</span> 0%
      </p>

      <p className="text-sm text-left mt-2">
        <LocalShipping style={{ fontSize: "24px" }} /> Free delivery{" "}
        <span className="font-bold text-blue-600">within 3 hours</span>
      </p>

      <div className="flex flex-col gap-[12px] mt-4">
        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">
          Add to Cart
        </button>
        <div className="flex md:flex-col gap-y-[12px] gap-x-[12px]">
          <button className="w-full bg-green-400 text-white py-2 rounded-lg">
            Buy Now
          </button>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            Installment
          </button>
        </div>
      </div>
    </div>
  );
}
