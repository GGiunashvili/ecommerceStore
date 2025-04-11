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

export default function ProductAbout({ product }: Props) {
  return (
    <div className="w-full mt-[24px] md:mt-0">
      <p className="font-bold text-[14px] mb-[4px]">ID: {product.id}</p>
      <p className="font-bold text-[14px] mb-[12px]">{product.name}</p>
      <p className="font-medium text-[14px] mb-[10px]">
        {product.small_description}
      </p>
    </div>
  );
}

// export default function ProductAbout({ product }: Props) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold">{product.name}</h2>
//       <p className="text-lg">Price: ${product.price}</p>
//       <p className="text-lg">Discount Price: ${product.discount_price}</p>
//       <p className="text-sm">Discount: {product.percent}%</p>
//       <img
//         src={product.images[0]?.image_url || "https://picsum.photos/600/300"}
//         alt={product.name}
//         className="rounded-xl mt-4"
//       />
//     </div>
//   );
// }
