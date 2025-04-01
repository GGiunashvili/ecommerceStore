import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
const HiroBannerSlider = () => {
  return (
    <>
      <div className="w-full ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md max-h-[200px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HiroBannerSlider;
