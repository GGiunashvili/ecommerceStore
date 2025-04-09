import Carousel from "../components/Carousel";
import HiroBannerSlider from "../components/HiroBannerSlider";
import MultiBanner from "../components/MultiBanner";
import { Link } from "react-router-dom";
import DoubleBanner from "../components/DoubleBanner";
import Authorization from "../components/Authorization";

export default function Home() {
  return (
    <>
      {/* mt-[100px]  */}
      <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto flex gap-y-[80px] flex-col items-center justify-center min-h-[calc(100vh-308px)] mb-[80px] mt-[180px]">
        <Authorization />
        <div className="flex flex-col gap-x-[100px] fixed left-0 top-[300px]">
          <Link to="/detail" className="text-blue-500 underline">
            Go to Detail Page
          </Link>
          <Link to="/Category" className="text-blue-500 underline">
            Go to category Page
          </Link>
        </div>
        <HiroBannerSlider />
        <MultiBanner />
        <Carousel />
        <DoubleBanner />
        <Carousel />
        <div>
          <p className="font-bold text-[20px]">
            X - Your Ultimate Online Shopping Destination
          </p>
          <p className="font-medium text-[14px]">
            Since 2021, X has been providing a fast, easy, and reliable online
            shopping experience. With over 50,000 products across a wide range
            of categories, X is your one-stop shop for all your needs. Whether
            you're looking for kitchen appliances, audio equipment, home and
            garden essentials, or more, we offer top-quality products with
            competitive prices. Popular Categories Include: Kitchen Appliances
            Audio Equipment Home & Garden Bar Supplies & More X App: Shop
            conveniently with our mobile app, available on both iOS and Android.
            Get access to exclusive deals and enjoy a seamless shopping
            experience right at your fingertips. X Blog: Stay informed with our
            blog, offering expert recommendations, tips, and updates on the
            latest trends and products. It’s the perfect place for inspiration,
            whether you're updating your home or looking for new tech gadgets. X
            for Business: For businesses, X simplifies the purchasing process.
            Register your company and get access to exclusive deals on office
            supplies, cleaning products, and more. Enjoy fast delivery and
            convenient payment options. Terms & Conditions: Free Delivery across
            Georgia Official Warranty on all products Flexible payment options:
            pay in full or in installments
          </p>
        </div>
      </div>
    </>
  );
}
