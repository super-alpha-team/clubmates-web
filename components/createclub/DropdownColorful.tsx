import React, { useState, useRef, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

type DropdownColorfulProps = {
  value: string;
  name: string;
  clubInfo: any;
  action: (string) => void;
};

function useOutsideCollapse(ref, collapse) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        collapse();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const DropdownColorful = ({
  value,
  name,
  clubInfo,
  action,
}: DropdownColorfulProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [keepColorWheelOpen, setKeepColorWheelOpen] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideCollapse(wrapperRef, collapse);

  function expand() {
    setIsExpanded(true);
  }

  function collapse() {
    setIsExpanded(false);
  }

  function toggle() {
    setKeepColorWheelOpen(!keepColorWheelOpen);
    if (!isExpanded && keepColorWheelOpen) {
      expand();
    }
  }

  function select(value) {
    action({ ...clubInfo, [name]: value });
  }

  return (
    <>
      <div className="w-full h-16 relative pl-2" tabIndex={0}>
        {/* <span>{title}</span> */}
        <div
          className={
            !isExpanded
              ? "z-10 px-2 py-2 border-[#F2F5FA] rounded-lg bg-[#F1F1F2] flex flex-row justify-between cursor-pointer"
              : "border-orange border bg-white transition duration-50 z-10 px-2 py-2 rounded-lg flex flex-row justify-between cursor-pointer"
          }
          onClick={toggle}
        >
          <span className="w-full text-sm">
            {clubInfo[`${name}`] == "" ? "Chọn màu" : `${clubInfo[`${name}`]}`}
          </span>
          <img
            src="/icons/iconmonstr-paintbrush-7.svg"
            alt="entypo_select-arrows"
            className="w-4"
          />
        </div>

        {isExpanded && (
          <div ref={wrapperRef} className="absolute z-[9999]">
            <HexColorPicker onChange={select} color={value} />
            <HexColorInput onChange={select} color={value} />
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownColorful;
