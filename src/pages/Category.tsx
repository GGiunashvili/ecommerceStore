import ProductCard from "../components/ProductCard";
import CategoryFilterDrop from "../components/CategoryFilterDrop";

export default function Category() {
  return (
    <div className="w-full max-w-[1440px] px-[32px] mx-auto grid grid-cols-12 gap-x-[20px]  gap-y-[120px] flex-col items-start justify-center min-h-[calc(100vh-308px)] mb-[200px] mt-[200px]">
      <div className="col-span-3 bg-red-100">catalog</div>
      <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 bg-red-100">
        <CategoryFilterDrop />

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
