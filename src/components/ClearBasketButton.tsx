"use client";

const ClearBasketButton = () => {
  const handleClearBasket = () => {
    const token = localStorage.getItem("accessToken"); // აქ ნახე შენი ტოკენის სახელი

    if (!token) {
      alert("Token არ არის შენახული. გთხოვ გაიარეთ ავტორიზაცია.");
      return;
    }

    fetch("https://dati.pythonanywhere.com/basket/4/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ products: [] }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("შეცდომა ავტორიზაციაში");
        return res.json();
      })
      .then((data) => {
        console.log("მხოლოდ products წაშლილია:", data);
        alert("კალათა გასუფთავდა ✅");
      })
      .catch((err) => {
        console.error(err);
        alert("შეცდომა მოხდა ❌");
      });
  };

  return (
    <button
      onClick={handleClearBasket}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      კალათის გასუფთავება
    </button>
  );
};

export default ClearBasketButton;
