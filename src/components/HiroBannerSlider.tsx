import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowForwardIos } from "@mui/icons-material";
const HiroBannerSlider = () => {
  return (
    <>
      <div className="w-full relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          {/* სხვა სლაიდები */}
        </Swiper>
        {/* MUI custom navigation buttons */}
        <div className="swiper-button-prev absolute bg-white rounded-full shadow-lg">
          <ArrowForwardIos className="text-black rotate-180" />
        </div>
        <div className="swiper-button-next absolute bg-white rounded-full shadow-lg">
          <ArrowForwardIos className="text-black" />
        </div>
      </div>
    </>
  );
};

export default HiroBannerSlider;
