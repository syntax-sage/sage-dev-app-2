import React from "react";
import Particles from "./(components)/particles";
import { HiChevronDoubleUp } from "react-icons/hi";

type Props = {};

function page({}: Props) {
  return (
    <>
      <section className="fixed w-screen min-w-screen max-w-screen h-screen min-hscreen max-h-screen top-0 pt-[64px] bg-gradient-to-b from-[#061434] to-transparent bg-auto">
        <Particles></Particles>
      </section>
      <main className="absolute w-screen min-w-screen max-w-screen h-screen min-h-screen top-[100vh] z-50 -translate-y-[100px] bg-inherit">
        <span
          className="absolute h-[50px] w-[50px] backdrop-blur-[10px] rounded-full mx-auto right-0 left-0 -translate-y-[125px] border-[1px] border-[rgba(255,255,255,0.1)] z-[51] grid items-center place-content-center"
          style={{ boxShadow: "0 -4px 5px rgba(0,0,0,0.3)" }}
        >
          <HiChevronDoubleUp className="p-0 m-0 text-4xl" />
        </span>
        <div
          className="backdrop-blur-[10px] w-full h-[100px] rounded-t-[24px] border-t-[1px] border-[rgba(255,255,255,0.1)] -translate-y-[100px] grid content-center "
          style={{ boxShadow: "0 -4px 5px rgba(0,0,0,0.3)" }}
        >
          <h1 className="md:text-[32px] text-xl font-black text-center uppercase drop-shadow-2xl">
            Discover the universe of code
          </h1>
        </div>
      </main>
    </>
  );
}

export default page;
