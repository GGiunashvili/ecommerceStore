import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FavoriteBorder,
  ShoppingCartCheckout,
  PermIdentity,
  Search,
} from "@mui/icons-material";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header className="w-full fixed top-0 text-center m-auto z-10 bg-white text-white pb-4 shadow-[0px_2px_6px_rgba(0,0,0,0.08)] ">
        <div className="flex h-[36px] w-full items-center justify-center bg-purple-600 text-center mb-[12px]">
          <p className="font-semibold text-[10px] md:text-[12px] text-white">
            Free delivery within Tbilisi. Free delivery on orders of at least 50
            GEL in regions.
          </p>
        </div>
        <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto mb-[12px] flex justify-between items-center">
          <Link to="/">
            <div className="text-[24px] text-black font-bold">
              <span>LOGO</span>
            </div>
          </Link>
          <div className="px-[16px] md:px-[32px] w-full hidden md:flex items-center overflow-hidden">
            <input
              data-cy="search_input"
              autoComplete="off"
              id="inputDesktop"
              name="search"
              type="text"
              className="h-12 w-full text-ellipsis rounded-l-lg border-1 border-r-0 border-purple-600 pr-4 text-black outline-none pl-3"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              data-cy="search_button"
              aria-label="Justify"
              className="border-1 border-purple-600 bg-purple-600 z-10 flex h-12 items-center justify-center rounded-r-lg px-4 font-medium text-white transition duration-300 hover:bg-purple-100 hover:text-purple"
            >
              <Search style={{ fontSize: "24px" }} /> {/* Search Icon */}
            </button>
          </div>
          {/* Navigation */}
          <div className="flex justify-between items-center gap-x-[28px] md:gap-x-[32px] h-12 py-[4px]">
            <Link
              to="/Favorites"
              className="relative flex justify-center md:justify-between items-center flex-col text-black font-light h-full"
            >
              <FavoriteBorder style={{ fontSize: "24px" }} />{" "}
              {/* Favorite Icon */}
              <p className="text-[12px] hidden md:flex">Favorites</p>
              <p className="bg-red-500 text-[10px] flex items-center justify-center absolute top-[-4px] right-0 rounded-full text-white font-bold w-[18px] h-[18px]">
                11
              </p>
            </Link>
            <Link
              to="/Basket"
              className="relative flex justify-center md:justify-between items-center flex-col text-black font-light h-full"
            >
              <ShoppingCartCheckout style={{ fontSize: "24px" }} />{" "}
              <p className="text-[12px] hidden md:flex">Basket</p>
              <p className="bg-red-500 text-[10px] flex items-center justify-center absolute top-[-4px] right-0 rounded-full text-white font-bold w-[18px] h-[18px]">
                11
              </p>
            </Link>
            <a
              href="#"
              className="flex items-center text-black font-bold md:border md:py-[12px] md:px-[16px] md:rounded-[12px]"
            >
              <p className="text-[14px] mr-[8px] hidden md:flex text-black">
                Login
              </p>
              <PermIdentity style={{ fontSize: "24px" }} /> {/* User Icon */}
            </a>
          </div>
        </div>
        <div className="px-[16px] w-full flex md:hidden items-center overflow-hidden mb-[12px]">
          <input
            data-cy="search_input"
            autoComplete="off"
            id="inputDesktop"
            name="search"
            type="text"
            className="h-12 w-full text-ellipsis rounded-l-lg border-1 border-r-0 border-purple-600 pr-4 text-black outline-none pl-3"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            data-cy="search_button"
            aria-label="Justify"
            className="border-1 border-purple-600 bg-purple-600 z-10 flex h-12 items-center justify-center rounded-r-lg px-4 font-medium text-white transition duration-300 hover:bg-purple-100 hover:text-purple"
          >
            <Search style={{ fontSize: "24px" }} /> {/* Search Icon */}
          </button>
        </div>
        <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto">
          <div className="w-full overflow-scroll flex gap-x-[40px] justify-start md:justify-center items-center">
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Discounts
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Electronics
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Furniture & Home Decor
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Toys
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Electronics
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Furniture & Home Decor
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Electronics
            </p>
            <p className="text-black text-[14px] font-medium whitespace-nowrap">
              Beauty & Personal Care
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
