import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <main className="relative w-screen min-w-screen max-w-screen h-screen min-hscreen max-h-screen bg-gradient-to-b from-[#000] to-[transparent] top-0 pt-[64px]">
        <h1 className="text-lg font-bold text-red-500">
          This is the BLOG page
        </h1>
      </main>
    </>
  );
}

export default page;
