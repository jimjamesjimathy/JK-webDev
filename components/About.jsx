import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="relative w-full sm:h-screen sm:justify-center sm:mt-[-250px] md:mt-0 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 flex flex-col justify-center text-center sm:items-center">
          <p className="uppercase py-2 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] sm:w-[50%]">
            About
          </p>
          <h2 className="py-4">get to know me</h2>
          <p className="text-xl sm:p-6">
            I am a born and raised Texan who got tired of the heat and moved up
            north. Outside of coding I like to keep busy. I play 5 instruments,
            write, record and produce my own music. I am obsessed with the game
            of Hockey and just recently started playing a little bit. I spend
            the majority of my time at my computer as I got into coding just
            over a year ago and I can't seem to get enough of it. I recently
            graduated from <a href="/">Bloom</a> institute of technology as a
            Full Stack Engineer and I cannot wait to see where this takes me!
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <img
            className="z-10 rounded-xl xxs:hidden xs:hidden sm:hidden md:block"
            src="https://i.ibb.co/HXwTZsR/coding.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;