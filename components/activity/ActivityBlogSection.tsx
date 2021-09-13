import Blog from "components/blog/Blog";
import React from "react";
import { AcitivitySectionHeader } from "./ActivityComponents";

function ActivityBlogSection() {
  return (
    <div className="py-16 px-24 flex flex-col items-center">
      <AcitivitySectionHeader title="Cập nhật hoạt động"></AcitivitySectionHeader>
      <div className="mt-4 flex flex-row overflow-x-auto">
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
      </div>
    </div>
  );
}

export default ActivityBlogSection;
