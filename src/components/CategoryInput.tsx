import { useState } from "react";

const CategoryInput = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filterOptions = [
    { label: "Discount", value: "discount" },
    { label: "Gift", value: "gift" },
    { label: "Offers", value: "offer" },
  ];

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h1>Add Filters</h1>
      <ul className="drop list-unstyled z-8 mt-4 w-fit rounded-[12px] border border-dark-100 bg-white p-[12px] shadow-left active">
        {filterOptions.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer pt-[8px] px-[12px] font-medium text-[16px] flex items-center ${
              selectedOption === option.value
                ? "text-purple-500"
                : "text-dark-700"
            }`}
            onClick={() => handleSelectOption(option.value)}
          >
            <input
              type="checkbox"
              id={option.value}
              className="mr-2"
              checked={selectedOption === option.value}
              onChange={() => handleSelectOption(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </li>
        ))}
      </ul>
      <p>
        {selectedOption
          ? `Selected: ${
              filterOptions.find((opt) => opt.value === selectedOption)?.label
            }`
          : "No option selected"}
      </p>
    </div>
  );
};

export default CategoryInput;
