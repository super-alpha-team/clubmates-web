import React from "react";

type TemplateClubGroupProps = {
  templateInfo: any;
};

function ClubGroupDisplay({ templateInfo }: TemplateClubGroupProps) {
  // const onHandleDeleteClubGroup = (name) => {
  //   clubGroupInfo.forEach((item, index) => {
  //     if (item.ClubGroupName === name) {
  //       clubGroupInfo.splice(index, 1);
  //     }
  //   });
  //   action([...clubGroupInfo]);
  // };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 gap-2">
        <h2 className="font-semibold mb-4 text-2xl">Tên ban</h2>
        <h1 className="font-semibold col-span-2 text-2xl">Mô tả</h1>
      </div>
      {templateInfo?.map((item, index) => (
        <div key={index} className="grid grid-cols-3 gap-2">
          <p className="font-semibold">{item.ClubGroupName}</p>
          <div className="col-span-2 flex justify-between mb-4">
            <p className="font-semibold ">{item.ClubGroupDescription}</p>
            <img
              src="/icons/iconmonstr-trash-can-1.svg"
              alt="trash"
              className="cursor-pointer"
              // onClick={() => onHandleDeleteClubGroup(item.ClubGroupName)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClubGroupDisplay;
