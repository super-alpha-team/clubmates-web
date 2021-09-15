import React, { useState } from "react";
import InputActivityComponent from "components/createclub/InputActivityComponent";

type ActivityProps = {
  activityInfo: any;
  setActivityInfo: (string) => void;
  onNext: () => void;
};

const ActivityTab = ({
  activityInfo,
  setActivityInfo,
  onNext,
}: ActivityProps) => {
  const [isCreated, setIsCreated] = useState(true);
  const [error, setError] = useState(false);

  const switchOption = () => {
    setIsCreated(!isCreated);
    setActivityInfo([]);
    setError(false);
  };

  const onHandleNextChange = () => {
    if (activityInfo.length == 0 && isCreated) {
      setError(true);
    } else {
      onNext();
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center">
          {isCreated ? (
            <img
              src="/icons/bi_check-circle-fill.svg"
              alt="check"
              className="text-orange mr-2"
            />
          ) : (
            <img
              src="/icons/none-check.svg"
              alt="none check"
              className="text-orange mr-2 cursor-pointer"
              onClick={switchOption}
            />
          )}{" "}
          <p>Tạo hoạt động đầu tiên</p>
        </div>
        <div>
          {isCreated ? (
            <InputActivityComponent
              activityInfo={activityInfo}
              action={setActivityInfo}
            />
          ) : (
            <div className="mb-8"></div>
          )}
        </div>
        <div className="flex items-center mt-6">
          {!isCreated ? (
            <img
              src="/icons/bi_check-circle-fill.svg"
              alt="check"
              className="text-orange mr-2"
            />
          ) : (
            <img
              src="/icons/none-check.svg"
              alt="none check"
              className="text-orange mr-2 cursor-pointer"
              onClick={switchOption}
            />
          )}{" "}
          <p>Bỏ qua phần này</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div>
          {error ? (
            <p className="text-sm m-1 pb-2 text-red-600">
              Tạo hoạt động hoặc nhấn bỏ qua để tiếp tục
            </p>
          ) : (
            ""
          )}
        </div>
        <button
          className="text-lg w-[129px] pl-8 h-11 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
          onClick={onHandleNextChange}
        >
          Tiếp tục
        </button>
      </div>
    </>
  );
};

export default ActivityTab;
