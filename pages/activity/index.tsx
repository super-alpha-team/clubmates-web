import Header from "components/header/Header";
import React, { useState } from "react";

const Activities = function () {
  return (
    <div>
      <Header />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        Danh sách các hoạt động của tôi
      </div>
    </div>
  );
};
export default Activities;
