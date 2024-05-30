import React from "react";
import Logo from "../assets/Logo.webp";

const Header = () => {
  return (
    <div className="w-full p-4 bg-[#00ffae] border-b-4 flex items-center justify-between ">
      <div className="w-8">
        <img src={Logo} className="cursor-pointer" />
      </div>

      <div className=" mx-16 ">
        <a href="https://github.com/abhishek8094" className="mx-4 text-lg hover:text-white">
          Github
        </a>
        <a href="https://www.linkedin.com/in/abhishek8094/" className="mx-4 text-lg hover:text-white">Linkedin</a>
        <a href="https://x.com/home" className="mx-4 text-lg hover:text-white">Twitter</a>
      </div>
    </div>
  );
};

export default Header;
