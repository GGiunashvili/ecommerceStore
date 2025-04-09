"use client";

import { useEffect, useState } from "react";

interface Product {
  category: {
    name: string;
  };
}

export default function CategoriesList() {
  const [categories, setCategories] = useState<string[]>([]);

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

  return (
    <div className="text-black">
      <ul className="flex gap-x-[60px] justify-center items-center">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
