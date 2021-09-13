import React from "react";
import InputClubGroupComponent from "components/createclub/InputClubGroupComponent";

type OrganizeStructureProps = {
  clubGroupInfo: any;
  setClubGroupInfo: (string) => void;
};

const OrganizeStructureTab = ({
  clubGroupInfo,
  setClubGroupInfo,
}: OrganizeStructureProps) => {
  return (
    <div>
      <div className="flex items-center">
        {clubGroupInfo.length === 0 ? (
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
        <p>Chọn theo template</p>
      </div>
      <div className="flex justify-around mt-6 mb-8">
        <div className="relative flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
          <img
            src="https://svgshare.com/i/_vC.svg"
            alt="template"
            className="w-60 mb-2"
          />
          <p>Không giới hạn</p>
        </div>
        <div className="flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
          <img
            src="https://svgshare.com/i/_vC.svg"
            alt="template"
            className="w-60 mb-2"
          />
          <p>Không giới hạn</p>
        </div>
        <div className="flex flex-col items-center justify-center h-64 w-64 border border-white hover:border hover:border-orange hover:shadow-template hover:rounded-lg hover:cursor-pointer">
          <img
            src="https://svgshare.com/i/_vC.svg"
            alt="template"
            className="w-60 mb-2"
          />
          <p>Không giới hạn</p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          {clubGroupInfo.length > 0 ? (
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
          <p>Tạo ban</p>
        </div>
        <div>
          <InputClubGroupComponent
            clubGroupInfo={clubGroupInfo}
            action={setClubGroupInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizeStructureTab;
