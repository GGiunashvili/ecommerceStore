import { useState } from "react";

type Product = {
  images: { image_url: string }[];
};

type Props = {
  product: Product;
};

export default function ProductDescription({ product }: Props) {
  // State to store the selected image
  const [mainImage, setMainImage] = useState(product.images[0]?.image_url);

  // Handle click on image to change main image
  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row gap-[20px]">
        {/* Image Thumbnails */}
        <div className="md:w-[80px] md:min-w-[80px] h-[100px] md:h-full md:max-h-[270px] overflow-scroll flex justify-center flex-row md:flex-col gap-[20px]">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.image_url}
              alt={`Product Image ${index + 1}`}
              className="w-auto md:w-full cursor-pointer h-[80px] object-contain"
              onClick={() => handleImageClick(image.image_url)} // Change the main image on click
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="m-auto h-[300px]">
          <img
            src={mainImage} // Display the selected image as main
            alt="Main Product Image"
            className="w-auto md:w-full h-[-webkit-fill-available] object-contain"
          />
        </div>
      </div>
    </>
  );
}
