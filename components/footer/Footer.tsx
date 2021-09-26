import React from "react";
import Image from "next/image";
import Logo from "../../public/icons/Clubmates.svg";

function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col lg:flex-row bg-blue-100 bg-opacity-60 w-full pl-12 pr-12 pb-16 pt-12 rounded-footer">
        <div className="flex-1 sm:text-center sm:mb-8">
          <Image
            src={Logo}
            alt="logo Clubmates"
            className="cursor-pointer"
            width={120}
            height={50}
            quality={100}
          />
          <p>
            Nền tảng quản lý câu lạc bộ và quản lý những hoạt động của câu lạc
            bộ
          </p>
        </div>

        {/* lg devide 3 section */}
        <div className="flex flex-col lg:flex-1 sm:flex-row">
          <div className="flex-1 flex flex-col items-start sm:items-center mt-8 sm:mt-0">
            <ul>
              <li className="lg:mb-4 mb-2">
                <a className="hover:underline cursor-pointer font-bold">
                  Câu lạc bộ
                </a>
              </li>
              <li className="hover:underline cursor-pointer">Tình nguyện</li>
              <li className="hover:underline cursor-pointer">Học thuật</li>
              <li className="hover:underline cursor-pointer">Văn nghệ</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-start sm:items-center mt-8 sm:mt-0">
            <ul>
              <li className="lg:mb-4 mb-2">
                <a className="hover:underline cursor-pointer font-bold">
                  Support
                </a>
              </li>
              <li className="hover:underline cursor-pointer">Legal</li>
              <li className="hover:underline cursor-pointer">Liên hệ</li>
              <li className="hover:underline cursor-pointer">Chính sách</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-start sm:items-center mt-8 sm:mt-0">
            <ul>
              <li className="lg:mb-4 mb-2">
                <a className="hover:underline cursor-pointer font-bold">Khác</a>
              </li>
              <li className="hover:underline cursor-pointer">FAQs</li>
              <li className="hover:underline cursor-pointer">Về Clubmates</li>
              <li className="hover:underline cursor-pointer">Về chúng tôi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-orange-footer h-14 flex items-center justify-center">
        <p className="text-center text-white text-sm">@ 2021 · Clubmates</p>
      </div>
    </footer>
  );
}

export default Footer;
