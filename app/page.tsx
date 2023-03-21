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
import Earth from "./(components)/earth";
type Props = {};

function page({}: Props) {
  return (
    <>
      <section className="fixed w-screen min-w-screen max-w-screen h-screen min-hscreen max-h-screen top-0 pt-[64px] bg-gradient-to-b to-[#0f0c29] via-[#302b63]  from-[#0f0c29] bg-auto">
        <span className="ml-5 mt-5 opacity-25 fixed z-30 bg-transparent t-20">
          &quot;EARTH&quot;
          <Link href="https://skfb.ly/6DxnV">
            &#xff08;https://skfb.ly/6DxnV&#xff09;
          </Link>
          by <b> Stéphane Agullo</b> is licensed under Creative Commons
          Attribution
          <Link href="http://creativecommons.org/licenses/by/4.0/">
            &#xff08;http://creativecommons.org/licenses/by/4.0/&#xff09;
          </Link>
        </span>
        <Particles></Particles>
        <Earth></Earth>
      </section>
      <main className="main-section absolute w-screen min-w-screen max-w-screen h-screen min-h-screen top-[100vh] z-50 -translate-y-[100px] bg-inherit">
        <Scrollupbtn></Scrollupbtn>
        <div className="absolute backdrop-blur-[10px] w-full h-[100px] rounded-t-[24px] border-t-[1px] border-[rgba(255,255,255,0.1)] -translate-y-[100px] grid content-center ">
          <h1 className="md:text-[32px] text-3xl font-black text-center uppercase mt-2">
            Discover the world of code
          </h1>
        </div>
        <div className="text-center mt-10">
          <h2 className="md:text-[32px] text-3xl uppercase">
            Join The Community:
          </h2>
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
        <section
          id="main-section"
          className="pt-10 w-full max-w-[1024px] pr-5 pl-5 text-center"
        >
          <h1 className="text-3xl md:text-[32px] font-bold">
            A.I. Powered Services
          </h1>
          <p className="w-[320px] max-w-[1024px] md:w-full m-auto mt-5">
            Discover A.I. powered services that will revolutionize your
            business.
          </p>
        </section>
      </main>
    </>
  );
}

export default page;
