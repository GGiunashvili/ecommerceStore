import { FC } from "react";

interface AddToBasketButtonProps {
  productId: string | number; // Accept both types
}

const AddToBasketButton: FC<AddToBasketButtonProps> = ({ productId }) => {
  const handleAddToBasket = () => {
    // Get stored product IDs from localStorage
    const existing = localStorage.getItem("selectedProductIds");

    // Parse the stored string into an array
    let ids: string[] = existing ? JSON.parse(existing) : [];

    // Ensure the productId is a string in localStorage
    const productIdString = productId.toString();

    // If the ID is not already in the list, add it
    if (!ids.includes(productIdString)) {
      ids.push(productIdString);
      localStorage.setItem("selectedProductIds", JSON.stringify(ids));
      console.log("Added ID:", productId);
    } else {
      console.log("ID already exists:", productId);
    }
  };

  return (
    <button
      onClick={handleAddToBasket}
      className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
    >
      Add to Basket
    </button>
  );
};

// Export the component
export default AddToBasketButton;
