"use client";
import React, { useState } from "react";
import Link from "next/link";

const ToggleMenu = () => {
  const [openMenu, isOpen] = useState(false);
  return (
    <>
      <div
        className="fixed w-[64px] h-[64px] flex flex-col align-middle justify-center gap-2 cursor-pointer t-0 right-5 m-auto z-[999] lg:hidden"
        onClick={() => isOpen(!openMenu)}
      >
        <span className="relative mx-auto w-[48px] h-[4px] bg-slate-50 rounded-sm"></span>
        <span className="relative mx-auto w-[40px] h-[4px] bg-slate-50 rounded-sm"></span>
        <span className="relative mx-auto w-[46px] h-[4px] bg-slate-50 rounded-sm"></span>
      </div>

      <div
        className={`${
          openMenu
            ? "fixed grid gap-5 grid-flow-row top-[64px] right-0 bg-[rgba(0,0,0,0.1)] w-[200px] text-center py-5 rounded-[24px] rounded-t-none h-[240px] overflow-hidden transition-all duration-300 z-[999] ease-in-out border-2 border-[rgba(255,255,255,0.1)] border-t-0 text-slate-100 font-black backdrop-blur-[10px] lg:hidden"
            : "fixed grid gap-5 grid-flow-row top-[64px] right-0 w-[200px] text-center py-0 rounded-[24px] rounded-t-none h-[0px] overflow-hidden transition-all duration-300 z-[999] ease-in-out lg:hidden"
        }`}
      >
        <Link onClick={() => isOpen(!openMenu)} href={"/"}>
          Home
        </Link>
        <Link onClick={() => isOpen(!openMenu)} href={"/blog"}>
          Blog
        </Link>
        <Link onClick={() => isOpen(!openMenu)} href={"/products"}>
          Products
        </Link>
        <Link onClick={() => isOpen(!openMenu)} href={"/courses"}>
          Courses
        </Link>
        <Link onClick={() => isOpen(!openMenu)} href={"/about"}>
          About
        </Link>
      </div>
    </>
  );
};

export default ToggleMenu;
