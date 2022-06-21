import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-md bg-[#003049] z-20"
          : "fixed w-full h-20 bg-[#003049] z-20"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="bg-[#003049]">
          <Link href="/#home">
            <Image
              src="/../public/assets/p-logo.png"
              alt="/"
              width="55"
              height="55"
            />
          </Link>
        </div>
        {/* Full page menu */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      {/* Hamburger menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] xxs:w-[100%] sm:w-[60%] md:w-[45%] h-screen bg-[#00507A] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#00507A] p-10 ease-in duration-500"
          }
        >
          {/* MOBILE NAVBAR */}
          <div className="flex flex-wrap items-center border-b border-[#F5F3E0] xxs:justify-center">
            <div className="flex-1 w-full items-center justify-between xxs:hidden xs:block">
              <Link href="/#home">
                <Image
                  src="/../public/assets/nav-logo.png"
                  alt="/"
                  width="200"
                  height="200"
                />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full p-3 cursor-pointer border xxs:m-5"
            >
              <AiOutlineClose size={20} />
            </div>
            <p className="text-center tracking-widest text-lg w-[100%] text-[#FCBF49] xxs:hidden">
              Let&apos;s create something together!
            </p>
          </div>

          <div className="py-4 flex flex-col text-center items-center">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-3xl">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-3xl">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-3xl">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-3xl">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-3xl">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-5 flex flex-wrap justify-center">
              <p className="uppercase tracking-widest text-xl text-[#FCBF49] border-b w-full py-6">
                Let&apos;s chat!
              </p>
              <div className="flex items-center justify-between my-4 py-4 w-full sm:w-[80%]">
                <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#5DA9E9]">
                  <a
                    href="https://www.linkedin.com/in/jimjamesjimathy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={55} />
                  </a>
                </div>
                <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#000]">
                  <a
                    href="https://github.com/jimjamesjimathy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={55} />
                  </a>
                </div>
                <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#D62828]">
                  <a href="mailto:jamesalanmikal@gmail.com">
                    <AiOutlineMail size={55} />
                  </a>
                </div>
                <div className="rounded-full cursor-pointer hover:scale-150 ease-in duration-200 text-[#329F5B]">
                  <a
                    href="https://docs.google.com/document/d/1MkLXcZHILtbDueB12UcxNuuZ8e6u8SkRx-UiDRwiZRI/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFillPersonLinesFill size={55} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
