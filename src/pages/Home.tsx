import Carousel from "../components/Carousel";
import HiroBannerSlider from "../components/HiroBannerSlider";
import MultiBanner from "../components/MultiBanner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* mt-[100px]  */}
      <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto flex gap-y-[120px] flex-col items-center justify-center min-h-[calc(100vh-308px)] mb-[200px] mt-[200px]">
        <HiroBannerSlider />
        <div className="flex gap-x-[100px]">
          <Link to="/detail" className="text-blue-500 underline">
            Go to Detail Page
          </Link>
          <Link to="/Category" className="text-blue-500 underline">
            Go to category Page
          </Link>
        </div>
        <MultiBanner />
        <Carousel />
      </div>
    </>
  );
}
