import React from 'react';
import Image from 'next/image';
import skills from '../data';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 '>
      <div className='max-w-[1240px] h-full mx-auto flex flex-col justify-center'>
        <p className='uppercase py-2 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] w-[30%]'>
          Skills & Languages 
        </p>
        <h2 className='py-4'>Some of the languages and tools I work with</h2>
        <div className='grid grid-cols-3 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
          skills.map((skill) => (
            <div key={skill.id} className='p-6 hover:scale-105 ease-in duration-300 bg-[#F5F3E0] rounded-xl'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <img
                  src={skill.img}
                  width='75px'
                  height='75px'
                />
              </div>
              <div className='flex flex-col itesm-center justify-center'>
                <h3 className='text-[#003049]'>{skill.title}</h3>
              </div>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;