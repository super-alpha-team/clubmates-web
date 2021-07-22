import React, { useEffect, useState } from "react";
import Link from "next/link";

import clubApi from "api/clubApi";

function Top10Club() {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    clubApi.getTop10().then((res) => {
      console.log(res.data.data.result);
      setClubs(res.data.data.result);
    });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            Những Câu lạc bộ nổi bật hiện nay
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Những câu lạc bộ hoạt động sôi nổi, phát triển mạnh mẽ
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {clubs.map((e, i) => {
            const urlToClub = `/club/${e._id}`;
            const urlSearchCategory = `/search?category=${e.category}`;
            return (
              <div key={i} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Link href={urlToClub}>
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 cursor-pointer"
                      src={e.photo}
                    />
                  </Link>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {e.name}
                    </h2>
                    <Link href={urlSearchCategory}>
                      <h3 className="text-gray-500 mb-3 cursor-pointer">
                        {e.category}
                      </h3>
                    </Link>
                    <p className="mb-4">{e.description}</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Top10Club;
