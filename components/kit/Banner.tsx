import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const advertiseData = [
  {
    title: "Bùng nổ hoạt động Câu lạc bộ với Clubmates",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    date: "Aug 28th 2021",
    imgUrl: "https://svgshare.com/i/_vC.svg",
    color: "#F9A826",
  },
  {
    title: "Bùng nổ hoạt động Câu lạc bộ với Clubmates",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    date: "Aug 28th 2021",
    imgUrl: "https://svgshare.com/i/_vC.svg",
    color: "#F9A826",
  },
];

function Circle(
  x: number,
  y: number,
  dx: number,
  dy: number,
  radius: number,
  color: string,
  ctx: any
): void {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.ctx = ctx;

  this.draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    //ctx.strokeStyle = "blue";
    const grd = this.ctx.createLinearGradient(this.x, 0, this.x + 150, 20);
    grd.addColorStop(0, this.color);
    grd.addColorStop(1, "white");
    this.ctx.fillStyle = grd;
    this.ctx.filter = "blur(0px)";
    this.ctx.fill();
  };

  this.update = () => {
    if (this.x + this.radius > innerWidth - 20 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight / 1.4 || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

function Rectangle(
  x: number,
  y: number,
  w: number,
  h: number,
  dx: number,
  dy: number,
  color: string,
  ctx: any
) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.ctx = ctx;

  this.draw = () => {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.w, this.h);
    //ctx.strokeStyle = "blue";
    const grd = this.ctx.createLinearGradient(this.x, 0, this.x + 150, 20);
    grd.addColorStop(0, this.color);
    grd.addColorStop(1, "white");
    this.ctx.fillStyle = grd;
    this.ctx.fill();
    //ctx.stroke();
  };

  this.update = () => {
    if (this.x > innerWidth - 20 - this.w || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight / 1.4 - this.h || this.y < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

function Triangle(
  x: number,
  y: number,
  edge: number,
  dx: number,
  dy: number,
  color: string,
  ctx: any
): void {
  this.x = x;
  this.y = y;
  this.edge = edge;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.ctx = ctx;

  const height = this.edge * Math.cos(Math.PI / 6);

  this.draw = () => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x + this.edge, this.y);
    this.ctx.lineTo(this.x + this.edge / 2, this.y - height);
    this.ctx.closePath();

    // the fill color
    const grd = this.ctx.createLinearGradient(this.x, 0, this.x + 150, 20);
    grd.addColorStop(0, this.color);
    grd.addColorStop(1, "white");
    this.ctx.fillStyle = grd;
    this.ctx.fill();
  };

  this.update = () => {
    if (this.x > innerWidth - 20 - this.edge || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight / 1.4 || this.y - height < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

type AdvertiseInfoProps = {
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  color: string;
};

function AdvertiseInfo({
  title,
  description,
  imgUrl,
  date,
  color,
}: AdvertiseInfoProps) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const colorStyle = {
    color: `${color}`,
    borderColor: `${color}`,
  };

  if (hover) {
    colorStyle["backgroundColor"] = `${color}`;
  }

  return (
    <div className="h-full">
      <div className="flex h-[625px] pl-24 pr-16 items-center gap-12 z-50">
        <div className="flex-1">
          <p className="text-5xl font-bold mb-4">{title}</p>
          <p className="font-semibold text-gray-dark">{description}</p>
          <p className="text-xs mt-2 italic">{date}</p>
          <button
            className="border-2 p-2 pl-4 pr-4 mt-4 rounded-full hover:text-white duration-200"
            style={colorStyle}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Xem chi tiết
          </button>
        </div>
        <div className="flex-1">
          <img src={imgUrl} alt="banner" />
        </div>
      </div>
    </div>
  );
}

function Banner() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.classList.add("bg-gray-500", "p-1", "border-8", "m-0");
      });

      const buttonNext = document.querySelector(".swiper-button-next");
      buttonNext.classList.add(
        "text-white",
        "bg-gray-300",
        "pt-12",
        "pb-12",
        "pr-8",
        "pl-8",
        "scale-75",
        "hover:bg-gray-400",
        "transition",
        "duration-300",
        "rounded-sm"
      );

      const buttonPrev = document.querySelector(".swiper-button-prev");
      buttonPrev.classList.add(
        "text-white",
        "bg-gray-300",
        "pt-12",
        "pb-12",
        "pr-8",
        "pl-8",
        "scale-75",
        "hover:bg-gray-400",
        "transition",
        "duration-300",
        "rounded-sm"
      );
    }

    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight / 1.4;
    const ctx = canvas.getContext("2d");

    const circleArr = [];
    const colors = [
      "#FDE4FF",
      "#AFE8FE",
      "#FFB6B9",
      "#A9ECA2",
      "#ACAAFF",
      "#FF926B",
      "#85DED3",
      "#BBFFED",
      "#1BFFC2",
      "#F6D186",
      "#FFAAA5",
      "#FFB6B9",
      "#A6B1E1",
      "#A7E9AF",
      "#C9D99E",
      "#F1D1B5",
      "#FFE0E0",
      "#DFD3C3",
    ];
    const numberOfShape = 6;
    for (let i = 0; i < numberOfShape; i++) {
      const radius = Math.random() * 25 + 5;
      const x = Math.random() * (innerWidth - 20 - radius * 2) + radius;
      const y = Math.random() * (innerHeight / 1.5 - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;

      const circle = new Circle(x, y, dx, dy, radius, colors[i], ctx);
      circleArr.push(circle);
    }

    const rectArr = [];
    for (let i = 0; i < numberOfShape; i++) {
      const w = Math.random() * 45 + 5;
      const h = 40;
      const x = Math.random() * (innerWidth - 20 - w);
      const y = Math.random() * (innerHeight / 1.5 - h);
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;
      //const color = "#AFE8FE";

      const rect = new Rectangle(x, y, w, w, dx, dy, colors[i + 5], ctx);
      rectArr.push(rect);
    }

    const triangleArr = [];
    for (let i = 0; i < numberOfShape; i++) {
      const edge = Math.random() * 60 + 5;
      const x = Math.random() * (innerWidth - 20 - edge);
      const y = Math.random() * (innerHeight / 1.5) + edge;
      const dx = (Math.random() - 0.5) * 3;
      const dy = (Math.random() - 0.5) * 3;
      //const color = "#AFE8FE";

      const triangle = new Triangle(x, y, edge, dx, dy, colors[i + 11], ctx);
      triangleArr.push(triangle);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
      }

      for (let i = 0; i < rectArr.length; i++) {
        rectArr[i].update();
      }

      for (let i = 0; i < triangleArr.length; i++) {
        triangleArr[i].update();
      }
    };
    animate();
  }, []);

  return (
    <div className="relative">
      <canvas
        id="canvas"
        style={{ overflow: "hidden" }}
        className="absolute z-[-1]"
      ></canvas>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-5/6 pb-0"
      >
        {advertiseData.map((data, index) => (
          <SwiperSlide key={index}>
            <AdvertiseInfo
              title={data.title}
              description={data.description}
              imgUrl={data.imgUrl}
              date={data.date}
              color={data.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
