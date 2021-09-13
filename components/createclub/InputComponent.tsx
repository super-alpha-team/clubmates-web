import React from "react";

type InputComponentProps = {
  title: string;
  name: string;
  clubInfo: any;
  action: (string) => void;
};

const InputComponent = ({
  title,
  name,
  clubInfo,
  action,
}: InputComponentProps) => {
  const onInputChange = (e) => {
    const { value } = e.target;
    action({ ...clubInfo, [name]: value });
  };

  return (
    <div>
      <p className="font-semibold">
        {title} <span className="text-error">*</span>
      </p>
      <div className="pl-2">
        <input
          className="w-full h-[37px] text-sm focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
          placeholder={`Nhập ${title.toLowerCase()}`}
          onChange={onInputChange}
          value={clubInfo[`${name}`]}
        ></input>
      </div>
    </div>
  );
};

export default InputComponent;
