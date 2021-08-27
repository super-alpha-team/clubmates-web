import React from "react";
import Image from "next/image";
import Logo from "../../public/icons/Clubmates.svg";

function Header() {
  if (typeof document !== "undefined") {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-card">
      <nav className="">
        <div className="container flex items-center justify-between md:pl-12 pl-4 md:pr-12 pr-4 pt-4 pb-4 max-w-full md:max-w-screen-2xl">
          <div className="flex items-center cursor-pointer">
            <Image
              src={Logo}
              alt="logo Clubmates"
              // layout="fill"
              width={120}
              height={50}
              quality={100}
            />
            {/* <img src="../public/icons/logo.png" alt="logo clubmates" /> */}
          </div>
          <ul className="hidden md:flex gap-8">
            <li className="text-lg font-bold text-orange cursor-pointer">
              <a href="#">Hoạt động</a>
            </li>
            <li className="text-lg font-medium cursor-pointer">
              <a href="#">Câu lạc bộ</a>
            </li>
            <li className="text-lg font-medium cursor-pointer">
              <a href="#">Blog</a>
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="text-sm w-12 h-12 flex justify-center items-center rounded-full shadow-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="text-lg pl-4 pr-4 pt-2 pb-2 rounded-full bg-orange text-white shadow-button">
              Đăng nhập
            </button>
          </div>

          <div className="flex md:hidden">
            <button className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <div className="mobile-menu hidden md:hidden mb-2">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-center hover:bg-gray-200"
            >
              Hoạt động
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-center hover:bg-gray-200"
            >
              Câu lạc bộ
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-center hover:bg-gray-200"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
