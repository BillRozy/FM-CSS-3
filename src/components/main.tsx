import Slider from "./slider";
import ShoppingInvite from "./shopping-invite";
import About from "./about";
import aboutImg from "../assets/images/image-about-dark.jpg";
import aboutImgDesktop from "../assets/images/image-about-dark-desktop.jpg";

import aboutImgLight from "../assets/images/image-about-light.jpg";
import aboutImgLightDesktop from "../assets/images/image-about-light-desktop.jpg";

export default function Main() {
  return (
    <main>
      <div className="tablet:grid laptop:grid-cols-2 desktop:grid-cols-[minmax(840px,840px)_minmax(600px,2fr)]">
        <Slider></Slider>
        <ShoppingInvite></ShoppingInvite>
      </div>
      <section className="laptop:flex desktop:h-[266px] laptop:h-auto laptop:flex-wrap desktop:flex-nowrap bg-white">
        <picture>
          <source srcSet={aboutImg} media="(width <= 420px)"></source>
          <source srcSet={aboutImg} media="(width >= 1024px)"></source>
          <img
            src={aboutImgDesktop}
            alt=""
            role="presentation"
            className="w-full laptop:w-auto tablet:max-h-[300px] object-cover shrink-0 grow-1 desktop:max-w-[420px] basis-[420px]"
          ></img>
        </picture>
        <div className="grow-1 shrink-1 laptop:max-h-[266px] overflow-hidden laptop:-order-1 desktop:order-none laptop:max-w-[calc(100%-420px)] desktop:max-w-none">
          <About></About>
        </div>
        <picture>
          <source srcSet={aboutImgLight} media="(width <= 420px)"></source>
          <source srcSet={aboutImgLight} media="(width >= 1440px)"></source>
          <img
            src={aboutImgLightDesktop}
            alt=""
            role="presentation"
            className="w-full laptop:w-auto tablet:max-h-[243px] desktop:max-h-max object-cover shrink-0 grow-1 desktop:max-w-[440px]"
          ></img>
        </picture>
      </section>
    </main>
  );
}
