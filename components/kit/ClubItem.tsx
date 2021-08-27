import React from "react";
import Image from "next/image";

export interface ClubItemProps {
  data: {
    img: string;
    logo: string;
    joined: boolean;
    destination: string;
    category: string;
    name: string;
    description: string;
    cost: string;
  };
}

function ClubItem(props: ClubItemProps) {
  const { img, logo, joined, destination, category, name, description, cost } =
    props.data;
  return (
    <div className="group w-72 h-80 relative flex justify-center cursor-pointer">
      <div className="w-72 absolute h-64 top-0 rounded-md">
        {/* TODO: Adjust img with different sizes */}
        <Image
          src={img}
          alt=""
          className="object-cover w-full h-full rounded-md"
          layout="fill"
        />
      </div>
      <div className="w-64 absolute flex flex-col items-center justify-evenly p-4 bottom-0 shadow-md border bg-white rounded-xl text-xs">
        <div className="w-full flex justify-center">
          <div className="w-60 flex justify-between">
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
      </div>
    </div>
  );
}

export default ClubItem;
