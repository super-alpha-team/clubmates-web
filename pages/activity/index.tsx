/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ActivityItem from "components/kit/ActivityItem";
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
    <div className={className + " group"}>
      <div className=" flex flex-row items-center">
        <span className="text-h4 font-normal">{title}</span>
        <div className="overflow-hidden">
          <div className="flex flex-row items-center pl-8 select-none cursor-pointer -translate-x-full transition duration-300 group-hover:translate-x-0 hover:text-blue-400">
            <p className="text-h">Xem thêm</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[25rem] flex flex-row">
        {items.map((result, index) => (
          <div key={index} className={index == items.length - 1 ? "" : "mr-8"}>
            <ActivityItem data={result.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

function activitiesSectionAction(value) {
  console.log(value);
}

const Activities = function () {
  return (
    <div>
      <Header></Header>
      <ActivitiesSection
        className="mx-20"
        title="HOẠT ĐỘNG TUẦN QUA"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        className="mx-20"
        title="Hoạt động nổi bật"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        className="mx-20"
        title="Hoạt động định kỳ"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        className="mx-20"
        title="Hoạt động tình nguyện"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <Footer></Footer>
    </div>
  );
};
export default Activities;

const activityExpamle = {
  data: {
    img: "https://i.pinimg.com/474x/74/30/4d/74304d33481af62ac222522d71b51b4e.jpg",
    logo: "https://i.pinimg.com/474x/d8/04/93/d80493a32f53c5626d58a45cc3c4c377.jpg",
    joined: true,
    destination: "Long An",
    category: "Tình nguyện",
    name: "Xuân tình nguyện - bạn của mọi nhà",
    description:
      "When i’m not coding i switch to netflix with biscuits. When i’m not coding i switch to netflix with biscuits.When i’m not coding i switch to netflix with biscuits.",
    status: "Đang diễn ra",
    percent: "25%",
    participants: "25/100",
    cost: "100k",
  },
};
const DATA_ROW = Array(4).fill(activityExpamle);
