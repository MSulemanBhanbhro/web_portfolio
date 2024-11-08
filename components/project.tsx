import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { lusitana } from "@/components/fonts";

const Project = () => {
  return (
    <>
      <section id="project" className="bg-[#323846] py-10 min-h-screen">
        <h1 className={`${lusitana.className} text-center font-bold text-4xl text-[#E9E6E5] mb-8`}>
          My <span className={`${lusitana.className} font-bold text-3xl text-[#02E5F2]`}>Projects</span>
        </h1>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mx-6 md:mx-20">
          {/* Project Card 1 */}
          <div className="bg-[#20242D] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/resume.png"}
              width={430}
              height={454}
              alt="static resume"
              className="rounded-md"
            />
            <h1 className={`${lusitana.className} text-3xl mt-4 text-[#777A80] text-center`}>
              Static Resume Builder
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link href="https://resumeproject01bymsuleman.vercel.app/" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-blue-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link href="https://github.com/MSulemanBhanbhro/resumeproject" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-gray-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-[#20242D] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/clone.png"}
              width={430}
              height={454}
              alt="dynamic resume"
              className="rounded-md"
            />
            <h1 className={`${lusitana.className} text-3xl mt-4 text-[#777A80] text-center`}>
              Giaic Clone
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link href="https://giaic-clone-suleman.vercel.app/" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-blue-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link href="https://github.com/MSulemanBhanbhro/Giaic" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-gray-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-[#20242D] rounded-md max-w-[430px] w-full p-4">
            <Image
              src={"/acme.png"}
              width={430}
              height={454}
              alt="GIAIC Clone"
              className="rounded-md"
            />
            <h1 className={`${lusitana.className} text-3xl mt-4 text-[#777A80] text-center`}>
              NextJs Dashboard
            </h1>
            <div className="mt-4 flex justify-between">
              {/* Button for visiting the site */}
              <Link href="https://nextjs-dashboard-by-msuleman.vercel.app/" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-blue-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>Visit Site</span> <RiGlobalFill />
                </button>
              </Link>

              {/* Button for GitHub link */}
              <Link href="https://github.com/MSulemanBhanbhro/nextjs-dashboard" target="_blank">
                <button
                  type="button"
                  className={`${lusitana.className} text-lg bg-gray-300 rounded-md px-4 py-2 shadow-2xl font-bold flex items-center space-x-2`}
                >
                  <span>GitHub</span> <FaGithub />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
