import React, { useContext } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}

        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          {/* <img src={Logo} alt='' /> */}
          Home
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className="hidden xl:flex gap-x-12 font-semibold"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={"/about"}
            className="text-primary hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/scientificresearch"}
            className="text-primary hover:text-primary transition"
          >
            Scientific research
          </Link>
          <Link
            to={"/credits"}
            className="text-primary hover:text-primary transition"
          >
            Installation
          </Link>
        </nav>
      </div>
      {/* socials */}
      {/* <Socials /> */}
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
