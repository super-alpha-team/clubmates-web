/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../public/icons/Clubmates.svg";

import { selectUser, selectStatus } from "redux/userSlice";
import { useAppSelector } from "redux/hooks";

function Header() {
  if (typeof document !== "undefined") {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn?.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    //document.addEventListener("mousedown", )
  }

  const [search, setSearch] = useState("");
  const router = useRouter();

  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectStatus);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
      router.push(`/search?q=${search}`);
    }
  };

  const handleSearch = () => {
    console.log(search);
  };

  const Avatar = () => {
    const [expandedAvatar, setExpandedAvatar] = useState(false);
    const onBlur = (e) => {
      setExpandedAvatar(!expandedAvatar);
      console.log("blur", expandedAvatar);
    };

    return (
      <div className="flex flex-col items-end" tabIndex={0} onBlur={onBlur}>
        <div className="flex items-center gap-2">
          <button
            className="w-11 h-11"
            onClick={() => setExpandedAvatar(!expandedAvatar)}
          >
            <img src={user?.photo} className="rounded-full" />
          </button>
          <p className="text-lg">{user?.name}</p>
        </div>
        {expandedAvatar ? (
          <div className="absolute z-50 w-36 bg-white p-2 rounded-lg mt-12 border">
            <ul className="text-black">
              <li className="mt-0 px-1 py-1 rounded hover:bg-gray-100 cursor-pointer font-semibold">
                <Link href="/me">Trang cá nhân</Link>
              </li>
              <li className="mt-0 px-1 py-1 rounded hover:bg-gray-100 cursor-pointer font-semibold">
                Đăng xuất
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      <nav className="">
        <div className="container flex items-center justify-between md:pl-12 pl-4 md:pr-12 pr-4 pt-4 pb-4 max-w-full md:max-w-screen-2xl">
          <div
            className="flex items-center cursor-pointer w-4/12"
            onClick={() => router.push("/")}
          >
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
          <ul className="hidden md:flex gap-8 w-4/12 justify-center">
            <li
              className="text-lg font-semibold cursor-pointer"
              style={
                router.pathname === "/activity"
                  ? { color: "#f4a261" }
                  : { color: "#b6b6b6" }
              }
            >
              <Link href="/activity">
                <a href="#">Hoạt động</a>
              </Link>
            </li>
            <li
              className="text-lg  font-semibold cursor-pointer"
              style={
                router.pathname === "/club"
                  ? { color: "#f4a261" }
                  : { color: "#b6b6b6" }
              }
            >
              <Link href="/club">
                <a href="#">Câu lạc bộ</a>
              </Link>
            </li>
            <li
              className="text-lg font-semibold cursor-pointer"
              style={
                router.pathname === "/blog"
                  ? { color: "#f4a261" }
                  : { color: "#b6b6b6" }
              }
            >
              <Link href="/blog">
                <a href="#">Blog</a>
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4 w-4/12 justify-end">
            <div className="flex items-center h-11 border-2 border-white rounded-full shadow-md focus-within:border-orange transition-all ease-in-out duration-500 relative overflow-hidden">
              <input
                className="outline-none pl-4 h-11 bg-transparent focus:relative focus:cursor-auto focus:mr-2 absolute cursor-pointer opacity-0 focus:opacity-100 z-10 focus:z-0"
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
              ></input>
              <button
                className="text-sm w-10 h-10 flex justify-center items-center rounded-full text-orange"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 "
                  fill="none"
                  viewBox="0 0 22 22"
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
            </div>

            {status === "loggedIn" ? (
              <Avatar />
            ) : (
              <button
                className="text-lg pl-4 h-11 pr-4 pt-2 pb-2 rounded-full bg-orange text-white shadow-button hover:bg-orange-dark transition duration-200"
                onClick={() => router.push("/login")}
              >
                Đăng nhập
              </button>
            )}
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
