import Carousel from "../components/Carousel";
import PriceContent from "../components/PriceContent";
import ProductDesctiption from "../components/ProductDescription";
import ProductAbout from "../components/ProductAbout";
import DetailCarousel from "../components/DetailCarousel";
import DetailHeader from "../components/DetailHeader";
export default function Detail() {
  return (
    <>
      <div className="w-full max-w-[1200px] grid grid-cols-12 gap-x-[20px] mx-auto px-[32px] mt-[100px]">
        <DetailHeader />
        <div className="col-span-12 md:col-span-9 md:h-[500px]">
          <div className="flex flex-col md:flex-row gap-x-[20px]">
            <DetailCarousel />
            <ProductAbout />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <PriceContent />
        </div>

        <div className="col-span-12 md:col-span-9 w-full my-[60px]">
          <div className="w-full mb-[60px]">
            <Carousel />
          </div>
          <div className="w-full mb-[60px]">
            <ProductDesctiption />
          </div>
        </div>

        <div className="hidden md:col-span-3 w-full my-[60px]">33</div>
      </div>
    </>
  );
}
