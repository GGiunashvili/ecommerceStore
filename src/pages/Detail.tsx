import Carousel from "../components/Carousel";
import PriceContent from "../components/PriceContent";
import ProductDesctiption from "../components/ProductDescription";
import ProductAbout from "../components/ProductAbout";
import DetailCarousel from "../components/DetailCarousel";
export default function Detail() {
  return (
    <>
      <div className="w-full max-w-[1440px] grid grid-cols-12 gap-x-[20px] mx-auto px-[32px]">
        <div className="col-span-12 w-full flex justify-between items-end mb-[60px]">
          {/* სათაური */}
          <h2 className="text-lg font-semibold text-center">
            Apple MacBook Air M2 13.6'' 16 GB 256 GB Space Gray
          </h2>

          {/* სურვილების ღილაკი */}
          <div className="flex flex-col justify-center items-end mt-4">
            <button className="bg-gray-100 text-black px-4 py-2 rounded-lg mb-[24px]">
              X სურვილების სიაში დამატება
            </button>
            {/* ID */}
            <p className="text-black text-sm text-center mt-1">
              ID: 195949898822
            </p>
          </div>
        </div>

        <div className="col-span-9 bg-red-100 h-[500px]">
          <div className="flex gap-x-[20px]">
            <DetailCarousel />
            <ProductAbout />
          </div>
        </div>
        <div className="col-span-3 bg-green-100">
          <PriceContent />
        </div>

        <div className="col-span-9 w-full my-[60px]">
          <div className="w-full bg-red-100 h-[200px] mb-[60px]">
            <p className="mb-[36px] font-bold text-[32px]">
              მსგავსი პროდუქტები
            </p>
            <Carousel />
          </div>
          <div className="w-full bg-red-100 mb-[60px]">
            <ProductDesctiption />
          </div>
        </div>

        <div className="col-span-3 w-full my-[60px]">33</div>
      </div>
    </>
  );
}
