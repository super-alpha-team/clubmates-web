import React from "react";
import { ActivityProgressBar, ActivityTextButton } from "./ActivityComponents";

type ActivityInfoProps = {
  className?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function ActivityInfo(props: ActivityInfoProps) {
  const title = props.title;
  const subtitle = props.subtitle;
  const children = props.children;
  const className = props.className || "";

  return (
    <div className={className}>
      <div className="font-normal flex flex-row items-center">
        {children}
        <div className="ml-2">
          <div className="text-h3">{title}</div>
          <div className="text-copyright">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function ActivitySummary() {
  return (
    <div className="py-16 px-40 bg-orange bg-opacity-10 flex flex-col items-center justify-between gap-8 xl:flex-row">
      <div className="flex flex-row items-center">
        <div className="w-48 h-48 bg-orange  rounded-xl flex flex-col justify-center items-center text-white">
          <div className="text-h3 font-light">Tháng 09</div>
          <div className="text-[60px] leading-[48px] font-extrabold">10</div>
          <div className="text-h3 font-light">2021</div>
        </div>

        <div className="ml-8 font-light">
          <ActivityProgressBar
            className="w-60"
            status="Đang diễn ra"
            percent="33%"
          ></ActivityProgressBar>

          <ActivityInfo
            className="mt-1"
            title="8:00 - 11:00"
            subtitle="từ ngày 10/09/2021"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 30"
            >
              <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
              <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
            </svg>
          </ActivityInfo>

          <ActivityInfo
            className="mt-1"
            title="Hồ Chí Minh"
            subtitle="Trường ĐH Khoa học tự nhiên HCM, Q5, HCM"
          >
            <svg
              width="32"
              height="30"
              viewBox="0 0 32 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.6784 7.26398L27.8784 4.33598C27.6202 4.1702 27.3394 4.04249 27.0448 3.95678C26.7514 3.8618 26.4459 3.80901 26.1376 3.79998H15.2L16.4816 11.8H26.1376C26.4 11.8 26.728 11.7408 27.0432 11.6432C27.3584 11.5456 27.6624 11.4112 27.8768 11.2656L31.6768 8.33438C31.8928 8.18878 32 7.99518 32 7.79998C32 7.60477 31.8928 7.41118 31.6784 7.26398ZM13.6 0.599976H12C11.7878 0.599976 11.5843 0.684261 11.4343 0.83429C11.2843 0.984319 11.2 1.1878 11.2 1.39998V6.99998H5.8624C5.5968 6.99998 5.2704 7.05918 4.9552 7.15838C4.6384 7.25437 4.336 7.38718 4.1216 7.53598L0.3216 10.464C0.1056 10.6096 0 10.8048 0 11C0 11.1936 0.1056 11.3872 0.3216 11.536L4.1216 14.4672C4.336 14.6128 4.6384 14.7472 4.9552 14.8432C5.2704 14.9408 5.5968 15 5.8624 15H11.2V28.6C11.2 28.8121 11.2843 29.0156 11.4343 29.1657C11.5843 29.3157 11.7878 29.4 12 29.4H13.6C13.8122 29.4 14.0157 29.3157 14.1657 29.1657C14.3157 29.0156 14.4 28.8121 14.4 28.6V1.39998C14.4 1.1878 14.3157 0.984319 14.1657 0.83429C14.0157 0.684261 13.8122 0.599976 13.6 0.599976Z"
                fill="black"
              />
            </svg>
          </ActivityInfo>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-x-2">
            <ActivityTextButton
              className="rounded border border-orange"
              title="Chia sẻ hoạt động"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </ActivityTextButton>

            <ActivityTextButton
              className="rounded border border-orange"
              title="Quan tâm hoạt động"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456.361-.372.86-.603 1.412-.603 0 0 .996-.003 1.997 1.029 1.001-1.032 1.997-1.029 1.997-1.029.552 0 1.051.23 1.412.603s.585.888.585 1.456-.224 1.084-.585 1.456L12 13.203 8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"></path>
              </svg>
            </ActivityTextButton>
          </div>

          <ActivityTextButton
            className="rounded border bg-orange"
            title="ĐĂNG KÝ THAM GIA"
          ></ActivityTextButton>

          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 32 32"
              >
                <path
                  d="M29 14a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1a2 2 0 0 1 0 4a1 1 0 0 0-1 1v5a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1a2 2 0 0 1 0-4zm-1 5.87V24h-7v-3h-2v3H4v-4.13a4 4 0 0 0 0-7.74V8h15v3h2V8h7v4.13a4 4 0 0 0 0 7.74z"
                  fill="currentColor"
                />
                <path d="M19 13h2v6h-2z" />
              </svg>

              <div className="text-h5 font-bold flex flex-col">
                <span>15.000 VND</span>
              </div>

              <svg
                className="h-5 w-5"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.5L5 8.5H15L10 1.5ZM10 19.5L15 12.5H5L10 19.5Z"
                  fill="black"
                />
              </svg>
            </div>
            <span>Vé Vòng 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivitySummary;
