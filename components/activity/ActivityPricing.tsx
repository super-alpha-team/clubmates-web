import React from "react";
import { AcitivitySectionHeader } from "./ActivityComponents";

function ActivityPricingItem() {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full group">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 bg-white flex flex-col relative overflow-hidden group-hover:border-orange">
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          BUSINESS
        </h2>
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>$56</span>
          <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
        </h1>
        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          Vexillologist pitchfork
        </p>
        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          Tumeric plaid portland
        </p>
        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          Hexagon neutra unicorn
        </p>
        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          Vexillologist pitchfork
        </p>
        <p className="flex items-center text-gray-600 mb-6">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          Mixtape chillwave tumeric
        </p>
        <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none rounded group-hover:bg-orange">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
}

function ActivityPricingSection() {
  return (
    <div className="py-16 px-24 bg-orange bg-opacity-10 flex flex-col items-center">
      <AcitivitySectionHeader title="Thông tin đăng ký"></AcitivitySectionHeader>
      <div className="mt-4 flex flex-row overflow-x-auto">
        <ActivityPricingItem></ActivityPricingItem>
        <ActivityPricingItem></ActivityPricingItem>
        <ActivityPricingItem></ActivityPricingItem>
        <ActivityPricingItem></ActivityPricingItem>
      </div>
    </div>
  );
}

export default ActivityPricingSection;
