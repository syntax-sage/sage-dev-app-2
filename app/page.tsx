import React from "react";
import Particles from "./(components)/particles";
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
import Scrollupbtn from "./(components)/scrollupbtn";

type Props = {};

function page({}: Props) {
  return (
    <>
      <section className="fixed w-screen min-w-screen max-w-screen h-screen min-hscreen max-h-screen top-0 pt-[64px] bg-gradient-to-b to-[#0f0c29] via-[#302b63]  from-[#0f0c29] bg-auto">
        <Particles></Particles>
      </section>
      <main className="main-section absolute w-screen min-w-screen max-w-screen h-screen min-h-screen top-[100vh] z-50 -translate-y-[100px] bg-inherit">
        <Scrollupbtn></Scrollupbtn>
        <div className="absolute backdrop-blur-[10px] w-full h-[100px] rounded-t-[24px] border-t-[1px] border-[rgba(255,255,255,0.1)] -translate-y-[100px] grid content-center ">
          <h1 className="md:text-[32px] text-xl font-black text-center uppercase mt-2">
            Discover the universe of code
          </h1>
        </div>
        <div className="text-center mt-5">
          <h2 className="text-[32px] font-medium">Join The Community:</h2>
          <ul className="flex flex-row justify-center text-[32px] mt-2 gap-5">
            <li className="hover:text-[rgb(29,155,240)] transition-all duration-300">
              <Link href={"https://twitter.com/syntax_sage"}>
                <BsTwitter></BsTwitter>
              </Link>
            </li>
            <li className="hover:text-[#0A66C2] transition-all duration-300">
              <Link href={"https://www.linkedin.com/in/syntax-sage-5b0536265/"}>
                <BsLinkedin></BsLinkedin>
              </Link>
            </li>
            <li className="hover:text-[rgb(245,133,41)] transition-all duration-300">
              <Link href={"https://www.instagram.com/syntax.sage/"}>
                <AiFillInstagram></AiFillInstagram>
              </Link>
            </li>
            <li className="hover:text-[hsl(0,0%,0%)] transition-all duration-300">
              <Link href={"https://github.com/syntax-sage"}>
                <BsGithub></BsGithub>
              </Link>
            </li>
            <li className="hover:text-[hsl(0,100%,50%)] transition-all duration-300">
              <Link href={"https://www.youtube.com/channel/@syntax_sage"}>
                <BsYoutube></BsYoutube>
              </Link>
            </li>
            <li className="hover:text-[#FE2C55] transition-all duration-300">
              <Link href={"https://www.tiktok.com/@syntax_sage?lang=en"}>
                <FaTiktok></FaTiktok>
              </Link>
            </li>
            <li className="hover:text-[#5865F2] transition-all duration-300">
              <Link href={"https://www.discord.gg/BRpSNDZhFG"}>
                <BsDiscord></BsDiscord>
              </Link>
            </li>
          </ul>
        </div>
        <section id="main-section">
          <h1>Discover the products that will change your business forever</h1>
        </section>
      </main>
    </>
  );
}

export default page;
