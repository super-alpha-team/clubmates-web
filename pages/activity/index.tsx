/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ActivitiesSection from "components/activity/ActivitiesSection";
import ActivityBanner from "components/activity/ActivityBanner";

function activitiesSectionAction(value) {
  console.log(value);
}

const Activities = function () {
  return (
    <div>
      <Header></Header>
      <ActivityBanner></ActivityBanner>
      <ActivitiesSection
        title="HOẠT ĐỘNG TUẦN QUA"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        title="Hoạt động nổi bật"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        title="Hoạt động định kỳ"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
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
