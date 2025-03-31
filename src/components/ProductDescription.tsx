export default function ProductDescription() {
  return (
    <>
      <div className="mb-[40px]">
        <p className="mb-[12px] text-[18px] font-bold">Apple MacBook Air M2</p>
        <p className="text-[14px] font-medium">
          Apple MacBook Air M2 აღჭურვილია სპეციალურად MacBook ისთვის შექმნილი,
          Apple ის უძლიერესი, 8 ბირთვიანი ენერგოეფექტური M2 პროცესორით. M2 ახალი
          თაობის პროცესორი მილიარდობით ტრანზისტორს იტევს და აერთიანებს ცენტრალურ
          და გრაფიკულ პროცესორებს, Neural Engine სისტემას, I/O კონტროლერებს და
          მრავალ სხვა მნიშვნელოვან კომპონენტს. Apple M2 ჩიპი საშუალებას გაძლევთ
          შეუფერხებლად გამოიყენოთ Mac ის უნიკალური ტექნოლოგიები, უზრუნველყოფს
          დაუჯერებელ პროდუქტიულობასა და უპრეცედენტო ენერგოეფექტიანობას.
        </p>
      </div>
      <div>
        <p className="mb-[36px] font-bold text-[32px]">
          დამატებითი მახასიათებლები
        </p>
        <div className="max-w-[600px]">
          <p className="mb-[24px] font-bold text-[18px]">ზოგადი ინფორმაცია</p>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              ბრენდი
            </p>
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              Apple
            </p>
          </div>
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              ბრენდი
            </p>
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              Apple
            </p>
          </div>{" "}
          <div className="flex mb-[16px] grid-cols-12 gap-x-[20px]">
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              ბრენდი
            </p>
            <p className="font-medium text-[14px] col-span-6 w-full bg-purple-200">
              Apple
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
