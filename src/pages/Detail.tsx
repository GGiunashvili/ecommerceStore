import Carousel from "../components/Carousel";
import PriceContent from "../components/PriceContent";
import ProductDesctiption from "../components/ProductDescription";
import ProductAbout from "../components/ProductAbout";
import DetailCarousel from "../components/DetailCarousel";
import DetailHeader from "../components/DetailHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  images: { image_url: string }[];
  percent: number;
  small_description: string;
  description: string;

  characteristic: {
    brend: string;
    model: number;
    power: string;
  };
};

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null); // აი აქ გვაქვს null-ის ვარიანტი

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dati.pythonanywhere.com/products/${id}`)
        .then((res) => {
          setProduct(res.data); // პროდუქტის მონაცემები
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-356px)] mt-[208px] md:mt-[148px] flex justify-center items-center text-3xl">
        Loading...
      </div>
    ); // თუ პროდუქტი ჯერ არ ჩამოიტანა
  }

  return (
    <>
      <div className="w-full max-w-[1200px] grid grid-cols-12 sm:gap-x-[20px] lg:gap-x-[90px] mx-auto px-[16px] md:px-[32px] pt-[20px] mb-[50px] md:mb-[100px]">
        <DetailHeader product={product} />
        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-col md:flex-row gap-x-[20px]">
            <DetailCarousel product={product} />
            <ProductAbout product={product} />{" "}
            {/* აქ უკვე გავდემთ product-ას */}
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <PriceContent product={product} />
        </div>

        <div className="col-span-12 md:col-span-8 w-full mt-[60px]">
          <div className="w-full mb-[60px]">
            <ProductDesctiption product={product} />
            {/* <h1 className="text-3xl font-bold p-4">{product}</h1> */}
          </div>
          <div className="w-full">
            <Carousel />
          </div>
        </div>

        <div className="hidden md:col-span-4 w-full my-[60px]">33</div>
      </div>
    </>
  );
}
