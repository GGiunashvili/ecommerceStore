import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full fixed top-0 text-center m-auto z-9 bg-white text-white p-4 shadow-[0px_2px_6px_rgba(0,0,0,0.08)] ">
      <div className="w-full max-w-[1440px] px-[32px] mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-500 underline">
          <div className="text-[24px] text-black font-bold">
            <span>X</span> {/* You can replace "3" with your brand or logo */}
          </div>
        </Link>
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

      <div className="flex gap-x-[40px] justify-center items-center">
        <p className="text-black text-[14px] font-medium">ტექნიკა</p>
        <p className="text-black text-[14px] font-medium">სათამაშოები</p>
        <p className="text-black text-[14px] font-medium">ტექნიკა</p>
        <p className="text-black text-[14px] font-medium">სათამაშოები</p>
        <p className="text-black text-[14px] font-medium">ტექნიკა</p>
        <p className="text-black text-[14px] font-medium">სათამაშოები</p>
        <p className="text-black text-[14px] font-medium">სათამაშოები</p>
        <p className="text-black text-[14px] font-medium">სახლი დეკორი ავეჯი</p>
        <p className="text-black text-[14px] font-medium">
          სილამაზე და თავის მოვლა
        </p>
      </div>
    </header>
  );
}
