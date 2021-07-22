import React from "react";
import Link from "next/link";
import { useAppSelector } from "redux/hooks";
import { selectStatus, selectUser } from "redux/userSlice";

function Navbar() {
  const status = useAppSelector(selectStatus);
  const user = useAppSelector(selectUser);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Clubmates</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Thông tin</a>
          <a className="mr-5 hover:text-gray-900">Nổi bật</a>
          <a className="mr-5 hover:text-gray-900">Câu lạc bộ</a>
          <a className="mr-5 hover:text-gray-900">Hoạt động</a>
        </nav>
        <div className="box">
          <div className="box-wrapper mr-2">
            <div className="bg-white rounded flex items-center w-full p-2 shadow-sm border border-gray-200">
              <button className="outline-none focus:outline-none">
                <svg
                  className=" w-5 text-gray-600 h-5 cursor-pointer"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <input
                type="search"
                placeholder="tiềm kiếm"
                x-model="q"
                className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              />
              <div className="select">
                <select
                  x-model="image_type"
                  className="text-sm outline-none focus:outline-none bg-transparent"
                >
                  <option value="club" selected>
                    Club
                  </option>
                  <option value="activity">Activity</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {status === "logined" ? (
          <>
            <Link href="/user">
              <div className="inline-flex items-center mr-3 rounded-full bg-gray-100 pr-5 h-9 cursor-pointer border-0 focus:outline-none hover:bg-gray-200 mt-1">
                <img
                  className="rounded-full float-left h-full"
                  src={user.photo}
                />
                <span className="ml-3">{user.name}</span>
              </div>
            </Link>
            <Link href="/club">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-1">
                Câu lạc bộ của bạn
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-1">
              Đăng nhập | Đăng ký
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
