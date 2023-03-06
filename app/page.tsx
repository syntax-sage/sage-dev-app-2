import React from "react";
import Particles from "./(components)/particles";
import { HiChevronDoubleUp } from "react-icons/hi";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsDiscord,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import Link from "next/link";

type Props = {};

function page({}: Props) {
  return (
    <>
      <section className="fixed w-screen min-w-screen max-w-screen h-screen min-hscreen max-h-screen top-0 pt-[64px] bg-gradient-to-b to-[#000000] via-[hsl(268,100%,10%)] from-[hsl(249,100%,10%)] bg-auto">
        <Particles></Particles>
      </section>
      <main className="absolute w-screen min-w-screen max-w-screen h-screen min-h-screen top-[100vh] z-50 -translate-y-[100px] bg-inherit">
        <span className="absolute h-[50px] w-[50px] backdrop-blur-[10px] rounded-full mx-auto right-0 left-0 -translate-y-[125px] border-[1px] border-[rgba(255,255,255,0.1)] z-[51] grid items-center place-content-center">
          <HiChevronDoubleUp className="p-0 m-0 text-4xl" />
        </span>
        <div className="absolute backdrop-blur-[10px] w-full h-[100px] rounded-t-[24px] border-t-[1px] border-[rgba(255,255,255,0.1)] -translate-y-[100px] grid content-center ">
          <h1 className="md:text-[32px] text-xl font-black text-center uppercase mt-2">
            Discover the universe of code
          </h1>
        </div>
        <div className="text-center mt-5">
          <h2 className="text-[32px] font-medium">Join our community:</h2>
          <ul className="flex flex-row justify-center text-[32px] mt-2 gap-5">
            <li>
              <Link href={"https://twitter.com/syntax_sage"}>
                <BsTwitter></BsTwitter>
              </Link>
            </li>
            <li>
              <Link href={"https://www.linkedin.com/in/syntax-sage-5b0536265/"}>
                <BsLinkedin></BsLinkedin>
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/syntax.sage/"}>
                <AiFillInstagram></AiFillInstagram>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/syntax-sage"}>
                <BsGithub></BsGithub>
              </Link>
            </li>
            <li>
              <Link href={"https://www.youtube.com/channel/@syntax_sage"}>
                <BsYoutube></BsYoutube>
              </Link>
            </li>
            <li>
              <Link href={"https://www.tiktok.com/@syntax_sage?lang=en"}>
                <FaTiktok></FaTiktok>
              </Link>
            </li>
            <li>
              <Link href={"https://www.discord.gg/BRpSNDZhFG"}>
                <BsDiscord></BsDiscord>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default page;
