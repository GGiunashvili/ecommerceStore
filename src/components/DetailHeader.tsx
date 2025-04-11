type Product = {
  name: string;
  category: {
    name: string;
  };
};

type Props = {
  product: Product;
};

import { FavoriteBorder } from "@mui/icons-material";
export default function DetailHeader({ product }: Props) {
  return (
    <div className="relative col-span-12 w-full flex justify-end md:justify-between items-center md:items-center mb-[24px] md:mb-[30px]">
      {/* სათაური */}

      <li className="hidden md:flex text-[16px] md:text-[18px] font-semibold text-center">
        {product.category.name}
      </li>

      {/* სურვილების ღილაკი */}

      <button className="flex bg-gray-100 text-black p-2 md:px-3 rounded-full absolute md:static right-0 top-0 ">
        <FavoriteBorder style={{ fontSize: "24px" }} />{" "}
        <span className="ml-[6px] hidden md:flex">Add to Wishlist</span>
      </button>
    </div>
  );
}
