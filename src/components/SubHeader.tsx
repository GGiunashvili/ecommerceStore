import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { AppDispatch } from "../store/store"; // Import AppDispatch to properly type dispatch

interface Product {
  category: {
    name: string;
  };
}

export default function SubHeader() {
  const [categories, setCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // Explicitly type dispatch here

  useEffect(() => {
    fetch("https://dati.pythonanywhere.com/category/")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category.name))
        );
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const handleCategoryClick = (category: string) => {
    const encodedCategory = encodeURIComponent(category);
    navigate(`/category/${encodedCategory}`); // Navigate to category page

    // Dispatch fetchProducts action with the selected category
    dispatch(fetchProducts(category)); // Trigger product fetching
  };

  return (
    <div className="text-black">
      <ul className="flex gap-x-[60px] justify-start md:justify-center items-center overflow-scroll mx-[16px]">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)} // Handle category click
            className="cursor-pointer hover:underline whitespace-nowrap"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
