import { Link } from "react-router-dom";
import { ShoppingCartCheckout } from "@mui/icons-material";
import BasketCard from "../components/BasketCard";
import BasketPrise from "../components/BasketPrise";
import Carousel from "../components/Carousel";
export default function Basket() {
  return (
    <>
      <div className="hidden min-h-[calc(100vh-308px)]  flex-col justify-center items-center text-center p-4 mt-[180px]">
        <ShoppingCartCheckout style={{ fontSize: "180px" }} />{" "}
        <p className="text-xl mb-2">Your cart is empty</p>
        <p className="text-gray-600 mb-6">
          Fill it with items you have in mind on X
        </p>
        <div className="flex items-center gap-4">
          <p>Discounts</p>
          <Link to="/"> Home Page</Link>
        </div>
      </div>{" "}
      <div className="mt-[240px] md:mt-[180px] mb-[200px] w-full  max-w-[1200px] mx-auto">
        <p className="mb-[20px] text-[18px] md:text-[24px] font-bold px-[16px] md:px-[32px]">
          {" "}
          You have 11 items in your cart
        </p>
        <div className="relative  w-full max-w-[1200px] px-[16px] md:px-[32px] grid grid-cols-12 gap-[40px] mx-auto ">
          <div className="col-span-12 md:col-span-8  grid gap-y-[25px]">
            <BasketCard />
            <BasketCard />
            <BasketCard />
            <BasketCard />
          </div>
          <div className="col-span-12 md:col-span-4">
            <BasketPrise />
          </div>

          <div className="col-span-12">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
