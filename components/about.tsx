import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { lusitana } from "@/components/fonts";

const About = () => {
    return (
        <>
            <section className="bg-[#323846] py-8 md:py-12" id="about">
                <h1 className={`${lusitana.className} text-center text-3xl md:text-4xl font-bold text-[#E9E6E5] mb-6`}>
                    About <span className={`${lusitana.className} text-[#02E5F2]`}>Me</span>
                </h1>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-8">
                    <div className="flex justify-center items-center">
                        <Image src="/ms1.png" width={300} height={300} alt="Suleman" className="rounded-full md:rounded-none" />
                    </div>
                    
                    <div className="max-w-lg text-center md:text-left px-4">
                        <div className="text-[#02E5F2] inline-block mb-4">
                        <FaQuoteLeft size={24}  />
                        </div>
                        
                        <p className={`${lusitana.className} text-lg md:text-xl font-semibold text-[#E9E6E5]`}>
                        As a skilled and dedicated Frontend Developer, 
                        I bring a strong blend of creativity, technical 
                        expertise, and a deep understanding of 
                        modern web design principles. 
                        With hands-on experience in building responsive 
                        and user-centric applications, I am proficient in 
                        HTML, CSS, and JavaScript, along with a deep 
                        focus on frameworks like React and Next.js.
                        </p>
                        <div className="text-[#02E5F2] inline-block mt-4">
                        <FaQuoteRight size={24} />
                        </div>
                        
                    </div>
                </div>
                
                <div className="px-6 md:px-20 lg:px-40 mt-8">
                    <h2 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-[#02E5F2]`}>Education :</h2>
                    <div className="w-20 h-1 bg-[#20242D] mb-6"></div>
                    
                    <ul className="space-y-6 tracking-wider text-[#E9E6E0]">
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Mar 2017 - June 2019</p>
                            <h3 className="text-lg md:text-xl font-bold text-white">Intermediate, Pre - Engineering</h3>
                            <p className="text-sm md:text-base">Government Boys Degree College Umerkot</p>
                        </li>
                        
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Sep 2019 - Dec 2023</p>
                            <h3 className="text-lg md:text-xl font-bold text-white">BSc Economics</h3>
                            <p className="text-sm md:text-base">University Of Sindh Jamshoro</p>
                        </li>
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Feb 2023 - Aug 2023</p>
                            <h3 className="text-lg md:text-xl font-bold text-white">Web Development</h3>
                            <p className="text-sm md:text-base">Institute Of Imagine Tech</p>
                        </li>
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Feb 2024 - Present</p>
                            <h3 className="text-lg md:text-xl font-bold text-white">Web 3, AI, & Metaverse</h3>
                            <p className="text-sm md:text-base">Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default About;
