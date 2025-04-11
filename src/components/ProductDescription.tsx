type Product = {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  images: { image_url: string }[];
  percent: number;
  small_description: string;
  description: string;
  characteristic: {
    brend: string;
    model: number;
    power: string;
  };
};

type Props = {
  product: Product;
};

export default function ProductDescription({ product }: Props) {
  return (
    <>
      <div className="mb-[40px]">
        <p className="mb-[12px] text-[18px] font-bold">{product.name}</p>
        <p className="text-[14px] font-medium">{product.description}</p>
      </div>
      <div>
        <p className="mb-[12px] md:mb-[36px] font-bold text-[18px] md:text-[32px]">
          Additional Features
        </p>
        <div className="max-w-[600px]">
          <p className="mb-[12px] md:mb-[24px] font-bold text-[14px] md:text-[18px]">
            General Information
          </p>
          {/* Corrected section with proper details */}
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Brand</p>
            <p className="font-medium text-[14px] col-span-6 w-full">
              {product.characteristic.brend}
            </p>
          </div>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Model</p>
            <p className="font-medium text-[14px] col-span-6 w-full">
              {product.characteristic.model}
            </p>
          </div>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Power</p>
            <p className="font-medium text-[14px] col-span-6 w-full">
              {product.characteristic.power}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
