import React, { FC } from "react";
import { isMobile } from "react-device-detect";

import Navbar from "components/kit/home/navbar";
import Top10Club from "components/kit/home/top10club";
import TopActivties from "components/kit/home/topActivties";
import Footer from "components/kit/home/footer";
import Feature from "components/kit/home/feature";
import Hero from "components/kit/home/hero";
import Step from "components/kit/home/step";
import Testimonial from "components/kit/home/testimonial";

const TogglePage: FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Feature />
      <Top10Club />
      <TopActivties />
      <Step />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
};

export default TogglePage;
