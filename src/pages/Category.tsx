import ProductCard from "../components/ProductCard";
import CategoryFilterDrop from "../components/CategoryFilterDrop";
import CategoryInput from "../components/CategoryInput";
import CategoryBanner from "../components/CategoryBanner";
export default function Category() {
  return (
    <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto grid grid-cols-12 gap-x-[20px] gap-y-[120px] flex-col items-start justify-center min-h-[calc(100vh-308px)] mb-[200px] mt-[200px]">
      <div className="col-span-12 md:col-span-3">
        <CategoryInput />
      </div>
      <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
        <div className="col-span-2 md:col-span-3  lg:col-span-4 text-right">
          <CategoryBanner />
          <CategoryFilterDrop />
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
