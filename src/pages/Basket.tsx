import { Link } from "react-router-dom";
import { ShoppingCartCheckout } from "@mui/icons-material";
import BasketCard from "../components/BasketCard";
import BasketPrise from "../components/BasketPrise";
import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  discount_price: number;
  percent: number;
  images: { image_url: string }[];
}

export default function Basket() {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("selectedProductIds");
    const savedIds: string[] = existing ? JSON.parse(existing) : [];

    // Get saved products from the API
    Promise.all(
      savedIds.map((id) =>
        fetch(`https://dati.pythonanywhere.com/products/${id}`).then((res) =>
          res.json()
        )
      )
    ).then((data: Product[]) => {
      setSavedProducts(data);
    });
  }, []);

  const handleRemove = (id: string) => {
    // Filter out the product to be removed
    const updatedProducts = savedProducts.filter(
      (product) => product.id !== id
    );
    setSavedProducts(updatedProducts);

    // Update the localStorage with the new list of product IDs
    const updatedIds = updatedProducts.map((product) => product.id);
    localStorage.setItem("selectedProductIds", JSON.stringify(updatedIds));
  };

  return (
    <>
      {savedProducts.length === 0 ? (
        // ცარიელი კალათის სტილი
        <div className="flex flex-col justify-center items-center text-center min-h-[50vh]">
          <ShoppingCartCheckout style={{ fontSize: "180px" }} />
          <p className="text-xl mb-2">Your cart is empty</p>
          <p className="text-gray-600 mb-6">
            Fill it with items you have in mind on X
          </p>
          <div className="flex items-center gap-4">
            <p>Discounts</p>
            <Link to="/">Home Page</Link>
          </div>
        </div>
      ) : (
        // როცა კალათაში პროდუქტები არის
        <div className="w-full max-w-[1200px] pt-[20px] mx-auto mb-[50px] md:mb-[100px]">
          <p className="mb-[20px] text-[18px] md:text-[24px] font-bold px-[16px] md:px-[32px]">
            You have {savedProducts.length} items in your cart
          </p>
          <div className="relative flex md:grid flex-col px-[16px] md:px-[32px] grid-cols-12 gap-[40px] mx-auto">
            <div className="col-span-12 md:col-span-8 grid gap-y-[25px]">
              {savedProducts.map((product) => (
                <BasketCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  discountPrice={product.discount_price}
                  percent={product.percent}
                  imageUrl={product.images?.[0]?.image_url}
                  onRemove={handleRemove}
                />
              ))}
            </div>
            <div className="col-span-12 md:col-span-4">
              <BasketPrise savedProducts={savedProducts} />
            </div>
            <div className="col-span-12">
              <Carousel category="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
