export default function Header() {
  return (
    <header className="w-full h-[100px] fixed top-0 bg-red-100 text-center m-auto z-9 border border-red-500 text-white p-4">
      <div className="w-full max-w-[1440px] px-[32px] mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-[60px] text-black font-bold">
          <span>X</span> {/* You can replace "3" with your brand or logo */}
        </div>
        <input className="bg-purple-300 border border-black" type="text" />

        {/* Navigation */}
        <div className="flex space-x-6">
          <a href="#" className="text-black font-medium hover:text-white">
            კალათა
          </a>
          <a href="#" className="text-black font-medium hover:text-white">
            შესვლა
          </a>
        </div>
      </div>
    </header>
  );
}
