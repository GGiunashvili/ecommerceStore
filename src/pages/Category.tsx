import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardMain from "../components/ProductCardMain";
import CategoryFilterDrop from "../components/CategoryFilterDrop";
import CategoryInput from "../components/CategoryInput";
import CategoryBanner from "../components/CategoryBanner";
import { fetchProducts } from "../store/productsSlice";
import { RootState, AppDispatch } from "../store/store";
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams(); // Get category from URL params
  console.log("Selected category:", category);

  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type for dispatch
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchProducts(category)); // Dispatch action with category
    }
  }, [dispatch, category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCardMain
              key={product.name} // Consider using a unique ID for the key if available
              name={product.name}
              price={product.price}
              discountPrice={product.discount_price}
              percent={product.percent}
              imageUrl={
                product.images[0]?.image_url || "https://picsum.photos/600/300"
              }
            />
          ))
        ) : (
          <div>No products available in this category</div>
        )}
      </div>
    </div>
  );
}
