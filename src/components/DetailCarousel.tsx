export default function DetailCarousel() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-[20px]">
      <div className="md:w-[180px] h-[100px] md:h-full md:max-h-[270px] overflow-scroll flex flex-row md:flex-col gap-[20px]">
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />
      </div>

      <div className="m-auto">
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-auto md:w-full"
        />
      </div>
    </div>
  );
}
