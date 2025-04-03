export default function ProductDescription() {
  return (
    <>
      <div className="mb-[40px]">
        <p className="mb-[12px] text-[18px] font-bold">Apple MacBook Air M2</p>
        <p className="text-[14px] font-medium">
          The Apple MacBook Air M2 is equipped with Apple's most powerful,
          energy-efficient 8-core M2 processor, designed specifically for the
          MacBook. The M2 is a next-generation processor that houses billions of
          transistors and integrates the central and graphics processors, Neural
          Engine system, I/O controllers, and many other important components.
          The Apple M2 chip allows you to seamlessly use Mac's unique
          technologies, delivering incredible productivity and unprecedented
          energy efficiency.
        </p>
      </div>
      <div>
        <p className="mb-[36px] font-bold text-[18px] md:text-[32px]">
          Additional Features
        </p>
        <div className="max-w-[600px]">
          <p className="mb-[24px] font-bold text-[18px]">General Information</p>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Brand</p>
            <p className="font-medium text-[14px] col-span-6 w-full">Apple</p>
          </div>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Brand</p>
            <p className="font-medium text-[14px] col-span-6 w-full">Apple</p>
          </div>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full">Brand</p>
            <p className="font-medium text-[14px] col-span-6 w-full">Apple</p>
          </div>
        </div>
      </div>
    </>
  );
}
