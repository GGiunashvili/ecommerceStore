import { FavoriteBorder } from "@mui/icons-material";
export default function DetailHeader() {
  return (
    <div className="col-span-12 w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-[24px] md:mb-[60px]">
      {/* სათაური */}
      <h2 className="text-[16px] md:text-[24px] mb-[12px] md:mb-0 font-semibold text-center">
        Apple MacBook Air M2 13.6'' 16 GB 256 GB Space Gray
      </h2>

      {/* სურვილების ღილაკი */}

      <button className="bg-gray-100 text-black px-4 py-2 rounded-full">
        <FavoriteBorder style={{ fontSize: "24px" }} />{" "}
        <span className="ml-[6px]">Add to Wishlist</span>
      </button>
    </div>
  );
}
