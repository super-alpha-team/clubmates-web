import React from "react";
import Image from "next/image";

export interface ActivityProps {
  data: {
    img: string;
    logo: string;
    joined: boolean;
    destination: string;
    category: string;
    name: string;
    description: string;
    status: string;
    percent: string;
    participants: string;
    cost: string;
  };
}

function ActivityItem(props: ActivityProps) {
  const {
    img,
    logo,
    joined,
    destination,
    category,
    name,
    description,
    status,
    percent,
    participants,
    cost,
  } = props.data;
  return (
    <div className="w-72 h-96 relative flex justify-center cursor-pointer transition duration-500 ease-in-out transform hover:scale-120">
      <div className="w-72 absolute h-72 top-0 rounded-md">
        {/* TODO: Adjust img with different sizes */}
        <Image
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-md"
          layout="fill"
        />
      </div>
      <div className="w-64 h-10 absolute top-3 flex justify-between">
        <img src={logo} alt="" className="h-10" />
        {joined ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-success"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <></>
        )}
      </div>
      <div className="w-60 absolute flex flex-col items-center justify-evenly p-4 bottom-0 bg-white rounded-xl shadow-md text-xs">
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between">
            <div className="flex items-center text-cyan-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="pl-0.5">{destination}</p>
            </div>
            <div className="h-5 max-w-full flex justify-between bg-yellow rounded-tl-lg rounded-bl-lg rounded-br-lg">
              <div className="px-1.5 pt-0.5 text-white">{category}</div>
              <div className="w-1 h-1 mt-1 mx-1 bg-white rounded"></div>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 text-base text-cyan-dark font-bold line-clamp-1">
          {name}
        </div>
        <p className="w-full mt-2 text-gray-dark line-clamp-2">{description}</p>
        <div className="w-full mt-2">
          <div className="w-full flex justify-between text-cyan-light">
            <span>{status}</span>
            <span>{percent}</span>
          </div>
          <div className="h-1.5 bg-gray-light rounded-md mt-1">
            <div
              style={{ width: percent }}
              className="h-1.5 bg-cyan-light rounded"
            ></div>
          </div>
        </div>
        <div className="w-full mt-2 flex justify-between text-gray-dark">
          <span>Tình nguyện viên: {participants}</span>
          <span>{cost}</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
