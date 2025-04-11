type Product = {
  images: { image_url: string }[];
};

type Props = {
  product: Product;
};

export default function ProductDescription({ product }: Props) {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row gap-[20px]">
        {/* Image Thumbnails */}
        <div className="md:w-[180px] h-[100px] md:h-full md:max-h-[270px] overflow-scroll flex flex-row md:flex-col gap-[20px]">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image.image_url}
              alt={`Product Image ${index + 1}`}
              className="w-auto md:w-full"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="m-auto">
          <img
            src={product.images[0]?.image_url} // Display the first image as main
            alt="Main Product Image"
            className="w-auto md:w-full"
          />
        </div>
      </div>
    </>
  );
}
