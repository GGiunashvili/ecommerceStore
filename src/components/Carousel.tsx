import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowForwardIos } from "@mui/icons-material";

import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-[36px]">
          <p className="font-bold text-[32px]">Similar Products</p>
          <p className="text-[14px] font-bold">see all</p>
        </div>
        <div className="w-full relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              // When the viewport width is >= 0px (mobile)
              0: {
                slidesPerView: 2.5,
              },
              // When the viewport width is >= 768px (tablet and above)
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev absolute bg-white rounded-full shadow-lg">
            <ArrowForwardIos className="text-black rotate-180" />
          </div>
          <div className="swiper-button-next absolute  bg-white rounded-full shadow-lg">
            <ArrowForwardIos className="text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
