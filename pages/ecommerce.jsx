import React from 'react';
import Image from 'next/image';
import eCom from '../public/assets/eCommerce.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ecommerce = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 object-top"
          layout="fill"
          objectFit="cover"
          src={eCom}
          alt="/"
        />
      </div>
      <div className="flex justify-evenly lg:flex-row md:flex-row sm:flex-col sm:items-center xs:flex-col xs:items-center xxs:flex-col xxs:items-center pt-8 mb-5">
        <div className="w-[60%] flex flex-col items-center text-center">
          <p className="uppercase py-2 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] sm:w-[50%] mb-2">
            Overview:
          </p>
          <p>
            Front end Ecommerce application for any type of product that the
            user/client chooses to sell. The backend of this application is
            connected seperately but allows users who visit the site to register
            their own username and password to save searches and also recieve
            special offers.
          </p>
          <div>
            <a
              href="https://e-commerce-zeta-lake.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-4 bg-[#F5F3E0] text-[#003049] hover:text-[#F5F3E0] hover:bg-[#009FF5] font-bold ease-in duration-200">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/jimjamesjimathy/eCommerce"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 bg-[#F5F3E0] text-[#003049] hover:text-[#F5F3E0] hover:bg-[#009FF5] font-bold ease-in duration-200">
                Code
              </button>
            </a>
            <Link
              className="text-lg underline font-bold"
              href="/#projects"
              rel="noreferrer"
            >
              <div className="p-1 my-8 bg-[#D64045] hover:bg-[#E6898C] rounded-xl ease-in duration-200 cursor-pointer">
                Back
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-[15%] md:w-[35%] bg-[#F5F3E0] text-[#003049] font-bold shadow-md shadow-[#000] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center pb-2">Technologies:</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> javaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scss
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ecommerce;