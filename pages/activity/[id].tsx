/* eslint-disable prettier/prettier */
import { GetServerSideProps } from "next";
import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import ActivitySummary from "components/activity/ActivitySummary";
import { ActivityDescription } from "components/activity/ActivityDescription";
import ActivityPricingSection from "components/activity/ActivityPricing";
import ActivityBlogSection from "components/activity/ActivityBlogSection";

type AppProps = {
  param: string;
};

function Activity(props: AppProps) {
  return <div>
    <Header></Header>
    <ActivitySummary></ActivitySummary>
    <ActivityDescription></ActivityDescription>
    <ActivityPricingSection></ActivityPricingSection>
    <ActivityBlogSection></ActivityBlogSection>
    <Footer></Footer>
  </div>;
}
export default Activity;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      param: params.id,
    },
  };
};
