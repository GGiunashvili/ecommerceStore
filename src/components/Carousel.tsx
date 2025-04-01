import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center mb-[36px]">
          <p className="font-bold text-[32px]">მსგავსი პროდუქტები</p>
          <p className="text-[14px] font-bold">ყველას ნახვა</p>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation
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
              slidesPerView: 5,
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
      </div>
    </>
  );
};

export default Carousel;
