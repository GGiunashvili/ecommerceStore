import Carousel from "../components/Carousel";
import HiroBannerSlider from "../components/HiroBannerSlider";
export default function Home() {
  return (
    <>
      <div className="w-full max-w-[1440px] px-[32px] mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-308px)] mt-[100px]">
        <HiroBannerSlider />
        <Carousel />
      </div>
    </>
  );
}
