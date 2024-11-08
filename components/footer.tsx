import React from 'react'
import { lusitana } from "@/components/fonts";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#323846] py-4 md:py-6 text-center">
        <h1 className={`${lusitana.className} text-white text-lg md:text-2xl`}>
          M Suleman &copy; {new Date().getFullYear()}
        </h1>
      </footer>
    </>
  );
}

export default Footer;
