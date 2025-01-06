import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="flex mx-auto max-w-[1280px] bg-[#27272a] h-[100px] p-[48px] justify-between items-center absolute left-[100px] top-[10px] md:top-[20px] rounded-[66px] sticky z-[3000]"
      style={{
        borderRadius: "66px",
        background: `url(<path-to-image>) lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0) 100%)`,
        backdropFilter: "blur(25px)",
      }}
    >
      {/* Left side with logo and user name */}
      <div className="flex items-center gap-[10px] md:gap-[16px] w-[50%] md:w-[15%]">
        <Image
          className="w-[60px] h-[60px] rounded-[99px]"
          width={100}
          height={100}
          src={"/images/individual.png"}
          alt={"gradient"}
          priority
        />
        <span className="text-[#FFF] text-[16px] md:text-[20px] font-[400] w-full">Hello User</span>
      </div>

      {/* Right side menu and button */}
      <div className="flex items-center gap-[32px] hidden md:flex">
        <h1 className="text-[#FFF] font-[400] text-[16px]">About Me</h1>
        <h1 className="text-[#FFF] font-[400] text-[16px]">Projects</h1>
        <button className="w-[169px] h-[40px] p-[8px] justify-center items-center gap-[10px] rounded-[20px] bg-[#D7610D]">
          Contact Me
        </button>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#FFF]">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
    { /* Mobile menu */ }
    {isMenuOpen && (
      <div
        className="flex flex-col items-center gap-[20px] mt-4 md:hidden w-full bg-[#000] p-[16px] rounded-[20px]"
        style={{
          borderRadius: "66px",
          background: `url(<path-to-image>) lightgray 0% 0% / 100px 100px repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0) 100%)`,
          backdropFilter: "blur(25px)",
        }}
      >
        <h1 className="text-[#FFF] text-[14px]">About Me</h1>
        <h1 className="text-[#FFF] text-[14px]">Projects</h1>
        <button className="w-[149px] h-[40px] p-[8px] justify-center items-center gap-[10px] rounded-[20px] bg-[#D7610D]">
          Contact Me
        </button>
      </div>
    )}

    </div>


  );
}
