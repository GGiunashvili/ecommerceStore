export default function Footer() {
  return (
    <footer className="w-full mx-auto bg-black text-white p-6 mb-[52px] md:mb-0">
      <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              Delivery
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Current Offers
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
              Terms & Conditions
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Installments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              Why X?
            </h3>
            <ul className="text-[12px]">
              <li>
                <span className="text-gray-400">Free delivery everywhere</span>
              </li>
              <li>
                <span className="text-gray-400">
                  Delivery in Tbilisi within 3 hours
                </span>
              </li>
              <li>
                <span className="text-gray-400">Choose delivery time</span>
              </li>
              <li>
                <span className="text-gray-400">Free gift wrapping</span>
              </li>
              <li>
                <span className="text-gray-400">
                  0% interest installment plan
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-[12px] md:text-[16px] mb-4">
              Contact
            </h3>
            <ul className="text-[12px]">
              <li>
                <span className="text-gray-400">032 2 56 05 05</span>
              </li>
              <li>
                <a
                  href="mailto:support@x.store"
                  className="text-gray-400 hover:text-white font-medium text-[10px] md:text-[14px]"
                >
                  Email: support@x.store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
