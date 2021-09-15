import React, { useState, useEffect } from "react";
import InputClubGroupComponent from "components/createclub/InputClubGroupComponent";
import ClubGroupDisplay from "../ClubGroupDisplay";

type OrganizeStructureProps = {
  clubGroupInfo: any;
  setClubGroupInfo: (string) => void;
  onNext: () => void;
  templateNum: number;
  setTemplateNum: (number) => void;
};

const OrganizeStructureTab = ({
  clubGroupInfo,
  setClubGroupInfo,
  onNext,
  templateNum,
  setTemplateNum,
}: OrganizeStructureProps) => {
  const [chooseTemplate, setChooseTemplate] = useState(true);
  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    if (templateNum == 1) {
      setTemplateData(group1);
      setClubGroupInfo(group1);
    }
    if (templateNum == 2) {
      setTemplateData(group2);
      setClubGroupInfo(group2);
    }
    if (templateNum == 3) {
      setTemplateData(group3);
      setClubGroupInfo(group3);
    }
  }, [templateNum]);

  const switchOption = () => {
    setChooseTemplate(!chooseTemplate);
  };

  const switchTemplateNum = (num) => {
    setTemplateNum(num);
  };

  return (
    <>
      <div>
        <div className="flex items-center">
          {chooseTemplate ? (
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
          <p>Chọn theo template</p>
        </div>
        {chooseTemplate ? (
          <>
            <div className="flex justify-around mt-6 mb-8">
              {templateNum == 1 ? (
                <div className="relative flex flex-col items-center justify-center h-64 w-64 border hover:border border-orange shadow-template rounded-lg cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(1)}
                  />
                  <p>Học thuật</p>
                </div>
              ) : (
                <div className="relative flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(1)}
                  />
                  <p>Học thuật</p>
                </div>
              )}
              {templateNum == 2 ? (
                <div className="flex flex-col items-center justify-center h-64 w-64 border border-orange shadow-template rounded-lg cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(2)}
                  />
                  <p>Văn nghệ</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(2)}
                  />
                  <p>Văn nghệ</p>
                </div>
              )}
              {templateNum == 3 ? (
                <div className="flex flex-col items-center justify-center h-64 w-64 border border-orange shadow-template rounded-lg cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(3)}
                  />
                  <p>Tình nguyện</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
                  <img
                    src="https://svgshare.com/i/_vC.svg"
                    alt="template"
                    className="w-60 mb-2"
                    onClick={() => switchTemplateNum(3)}
                  />
                  <p>Tình nguyện</p>
                </div>
              )}
            </div>
            <ClubGroupDisplay templateInfo={templateData} />
          </>
        ) : (
          <div className="mb-8"></div>
        )}
        <div>
          <div className="flex items-center">
            {!chooseTemplate ? (
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
            <p>Tạo ban</p>
          </div>
          <div>
            {!chooseTemplate ? (
              <InputClubGroupComponent
                clubGroupInfo={clubGroupInfo}
                action={setClubGroupInfo}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="text-lg pl-8 h-11 pr-8 pt-2 pb-2 rounded-full bg-orange text-white shadow-lg hover:bg-orange-dark transition duration-200"
          onClick={onNext}
        >
          Tiếp tục
        </button>
      </div>
    </>
  );
};

const group1 = [
  {
    ClubGroupName: "group1",
    ClubGroupDescription: "group1",
  },
  {
    ClubGroupName: "group1",
    ClubGroupDescription: "group1",
  },
];

const group2 = [
  {
    ClubGroupName: "group2",
    ClubGroupDescription: "group2",
  },
  {
    ClubGroupName: "group2",
    ClubGroupDescription: "group2",
  },
];

const group3 = [
  {
    ClubGroupName: "group3",
    ClubGroupDescription: "group3",
  },
  {
    ClubGroupName: "group3",
    ClubGroupDescription: "group3",
  },
];

export default OrganizeStructureTab;
