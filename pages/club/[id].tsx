import { GetServerSideProps } from "next";
import React from "react";
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


type AppProps = {
  param: string;
};

function Club(props: AppProps) {
  return (<>
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
  </>)

}
export default Club;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // gọi lên server
  // lấy data
  // xử lý
  // trả về props
  return {
    props: {
      param: params.id,
    },
  };
};
