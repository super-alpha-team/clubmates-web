import React, { useState } from "react";
import ActivityItem from "components/kit/ActivityItem";
import styles from "./style.module.css";

type ActivitiesRowProps = {
  className?: string;
  title: string;
  items;
  action: (string) => void;
};

const ActivitiesSection = function ({
  className,
  title,
  items,
  action,
}: ActivitiesRowProps) {
  return (
    <div className={styles["activity-section"]}>
      <div className="flex flex-row items-center">
        <span className="text-h4 font-normal">{title}</span>
        <div className="overflow-hidden">
          <div className={styles["see-more"]}>
            <div className="flex flex-row items-center pl-8 select-none cursor-pointer transition duration-300 hover:text-blue-400">
              <p className="text-h">Xem thêm</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[25rem] flex flex-row">
        {/* {items.map((result, index) => (
          
        ))} */}
        <div className="mr-8">
          <ActivityItem data={items[0].data} />
        </div>
        <div className="mr-8 hidden md:block">
          <ActivityItem data={items[1].data} />
        </div>
        <div className="mr-8 hidden lg:block">
          <ActivityItem data={items[2].data} />
        </div>
        <div className="mr-0 hidden 1.5xl:block">
          <ActivityItem data={items[3].data} />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
