import { Link } from "react-router-dom";
import { ShoppingCartCheckout } from "@mui/icons-material";
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
      </div>

      <div className="mt-[300px]">basket</div>
    </>
  );
}
