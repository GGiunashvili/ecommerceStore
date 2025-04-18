import { useEffect, useState } from "react";

const BasketCounter = () => {
  const [itemCount, setItemCount] = useState<number>(0);

  const getItemCount = () => {
    const storedData = localStorage.getItem("selectedProductIds");
    if (storedData) {
      const selectedProductIds = JSON.parse(storedData);
      return selectedProductIds.length;
    }
    return 0;
  };

  useEffect(() => {
    // Set initial item count on mount
    setItemCount(getItemCount());

    // Listen for changes to localStorage directly
    const interval = setInterval(() => {
      const updatedItemCount = getItemCount();
      setItemCount(updatedItemCount);
    }, 1000); // Check every second (adjust as needed)

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return <p>{itemCount}</p>;
};

export default BasketCounter;
