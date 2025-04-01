import Carousel from "../components/Carousel";
import HiroBannerSlider from "../components/HiroBannerSlider";
import MultiBanner from "../components/MultiBanner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* mt-[100px]  */}
      <div className="w-full max-w-[1440px] px-[32px] mx-auto flex gap-y-[120px] flex-col items-center justify-center min-h-[calc(100vh-308px)] mb-[200px] mt-[200px]">
        <Link to="/detail" className="text-blue-500 underline">
          Go to Detail Page
        </Link>{" "}
        <HiroBannerSlider />
        <MultiBanner />
        <Carousel />
      </div>
    </>
  );
}
