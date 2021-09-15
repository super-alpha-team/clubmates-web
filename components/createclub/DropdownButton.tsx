import React, { useState } from "react";

type DropDownButtonProps = {
  title: string;
  items: Array<string>;
  name: string;
  clubInfo: any;
  errorType: string;
  errors: any;
  setError: (string) => void;
  action: (string) => void;
};

const DrowpdownButton = ({
  title,
  items,
  name,
  clubInfo,
  errorType,
  errors,
  setError,
  action,
}: DropDownButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState("");
  function expand() {
    setIsExpanded(true);
  }

  function collapse() {
    setIsExpanded(false);
  }

  function toggle() {
    if (isExpanded) {
      collapse();
    } else {
      expand();
    }
  }

  function select(item) {
    if (item !== selected) {
      setSelected(item);
      action({ ...clubInfo, [name]: item });
      collapse();
    }

    switch (name) {
      case "ClubCate":
        errors[`${errorType}`] =
          item.length == 0 ? "Không để trống danh mục!" : "";
        break;
      case "ClubLocation":
        errors[`${errorType}`] =
          item.length == 0 ? "Không để trống địa điểm!" : "";
        break;
      default:
        break;
    }
    setError({ ...errors });
  }

  function onBlur(e) {
    collapse();
  }

  return (
    <>
      <div className="w-full h-16 pl-2" tabIndex={0} onBlur={onBlur}>
        {/* <span>{title}</span> */}
        {errors[`${errorType}`] === "" ? (
          <div
            className={
              !isExpanded
                ? "z-10 px-2 py-2 border-[#F2F5FA] rounded-lg bg-[#F1F1F2] flex flex-row justify-between cursor-pointer"
                : "border-orange border bg-white transition duration-50 z-10 px-2 py-2 rounded-lg flex flex-row justify-between cursor-pointer"
            }
            onClick={toggle}
          >
            <span className="w-full text-sm">
              {clubInfo[`${name}`] == ""
                ? `Chọn ${title.toLowerCase()}`
                : `${clubInfo[`${name}`]}`}
            </span>
            <img
              src="/icons/entypo_select-arrows.svg"
              alt="entypo_select-arrows"
              className="w-4"
            />
          </div>
        ) : (
          <>
            <div
              className={
                !isExpanded
                  ? "z-10 px-2 py-2 border-red-600 border rounded-lg bg-white flex flex-row justify-between cursor-pointer"
                  : "border-orange border bg-white transition duration-50 z-10 px-2 py-2 rounded-lg flex flex-row justify-between cursor-pointer"
              }
              onClick={toggle}
            >
              <span className="w-full text-sm">
                {clubInfo[`${name}`] == ""
                  ? `Chọn ${title.toLowerCase()}`
                  : `${clubInfo[`${name}`]}`}
              </span>
              <img
                src="/icons/entypo_select-arrows.svg"
                alt="entypo_select-arrows"
                className="w-4"
              />
            </div>
            <p className="text-xs p-1 text-red-600">{errors[`${errorType}`]}</p>
          </>
        )}

        {isExpanded && (
          <div className="z-[9999] relative shadow-md list-none bg-white p-2 mt-2 rounded">
            <li className="max-h-[7.2rem] overflow-y-auto">
              {items.map((item, index) => (
                <ul
                  key={index}
                  className={
                    "mt-1.5 px-2 py-1 rounded hover:bg-gray-100 cursor-pointer " +
                    (selected == item ? "bg-gray-100" : "")
                  }
                  id="option"
                  onClick={() => select(item)}
                >
                  {item}
                </ul>
              ))}
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default DrowpdownButton;
