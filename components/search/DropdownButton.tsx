/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

type DropDownButtonProps = {
  value?: string;
  title: string;
  items: Array<string>;
  action: (string) => void;
};

function stringToSearchText(str) {
  // remove accents
  const from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "");

  return str;
}

export default function DropdownButton({
  value,
  title,
  items,
  action,
}: DropDownButtonProps) {
  const options = items.map((e) => {
    return { text: e, searchText: stringToSearchText(e) };
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(value);
  const [searchKey, setSearchKey] = useState("");

  function expand() {
    setSearchKey("");
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
      action(item);
      collapse();
    }
  }

  function focusInCurrentTarget({ relatedTarget, currentTarget }) {
    if (relatedTarget === null) return false;
    let node = relatedTarget;
    while (node !== null) {
      if (node === currentTarget) return true;
      node = node.parentNode;
    }

    return false;
  }

  function onBlur(e) {
    if (!focusInCurrentTarget(e)) {
      collapse();
    }
  }

  function search(e) {
    const value = e.target.value;
    const key = stringToSearchText(value);
    setSearchKey(key);
  }
  return (
    <>
      <div className="w-full h-16" tabIndex={0} onBlur={onBlur}>
        <span>{title}</span>
        <div
          className="z-10 mt-1.5 px-2 py-1 rounded border border-gray-500 flex flex-row justify-between cursor-pointer"
          onClick={toggle}
        >
          <span className="w-full">
            {selected == null ? `Chọn ${title.toLowerCase()}` : selected}
          </span>
          <img
            src="/icons/entypo_select-arrows.svg"
            alt="entypo_select-arrows"
          />
        </div>

        {isExpanded && (
          <div className="z-[9999] relative shadow-md list-none bg-white p-2 mt-2 rounded">
            <input
              className="px-2 py-1 w-full rounded border border-gray-200 outline-none focus:border-blue-300"
              placeholder="Tìm kiếm"
              type="text"
              id="typesearch"
              onChange={search}
            ></input>
            <li className="max-h-[7.2rem] overflow-y-auto">
              {options
                .filter((e) => e.searchText.includes(searchKey))
                .map((e, index) => (
                  <ul
                    key={index}
                    className={
                      "mt-1.5 px-2 py-1 rounded hover:bg-gray-100 cursor-pointer " +
                      (selected == e.text ? "bg-gray-100" : "")
                    }
                    id="option"
                    onClick={() => select(e.text)}
                  >
                    {e.text}
                  </ul>
                ))}
            </li>
          </div>
        )}
      </div>
    </>
  );
}
