import ClubBanner from "components/club/ClubBanner";
import ClubIntro from "components/club/ClubIntro";
import Comments from "components/club/Comments";
import FrequentlyAskedQues from "components/club/FrequentlyAskedQues";
import HighlightNews from "components/club/HighlightNews";
import Highlights from "components/club/Highlights";
import JoinGroup from "components/club/JoinClub";
import Managers from "components/club/Managers";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React, { useState } from "react";

const MyClub = function () {
  return (
    <>
      <Header />
      <ClubBanner />
      <ClubIntro />
      <Highlights />
      <FrequentlyAskedQues />
      <Managers />
      <Comments />
      <HighlightNews />
      <JoinGroup />
      <Footer />
    </>
  );
};
export default MyClub;
