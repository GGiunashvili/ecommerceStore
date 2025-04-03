import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Use faChevronDown

const CategoryFilterDrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Handler to close dropdown if clicked outside
  const closeDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLElement; // Explicitly cast to HTMLElement
    if (!target.closest(".dropper") && !target.closest(".drop")) {
      setIsOpen(false);
    }
  };

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  useEffect(() => {
    // Adding the event listener for outside click
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative mt-4 min-w-[115px] justify-end ">
      <div>
        <h3
          className="dropper mb-0 ml-10 flex cursor-pointer items-center justify-end active"
          onClick={toggleDropdown}
        >
          <span className="font-medium text-3 text-black">
            {selectedOption || "Sort by Date"}
          </span>
          <div>
            <FontAwesomeIcon
              icon={faChevronDown} // Corrected icon name
              className={`h-12 w-12 transform text-7 transition duration-150 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </h3>
        {isOpen && (
          <ul className="drop list-unstyled absolute right-0 z-8 mt-4 w-fit rounded-[12px] border border-dark-100 bg-white p-[12px] shadow-left active">
            <li
              className={`cursor-pointer pt-[8px] px-[12px] font-medium text-[16px] ${
                selectedOption === "Sort by Date"
                  ? "text-purple-500"
                  : "text-dark-700"
              }`}
              onClick={() => handleOptionSelect("Sort by Date")}
            >
              Sort by Date
            </li>
            <li
              className={`cursor-pointer pt-[8px] px-[12px] font-medium text-[16px] ${
                selectedOption === "Price Descending"
                  ? "text-purple-500"
                  : "text-dark-700"
              }`}
              onClick={() => handleOptionSelect("Price Descending")}
            >
              Price Descending
            </li>
            <li
              className={`cursor-pointer pt-[8px] px-[12px] font-medium text-[16px] ${
                selectedOption === "Price Ascending"
                  ? "text-purple-500"
                  : "text-dark-700"
              }`}
              onClick={() => handleOptionSelect("Price Ascending")}
            >
              Price Ascending
            </li>
            <li
              className={`cursor-pointer pt-[8px] px-[12px] font-medium text-[16px] ${
                selectedOption === "Discount"
                  ? "text-purple-500"
                  : "text-dark-700"
              }`}
              onClick={() => handleOptionSelect("Discount")}
            >
              Discount
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategoryFilterDrop;
