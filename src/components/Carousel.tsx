"use client";

import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowForwardIos } from "@mui/icons-material";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  discountPrice: number;
  percent: number;
  images: {
    id: number;
    image_url: string;
  }[];
};
type CarouselProps = {
  category: string;
};
const Carousel = ({ category }: CarouselProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://dati.pythonanywhere.com/filter/?category=${category}`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-[36px]">
        <p className="font-bold text-[18px] md:text-[32px]">{category}</p>
        <button className="text-[14px] font-bold">See all</button>
      </div>
      <div className="w-full relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute bg-white rounded-full shadow-lg">
          <ArrowForwardIos className="text-black rotate-180" />
        </div>
        <div className="swiper-button-next absolute  bg-white rounded-full shadow-lg">
          <ArrowForwardIos className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
