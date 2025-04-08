// Category.tsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilterDrop from "../components/CategoryFilterDrop";
import CategoryInput from "../components/CategoryInput";
import CategoryBanner from "../components/CategoryBanner";

type Product = {
  name: string;
  price: number;
  discount_price: number;
  percent: number;
  images: { image_url: string }[];
};

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://dati.pythonanywhere.com/category/?category=Electronics&filter=data"
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto grid grid-cols-12 gap-x-[20px] gap-y-[120px] flex-col items-start justify-center min-h-[calc(100vh-308px)] mb-[200px] mt-[200px]">
      <div className="col-span-12 md:col-span-3">
        <CategoryInput />
      </div>
      <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
        <div className="col-span-2 md:col-span-3 lg:col-span-4 text-right">
          <CategoryBanner />
          <CategoryFilterDrop />
        </div>

        {/* Loop through products and display them */}
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            discountPrice={product.discount_price}
            percent={product.percent}
            imageUrl={
              product.images[0]?.image_url || "https://picsum.photos/600/300"
            } // Fallback image
          />
        ))}
      </div>
    </div>
  );
}
