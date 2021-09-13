import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";

type DrowpdownCalendarProps = {
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

const DrowpdownCalendar = ({
  name,
  clubInfo,
  action,
}: DrowpdownCalendarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState("");
  const [keepCalendarOpen, setKeepCalendarOpen] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideCollapse(wrapperRef, collapse);

  function expand() {
    setIsExpanded(true);
  }

  function collapse() {
    setIsExpanded(false);
  }

  function toggle() {
    setKeepCalendarOpen(!keepCalendarOpen);
    if (!isExpanded && keepCalendarOpen) {
      expand();
    }
  }

  function select(value) {
    // action(value);
    setSelected(Intl.DateTimeFormat("hi").format(value));
    action({ ...clubInfo, [name]: Intl.DateTimeFormat("hi").format(value) });
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
            {clubInfo[`${name}`] == ""
              ? "Chọn thời gian"
              : `${clubInfo[`${name}`]}`}
          </span>
          <img
            src="/icons/iconmonstr-calendar-4.svg"
            alt="entypo_select-arrows"
            className="w-4"
          />
        </div>

        {isExpanded && (
          <div ref={wrapperRef} className="absolute left-[-40px]">
            <Calendar onChange={select} />
          </div>
        )}
      </div>
    </>
  );
};

export default DrowpdownCalendar;
