import IconArrow from "../assets/images/icon-arrow.svg?react";
export default function ShoppingInvite() {
  return (
    <section
      aria-label="Explanation of what we provide"
      className="bg-white p-16 px-[32.5px] tablet:px-16 desktop:p-[100px] desktop:py-[139px] desktop:pt-[123px] desktop:min-w-[600px] col-end-[-1] space-y-8 tablet:space-y-6"
    >
      <div className="space-y-4 text-black">
        <h1 className="text-preset-2 tablet:text-preset-1">
          Discover innovative ways to decorate
        </h1>
        <p className="text-preset-3-medium text-gray-500">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
      </div>
      <button
        type="button"
        className="text-preset-4 flex justify-between items-baseline text-black w-full hover:text-gray-500 cursor-pointer desktop:justify-start desktop:gap-8"
      >
        SHOP NOW
        <IconArrow
          role="presentation"
          className="fill-current h-3 w-[53.62px] tablet:w-[40px]"
        ></IconArrow>
      </button>
    </section>
  );
}
