"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ss_logo from "../../../public/SS_LOGO.png";
import ToggleMenu from "./ToggleMenu";
import { usePathname } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed h-[64px] px-10 pl-5 flex items-center justify-between max-w-screen min-w-screen w-screen overflow-x-hidden backdrop-blur-[10px] z-[999] border-b-[1px] border-[rgba(255,255,255,0.1)] ">
        <Link href={"/"} className="text-xl font-black flex items-center">
          <Image
            width={48}
            height={48}
            src={ss_logo}
            alt={"syntax sage logo"}
            className={"inline-block"}
          />
          <span className="p-0 m-0 hidden md:inline-block ">- Syntax Sage</span>
        </Link>

        <div className="hidden lg:inline-grid grid-flow-col gap-5">
          <Link
            href={"/"}
            className={
              pathname == "/"
                ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
                : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
            }
          >
            Home
          </Link>
          <Link
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
            href={"/products"}
            className={
              pathname == "/products"
                ? "transition-all duration-300 bg-[rgba(255,255,255,0.1)] py-1 px-2 rounded font-bold"
                : "transition-all duration-300 bg-transparent py-1 px-2 font-bold text-gray-400 hover:text-[#eee] "
            }
          >
            Products
          </Link>
          <Link
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
      </nav>
      <ToggleMenu></ToggleMenu>
    </>
  );
}

export default Navbar;
