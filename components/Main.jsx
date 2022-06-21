import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-xl tracking-widest border-b border-[#FEFAE0] py-4 max-w-[50%] m-auto text-[#FCBF49]">
            Lets create something together!
          </p>
          <h1 className="py-4">
            Howdy, I&apos;m <span className="text-[#D62828]">James</span>
          </h1>
          <h1>I am a Full Stack Developer</h1>
          <p className="py-4 max-w-[70%] m-auto text-lg">
            I love to create all types of websites and applications for a
            variety of different clients. From personal pages to businesses
            websites, I just love to code!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
              <a
                href="mailto:jamesalanmikal@gmail.com"
              >
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
  );
};

export default Main;
