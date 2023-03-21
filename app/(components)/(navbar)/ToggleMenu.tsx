"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ToggleMenu = () => {
  const pathname = usePathname();
  const [openMenu, isOpen] = useState(false);
  return (
    <>
      <div
        className="fixed w-[64px] h-[64px] flex flex-col align-middle justify-center gap-3 cursor-pointer t-0 right-5 m-auto z-[999] lg:hidden"
        onClick={() => isOpen(!openMenu)}
      >
        <span
          className={
            openMenu
              ? "transition-all duration-300 relative mx-auto mr-0 w-[48px] h-[2px] bg-[#ff3a3a] rounded-sm rotate-45 translate-y-[14px]"
              : "transition-all duration-300 relative mx-auto mr-0 w-[48px] h-[2px] bg-[#d9d9d9] rounded-sm"
          }
        ></span>
        <span
          className={
            openMenu
              ? "transition-all duration-300 relative mx-auto mr-0 w-[48px] h-[2px] bg-[#d9d9d9] rounded-sm opacity-0 translate-x-[50px]"
              : "transition-all duration-300 relative mx-auto mr-0 w-[40px] h-[2px] bg-[#d9d9d9] rounded-sm"
          }
        ></span>
        <span
          className={
            openMenu
              ? "transition-all duration-300 relative mx-auto mr-0 w-[48px] h-[2px] bg-[#ff3a3a] rounded-sm -rotate-45 -translate-y-[14px]"
              : "transition-all duration-300 relative mx-auto mr-0 w-[45px] h-[2px] bg-[#d9d9d9] rounded-sm"
          }
        ></span>
      </div>

      <div
        className={`${
          openMenu
            ? "fixed grid grid-flow-row top-[64px] right-0 bg-[rgba(0,0,0,0.1)] w-[200px] text-center py-5 rounded-[24px] rounded-t-none h-[240px] overflow-hidden transition-all duration-300 z-[999] ease-in-out border-[1px] border-[rgba(255,255,255,0.1)] border-t-0 text-slate-100 font-black backdrop-blur-[10px] lg:hidden content-center gap-2"
            : "fixed grid grid-flow-row top-[64px] right-0 w-[200px] text-center py-0 rounded-[24px] rounded-t-none h-[0px] overflow-hidden transition-all duration-300 z-[999] ease-in-out lg:hidden content-center gap-2"
        }`}
      >
        <Link
          onClick={() => isOpen(!openMenu)}
          href={"/"}
          className={
            pathname == "/"
              ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold "
              : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
          }
        >
          Home
        </Link>
        <Link
          onClick={() => isOpen(!openMenu)}
          href={"/blog"}
          className={
            pathname == "/blog"
              ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
              : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
          }
        >
          Blog
        </Link>
        <Link
          onClick={() => isOpen(!openMenu)}
          href={"/services"}
          className={
            pathname == "/services"
              ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
              : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
          }
        >
          Services
        </Link>
        <Link
          onClick={() => isOpen(!openMenu)}
          href={"/courses"}
          className={
            pathname == "/courses"
              ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
              : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
          }
        >
          Courses
        </Link>
        <Link
          onClick={() => isOpen(!openMenu)}
          href={"/about"}
          className={
            pathname == "/about"
              ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
              : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
          }
        >
          About
        </Link>
      </div>
    </>
  );
};

export default ToggleMenu;
