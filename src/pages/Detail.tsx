import Carousel from "../components/Carousel";
import PriceContent from "../components/PriceContent";
import ProductDesctiption from "../components/ProductDescription";
import ProductAbout from "../components/ProductAbout";
import DetailCarousel from "../components/DetailCarousel";
import DetailHeader from "../components/DetailHeader";
export default function Detail() {
  return (
    <>
      <div className="w-full max-w-[1440px] grid grid-cols-12 gap-x-[20px] mx-auto px-[32px]">
        <DetailHeader />
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
