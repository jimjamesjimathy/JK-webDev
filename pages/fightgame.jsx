import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import fightImg from '../public/assets/fightGame.png';

const fightgame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 object-bottom"
          layout="fill"
          objectFit="cover"
          src={fightImg}
          alt="/"
        />
      </div>
      <div className="flex justify-evenly lg:flex-row md:flex-row sm:flex-col sm:items-center xs:flex-col xs:items-center xxs:flex-col xxs:items-center pt-8 mb-5">
        <div className="w-[60%] flex flex-col items-center text-center">
          <p className="uppercase py-2 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] sm:w-[50%] mb-2">
            Overview:
          </p>
          <p>
            A simple side scrolling fighting game created with HTML canvas and
            JavaScript. It allows two players to use keyboard controls to
            command the character of choice in a battle to find who is the
            better fighter. FINISH HIM!
          </p>
          <div>
            <a
              href="https://fight-mania.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-4 bg-[#F5F3E0] text-[#003049] hover:text-[#F5F3E0] hover:bg-[#009FF5] font-bold ease-in duration-200">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/jimjamesjimathy/fightMania"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#F5F3E0] text-[#003049] hover:text-[#F5F3E0] hover:bg-[#009FF5] font-bold ease-in duration-200">
                Code
              </button>
            </a>
            <div className="my-8 px-8 py-2 mt-4 bg-[#D64045] hover:bg-[#E6898C] rounded-xl ease-in duration-200 cursor-pointer">
              <Link
                className="text-lg underline mt-[-75px] font-bold"
                href="/#projects"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[15%] md:w-[35%] bg-[#F5F3E0] text-[#003049] font-bold shadow-md shadow-[#000] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center pb-2">Technologies:</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML canvas
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> javaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fightgame;