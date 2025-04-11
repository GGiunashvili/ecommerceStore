import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
                src="https://static.vecteezy.com/system/resources/previews/003/240/364/non_2x/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/006/605/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                alt="Make It Real სამაჯურების ასაწყობი ნაკრები"
                className="w-full rounded-md "
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
