import React from "react";

type InputComponentProps = {
  title: string;
  name: string;
  clubInfo: any;
  errorType: string;
  errors: any;
  setError: (string) => void;
  action: (string) => void;
};

const InputComponent = ({
  title,
  name,
  clubInfo,
  errorType,
  errors,
  setError,
  action,
}: InputComponentProps) => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const onInputChange = (e) => {
    const { value } = e.target;
    action({ ...clubInfo, [name]: value });

    switch (name) {
      case "ClubWebsite":
        errors[`${errorType}`] =
          value.length == 0 ? "Không để trống Website!" : "";
        break;
      case "ClubNumberPhone":
        errors[`${errorType}`] =
          value.length == 0 ? "Không để trống số điện thoại!" : "";
        break;
      case "ClubEmail":
        errors[`${errorType}`] = validEmailRegex.test(value)
          ? ""
          : "Email không hợp lệ!";
        break;
      default:
        break;
    }
    setError({ ...errors });
    // console.log("errs", errors);
  };

  return (
    <div>
      <p className="font-semibold">
        {title} <span className="text-error">*</span>
      </p>
      <div className="pl-2">
        {errors[`${errorType}`] === "" ? (
          <input
            className="w-full h-[37px] text-sm focus:border-orange focus:border focus:bg-white transition duration-50 rounded-lg bg-[#F1F1F2] outline-none pl-2"
            placeholder={`Nhập ${title.toLowerCase()}`}
            onChange={onInputChange}
            value={clubInfo[`${name}`]}
          ></input>
        ) : (
          <>
            <input
              className="w-full h-[37px] text-sm focus:border-orange border-red-600 border focus:border focus:bg-white transition duration-50 rounded-lg bg-white outline-none pl-2"
              placeholder={`Nhập ${title.toLowerCase()}`}
              onChange={onInputChange}
              value={clubInfo[`${name}`]}
            ></input>
            <p className="text-xs m-1 text-red-600">{errors[`${errorType}`]}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
