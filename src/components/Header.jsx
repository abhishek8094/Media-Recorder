import React from "react";
import Logo from "../assets/Logo.webp";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full p-4 flex items-center justify-between ">
      <div className="w-10 ml-2">
        <img src={Logo} className="cursor-pointer" />
      </div>

      <div className=" mx-16 flex ">
        <a href="https://github.com/abhishek8094">
          <FaSquareGithub className="mx-4 text-2xl hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek8094/">
          <FaLinkedin className="mx-4 text-2xl hover:text-white" />
        </a>
        <a href="https://x.com/home">
          <FaSquareTwitter className="mx-4 text-2xl hover:text-white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
