import React from "react";
import InputActivityComponent from "components/createclub/InputActivityComponent";

type ActivityProps = {
  activityInfo: any;
  setActivityInfo: (string) => void;
};

const ActivityTab = ({ activityInfo, setActivityInfo }: ActivityProps) => {
  return (
    <div>
      <div className="flex items-center">
        {activityInfo.length > 0 ? (
          <img
            src="/icons/bi_check-circle-fill.svg"
            alt="check"
            className="text-orange mr-2"
          />
        ) : (
          <img
            src="/icons/none-check.svg"
            alt="none check"
            className="text-orange mr-2"
          />
        )}{" "}
        <p>Tạo hoạt động đầu tiên</p>
      </div>
      <div>
        <InputActivityComponent
          activityInfo={activityInfo}
          action={setActivityInfo}
        />
      </div>
      <div className="flex items-center mt-6">
        {activityInfo.length === 0 ? (
          <img
            src="/icons/bi_check-circle-fill.svg"
            alt="check"
            className="text-orange mr-2"
          />
        ) : (
          <img
            src="/icons/none-check.svg"
            alt="none check"
            className="text-orange mr-2"
          />
        )}{" "}
        <p>Bỏ qua phần này</p>
      </div>
    </div>
  );
};

export default ActivityTab;
