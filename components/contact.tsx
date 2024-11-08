"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { lusitana } from "@/components/fonts";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-[#20242D] py-10 min-h-screen ">
        <h1 className={`${lusitana.className} text-center font-bold text-3xl md:text-4xl text-[#E9E6E5] mb-8`}>
          Contact <span className="font-bold text-2xl md:text-3xl text-[#02E5F2]">Me</span>
        </h1>
        
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
          {/* Email */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2 p-4 rounded-full text-gray-300">
              <MdEmail size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-gray-300" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>ms5901562@gmail.com</h2>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2  p-4 rounded-full text-gray-300">
              <IoCallSharp size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-gray-300" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>0342 - 0032995</h2>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2  p-4 rounded-full text-gray-300">
              <FaLocationDot size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-gray-300" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>Naveed Arcade Saddar Karachi</h2>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Social Links */}
          <div className="flex justify-center space-x-8 text-gray-300">
          <Link href={"https://www.facebook.com/profile.php?id=61553873587821&mibextid=ZbWKwL"} target="_blank">
              <div className="border-solid border-2 border-gray-300 p-3 rounded-full text-gray-300 hover:bg-[#323846] hover:text-white transition duration-300">
              <FaFacebook size={30} />
              </div>
            </Link>

            <Link href={"https://www.instagram.com/muhammadsuleman5526/profilecard/?igsh=a3ljYjIwdjRncml2"} target="_blank">
              <div className="border-solid border-2 border-gray-300 p-3 rounded-full text-gray-300 hover:bg-[#323846] hover:text-white transition duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>

            <Link href={"https://www.linkedin.com/in/muhammad-suleman-2b58b9260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
              <div className="border-solid border-2 border-gray-300 p-3 rounded-full text-gray-300 hover:bg-[#323846] hover:text-white transition duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
