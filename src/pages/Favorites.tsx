import { Delete } from "@mui/icons-material";
// import ProductCard from "../components/ProductCard";
import { useAuth } from "../components/auth/authContext"; // useAuth import
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Favorites() {
  const { currentUser } = useAuth(); // get context values
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]); // Check if user is logged in
  return (
    <>
      <p className="w-full max-w-[1200px] mx-auto px-[16px] md:px-[32px] pt-[20px] font-bold text-[18px] md:text-[24px] mb-[20px]">
        Favorites
      </p>

      <div className="w-full max-w-[1200px] mx-auto px-[16px] md:px-[32px]  grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[20px] mb-[50px] md:mb-[100px]">
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>{" "}
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>{" "}
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>{" "}
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>{" "}
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>{" "}
        <div className="relative">
          {/* <ProductCard /> */}
          <button className="absolute right-[14px] top-[8px]">
            <Delete className="text-black" style={{ fontSize: "24px" }} />{" "}
            {/* Search Icon */}
          </button>
        </div>
      </div>
    </>
  );
}
