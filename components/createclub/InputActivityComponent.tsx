import React, { useState } from "react";

type InputActivityProps = {
  activityInfo: any;
  action: (string) => void;
};

const InputActivityComponent = ({
  activityInfo,
  action,
}: InputActivityProps) => {
  const [activity, setActivity] = useState({
    ActivityName: "",
    ActivityDescription: "",
  });

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const onHandleSave = () => {
    action([...activityInfo, activity]);
    setActivity({ ActivityName: "", ActivityDescription: "" });
  };

  const onHandleCancel = () => {
    setActivity({ ActivityName: "", ActivityDescription: "" });
  };

  const onHandleDeleteClubGroup = (name) => {
    activityInfo.forEach((item, index) => {
      if (item.ActivityName === name) {
        activityInfo.splice(index, 1);
      }
    });
    action([...activityInfo]);
  };

  return (
    <div>
      <div className="mt-4 mb-8">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="font-semibold">Tên hoạt động</p>
            <div className="pl-2">
              <input
                className="w-full h-[37px] text-sm focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
                placeholder="Nhập tên hoạt động"
                onChange={onInputChange}
                name="ActivityName"
                value={activity.ActivityName}
              ></input>
            </div>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Mô tả</p>
            <div className="pl-2">
              <input
                className="w-full h-[37px] text-sm focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
                placeholder="Nhập mô tả"
                onChange={onInputChange}
                name="ActivityDescription"
                value={activity.ActivityDescription}
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="pl-8 h-10 pr-8 pt-2 pb-2 rounded-full text-gray-500 hover:bg-gray-100 shadow-lg transition duration-200"
            onClick={onHandleCancel}
          >
            Hủy
          </button>
          <button
            className="pl-8 h-10 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
            onClick={onHandleSave}
          >
            Lưu
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2">
          <h2 className="font-semibold mb-4 text-2xl">Tên hoạt động</h2>
          <h1 className="font-semibold col-span-2 text-2xl">Mô tả</h1>
        </div>
        {activityInfo?.map((item, index) => (
          <div key={index} className="grid grid-cols-3 gap-2">
            <p className="font-semibold">{item.ActivityName}</p>
            <div className="col-span-2 flex justify-between mb-4">
              <p className="font-semibold ">{item.ActivityDescription}</p>
              <img
                src="/icons/iconmonstr-trash-can-1.svg"
                alt="trash"
                className="cursor-pointer"
                onClick={() => onHandleDeleteClubGroup(item.ActivityName)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputActivityComponent;
