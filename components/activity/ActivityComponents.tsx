import React from "react";

type ActivityProgressBarProps = {
  className?: string;
  status: string;
  percent: string;
};

export function ActivityProgressBar(props: ActivityProgressBarProps) {
  const status = props.status;
  const percent = props.percent;
  const className = props.className || "";

  return (
    <div className={className}>
      <div className="w-full flex justify-between text-cyan-light">
        <span>{status}</span>
        <span>{percent}</span>
      </div>
      <div className="h-1.5 bg-gray-light rounded-md mt-1">
        <div
          style={{ width: percent }}
          className="h-1.5 bg-cyan-light rounded"
        ></div>
      </div>
    </div>
  );
}

type ActivityTextButtonProps = {
  className?: string;
  title: string;
  action?: () => void;
  children?: React.ReactNode;
};

export function ActivityTextButton(props: ActivityTextButtonProps) {
  const title = props.title;
  const action = props.action;
  const children = props.children;
  const className = props.className || "";

  return (
    <button className={className} onClick={action}>
      <div className="p-2 text-h5 font-bold flex flex-row items-center">
        <p className={children == null ? "mr-0.5" : "mr-4"}>{title}</p>
        {children}
      </div>
    </button>
  );
}

type AcitivitySectionHeaderProps = {
  title: string;
};
export function AcitivitySectionHeader({ title }: AcitivitySectionHeaderProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-1.5 w-24 bg-cyan-light"></div>
      <h3 className="text-h1 font-bold">{title}</h3>
    </div>
  );
}
