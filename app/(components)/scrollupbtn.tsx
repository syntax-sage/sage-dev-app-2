"use client";
import { HiChevronDoubleUp } from "react-icons/hi";
import React, { useState } from "react";

const scrollupbtn = () => {
  const [scrollDown, setScrollDown] = useState(0);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 400) {
  //         setShowTopBtn(true);
  //       } else {
  //         setShowTopBtn(false);
  //       }
  //     });
  //   }, []);

  const ScrollDown = () => {
    let wh = window.innerHeight;
    window.scrollTo({
      top: wh,
      behavior: "smooth",
    });
    console.log(wh);
  };

  return (
    <span
      onClick={ScrollDown}
      className="absolute h-[50px] w-[50px] backdrop-blur-[10px] rounded-full mx-auto right-0 left-0 -translate-y-[125px] border-[1px] border-[rgba(255,255,255,0.1)] z-[51] grid items-center place-content-center cursor-pointer"
    >
      <HiChevronDoubleUp className="p-0 m-0 text-4xl" />
    </span>
  );
};

export default scrollupbtn;
