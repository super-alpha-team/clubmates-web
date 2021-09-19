/* eslint-disable prettier/prettier */
import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ActivitiesSection from "components/activity/ActivitiesSection";
import ClubBanner from "components/club/ClubBanner";

function activitiesSectionAction(value) {
  console.log(value);
}

const Activities = function () {
  return (
    <div>
      <Header></Header>
      <ClubBanner />
      <ActivitiesSection
        title="CÂU LẠC BỘ MỚI THÀNH LẬP"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        title="CÂU LẠC BỘ NỔI BẬT"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        title="CÂU LẠC BỘ THEO QUÝ"
        items={DATA_ROW}
        action={activitiesSectionAction}
      ></ActivitiesSection>
      <ActivitiesSection
        title="GỢI Ý CHO BẠN"
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
