"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { lusitana } from "@/components/fonts";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="py-20 px-6 md:px-10 bg-[#20242D] min-h-screen flex items-center justify-center w-full"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#E9E6E5]">
            <MdWavingHand size={25} />
            <h1 className="text-2xl font-bold">Hello, I&apos;m</h1>
          </div>

          <h1
            className={`${lusitana.className} mt-2 text-3xl md:text-4xl font-bold text-[#02E5F2]`}
          >
            Muhammad Suleman
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-bold text-[#E9E6E5]">
            <span className={`${lusitana.className} text-[#02E5F2]`}>
              FrontEnd Developer
            </span>
          </h2>

          <p
            className={`${lusitana.className} hidden md:block py-4 text-[#9EA2A5] text-base md:text-lg`}
          >
            Frontend Developer skilled in HTML, CSS, and JavaScript, creating
            clean, responsive, and visually appealing interfaces with React and
            Next.js for a seamless user experience.
          </p>

          <div className="bg-[#02E5F2] w-full md:w-[240px] p-3 mt-4 text-lg rounded-md text-black mx-auto md:mx-0">
            <Link href={"https://github.com/MSulemanBhanbhro"} target="_blank">
              <button
                className={`${lusitana.className} flex items-center justify-center md:justify-start text-xl font-bold`}
                type="button"
              >
                Github Account
                <FaGithub size={25} />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto flex justify-center mb-6 md:mb-0">
          <Image
            src="/ms.png"
            width={400}
            height={300}
            alt="suleman"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


