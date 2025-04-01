export default function PriceContent() {
  return (
    <div className="sticky top-[100px] max-w-sm mx-auto bg-white shadow-[0px_0px_16px_rgba(203,203,203,0.25)] rounded-[16px] p-4">
      <div className="flex items-center justify-around">
        <p className="text-black text-[30px] font-bold">3899.00 ₾</p>
        <p className="text-gray-500 line-through text-[16px]">3699.00 ₾</p>

        <p className="bg-red-500 rounded-full text-white text-[12px] p-[4px]">
          -5%
        </p>
      </div>

      <p className="text-gray-700 text-sm text-center mt-2">
        თვეში: <span className="font-bold">148₾-დან</span> 0%
      </p>

      <p className="text-blue-600 text-sm text-center mt-2">
        უფასო მიწოდება <span className="font-bold">3 სთ-ში</span>
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">
          კალათაში დამატება
        </button>
        <button className="w-full bg-green-400 text-white py-2 rounded-lg">
          ყიდვა
        </button>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
          განვადება
        </button>
      </div>
    </div>
  );
}
