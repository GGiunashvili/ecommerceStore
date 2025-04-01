export default function DetailHeader() {
  return (
    <div className="col-span-12 w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px]">
      {/* სათაური */}
      <h2 className="text-lg font-semibold text-center">
        Apple MacBook Air M2 13.6'' 16 GB 256 GB Space Gray
      </h2>

      {/* სურვილების ღილაკი */}
      <div className="flex flex-col justify-center items-start md:items-end mt-4">
        <button className="bg-gray-100 text-black px-4 py-2 rounded-full mb-[24px]">
          X სურვილების სიაში დამატება
        </button>
        {/* ID */}
        <p className="text-black text-sm text-center mt-1">ID: 195949898822</p>
      </div>
    </div>
  );
}
