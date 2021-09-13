import { useEffect, useState } from "react";

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

const images = [
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  "https://images.unsplash.com/photo-1527176930608-09cb256ab504",
];
let imageIndex = 0;

function changeActivityImage() {
  imageIndex = (imageIndex + 1) % images.length;
  if (typeof document !== "undefined") {
    const imageElements = document.querySelectorAll(".activity-image");
    imageElements.forEach((e, i) => {
      if (i == imageIndex) {
        e.classList.replace("z-0", "z-10");
        e.classList.replace("scale-0", "scale-100");
      } else {
        e.classList.replace("z-10", "z-0");
        e.classList.replace("scale-100", "scale-0");
      }
    });
  }
}

function ActivityBanner() {
  useEffect(() => {
    setInterval(changeActivityImage, 5000);
    if (typeof document !== "undefined") {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.classList.add("bg-gray-500", "p-1", "border-8", "m-0");
      });
      const imageElements = document.querySelectorAll(".activity-image");
      imageElements.forEach((e, i) => {
        if (i == imageIndex) {
          e.classList.replace("z-0", "z-10");
          e.classList.replace("scale-0", "scale-100");
        } else {
          e.classList.replace("z-10", "z-0");
          e.classList.replace("scale-100", "scale-0");
        }
      });
    }

    const canvas = document.querySelector("canvas");
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
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
      <div className="py-20 px-40 flex flex-col items-center gap-8 lg:flex-row">
        <div className="w-full flex flex-col items-start lg:w-1/2">
          <div className="flex flex-row items-center">
            <img
              className="w-8 h-8"
              src="https://findicons.com/files/icons/1008/quiet/256/pacman.png"
              alt="club-logo"
            />

            <p className="ml-1 bg-orange bg-opacity-20 py-1 px-2 text-h3">
              Đoàn thanh niên trường HCMUS
            </p>
          </div>
          <p className="font-extrabold text-[64px] leading-[70px] mt-4">
            Chiến dịch tình nguyện mùa hè Xanh lá
          </p>
          <div className="flex flex-row mt-2">
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
            <p className="ml-2 text-h3">Hồ Chí Minh</p>
          </div>
          <div className="bg-gray bg-opacity-20 px-4 rounded-lg mt-4">
            <span className="text-[32px] font-bold align-middle">210</span>
            <span className="ml-2 text-h3 align-middle">tham gia</span>
          </div>
        </div>
        <div className="relative h-full w-full lg:w-1/2">
          <div className="absolute top-0 right-0 bg-orange w-11/12 h-5/6 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 bg-orange bg-opacity-20 w-11/12 h-5/6 rounded-lg"></div>
          <div className="aspect-h-9 aspect-w-16 align-middle rounded-lg">
            {images.map((value, index) => (
              <img
                key={index}
                className="activity-image z-0 scale-100 m-auto w-11/12 h-5/6 rounded-lg object-center object-cover transition duration-700"
                src={value}
                alt="activity-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityBanner;
