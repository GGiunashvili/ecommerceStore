export default function Footer() {
  return (
    <footer className="w-full mx-auto  bg-black text-white p-6">
      <div className="w-full max-w-[1440px] px-[32px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              მიწოდება
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  ბლოგი
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  ჩამოტვირთე აპლიკაცია
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  მიმდინარე შეთავაზებები
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Terms & Privacy Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              წესები & პირობები
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  წესები & პირობები
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  კონფიდენციალურობა
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  დაბრუნება
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  განვადება
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  გარანტია
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              რატომ x?
            </h3>
            <ul>
              <li>
                <span className="text-gray-400">უფასო მიწოდება ყველგან</span>
              </li>
              <li>
                <span className="text-gray-400">თბილისში მიტანა 3 საათში</span>
              </li>
              <li>
                <span className="text-gray-400">მიტანის დროის არჩევანი</span>
              </li>
              <li>
                <span className="text-gray-400">უფასო სასაჩუქრე შეფუთვა</span>
              </li>
              <li>
                <span className="text-gray-400">0% ეფექტური განვადება</span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              კონტაქტი
            </h3>
            <ul>
              <li>
                <span className="text-gray-400">032 2 56 05 05</span>
              </li>
              <li>
                <a
                  href="mailto:support@x.store"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  support@x.store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
