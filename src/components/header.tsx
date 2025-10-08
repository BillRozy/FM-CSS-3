import React, { useState } from "react";
import burger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import logo from "../assets/images/logo.svg";

function MenuButton({
  isActive,
  setActive,
}: {
  isActive: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      aria-label={isActive ? "Close Menu" : "Open Menu"}
      onClick={() => setActive(!isActive)}
    >
      {isActive ? (
        <img src={close} alt="Close Icon" className="w-[15.5px] h-[15.5px]" />
      ) : (
        <img src={burger} alt="Hamburger Icon" className="w-[20px] h-[14px]" />
      )}
    </button>
  );
}
function Logo() {
  return <img src={logo} alt="Logo" className="w-auto h-[13px]" />;
}
function Menu() {
  const links = ["home", "shop", "about", "contact"];
  return (
    <nav aria-label="Primary navigation menu">
      <ul className="flex gap-8 text-preset-3-semibold">
        {links.map((link) => (
          <li
            key={link}
            className="relative flex after:opacity-0 hover:after:opacity-100 after:absolute after:left-1/2 after:bottom-0 after:translate-y-[6px] after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-white"
          >
            <a href={`#${link.toLowerCase()}`} className="align-bottom">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`absolute top-0 left-0 w-full px-6 py-12 desktop:p-16 max-h-[110px] bg-white/0 transition-colors ${
        menuOpen && "bg-white/100 laptop:bg-white/0"
      }`}
    >
      <div className="relative size-full flex gap-14 justify-between laptop:justify-start items-baseline">
        <div className="flex items-center laptop:hidden [align-self:center]">
          <MenuButton isActive={menuOpen} setActive={setMenuOpen} />
        </div>
        <div
          className={`absolute left-1/2 top-1/2 -translate-1/2 laptop:static laptop:translate-0 [align-self:normal] ${
            menuOpen ? "hidden laptop:block" : ""
          }`}
        >
          <Logo />
        </div>
        <div
          className={`block text-black laptop:text-white ${
            !menuOpen ? "hidden laptop:block" : ""
          }`}
        >
          <Menu />
        </div>
      </div>
    </header>
  );
}
