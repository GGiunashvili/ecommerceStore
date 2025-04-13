"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { AppDispatch } from "../store/store";

interface Category {
  id: number;
  name: string;
}

export default function SubHeader() {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetch("https://dati.pythonanywhere.com/category/")
      .then((res) => res.json())
      .then((data: Category[]) => {
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.name))
        );
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleCategoryClick = (category: string) => {
    const encodedCategory = encodeURIComponent(category);
    navigate(`/category/${encodedCategory}`);
    dispatch(fetchProducts(category));
  };

  return (
    <div className="text-black">
      <ul className="flex gap-x-[60px] justify-start md:justify-center items-center overflow-scroll mx-[16px]">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="cursor-pointer hover:underline whitespace-nowrap"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
