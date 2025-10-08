import hero1mobile from "../assets/images/mobile-image-hero-1.jpg";
import hero2mobile from "../assets/images/mobile-image-hero-2.jpg";
import hero3mobile from "../assets/images/mobile-image-hero-3.jpg";
import hero1desktop from "../assets/images/desktop-image-hero-1.jpg";
import hero2desktop from "../assets/images/desktop-image-hero-2.jpg";
import hero3desktop from "../assets/images/desktop-image-hero-3.jpg";
import leftArrow from "../assets/images/icon-angle-left.svg";
import rightArrow from "../assets/images/icon-angle-right.svg";

import { useState, type ButtonHTMLAttributes } from "react";

const sliderImages = [
  {
    mobile: hero1mobile,
    desktop: hero1desktop,
  },
  {
    mobile: hero2mobile,
    desktop: hero2desktop,
  },
  {
    mobile: hero3mobile,
    desktop: hero3desktop,
  },
];

function SliderButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="size-14 tablet:size-20 bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors"
    >
      {children}
    </button>
  );
}

function SliderControls({
  increment,
  decrement,
}: {
  increment: () => void;
  decrement: () => void;
}) {
  return (
    <div className="flex gap-0 absolute bottom-0 right-0 desktop:translate-x-[100%]">
      <SliderButton onClick={decrement} aria-label="Show previous picture">
        <img src={leftArrow} alt="arrow to left"></img>
      </SliderButton>
      <SliderButton onClick={increment} aria-label="Show next picture">
        <img src={rightArrow} alt="arrow to right"></img>
      </SliderButton>
    </div>
  );
}

export default function Slider() {
  const [page, setPage] = useState(0);
  const incrementPage = () => {
    if (page < sliderImages.length - 1) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage(0);
    }
  };
  const decrementPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    } else {
      setPage(sliderImages.length - 1);
    }
  };
  return (
    <section
      aria-label="Slider with examples"
      className="relative w-full desktop:max-w-[840px] desktop:min-w-[840px]"
    >
      <div className="relative w-full h-[360px] tablet:h-[400px] desktop:h-[534px] overflow-hidden">
        {sliderImages.map(({ mobile, desktop }, index) => {
          return (
            <picture key={index}>
              <source srcSet={mobile} media="(width <= 375px)"></source>
              <img
                src={desktop}
                alt=""
                role="presentation"
                className={`absolute top-0 left-0 w-full h-full transition-transform will-change-transform`}
                style={{
                  transform: `translateX(calc(${index - page} * 100%))`,
                }}
              ></img>
            </picture>
          );
        })}
      </div>
      <SliderControls
        increment={incrementPage}
        decrement={decrementPage}
      ></SliderControls>
    </section>
  );
}
