import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
const Carousel = () => {
  return (
    <>
      <p className="mb-[36px] font-bold text-[32px]">მსგავსი პროდუქტები</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          {/* <img src="https://via.placeholder.com/600x300" alt="Slide 1" /> */}
          <p>h1</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://via.placeholder.com/600x300" alt="Slide 2" /> */}
          <p>h1</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
          <p>h1</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
