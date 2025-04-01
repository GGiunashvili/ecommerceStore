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
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
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
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 1" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 2" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            {/* <img src="https://via.placeholder.com/600x300" alt="Slide 3" /> */}
            <div className="relative">
              <img
                src="https://picsum.photos/600/300" // შეცვალე რეალური სურათის ლინკით
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HiroBannerSlider;
