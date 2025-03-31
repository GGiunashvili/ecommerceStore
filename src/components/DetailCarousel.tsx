export default function DetailCarousel() {
  return (
    <div className="w-full flex gap-[20px]">
      <div className="w-[180px] max-h-[320px] overflow-scroll flex flex-col gap-y-[20px]">
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />{" "}
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />
      </div>

      <div className="m-auto">
        <img
          src="https://picsum.photos/600/300"
          alt="Random Test Image"
          className="w-full"
        />
      </div>
    </div>
  );
}
