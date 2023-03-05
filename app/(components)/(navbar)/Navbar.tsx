import Link from "next/link";
import React from "react";
import Image from "next/image";
import ss_logo from "../../../public/SS_LOGO.png";
import ToggleMenu from "./ToggleMenu";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <nav className="fixed h-[64px] px-10 pl-5 flex items-center justify-between max-w-screen min-w-screen w-screen overflow-x-hidden backdrop-blur-[15px] z-[999] border-b-2 border-[rgba(255,255,255,0.1)] text-slate-100">
        <Link href={"/"} className="text-xl font-black flex items-center">
          <Image
            width={48}
            height={48}
            src={ss_logo}
            alt={"syntax sage logo"}
            className={"inline-block"}
          />
          <span className="p-0 m-0 hidden md:inline-block text-slate-100">
            - Syntax Sage
          </span>
        </Link>

        <div className="hidden lg:inline-grid grid-flow-col gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/products"}>Products</Link>
          <Link href={"/courses"}>Courses</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </nav>
      <ToggleMenu></ToggleMenu>
    </>
  );
}

export default Navbar;
