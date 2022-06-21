import React from 'react';
import ProjectItem from './ProjectItem';
import eCom from "../public/assets/eCommerce.png";
import fight from "../public/assets/fightGame.png";
import expense from "../public/assets/Expense.png";
import jam from '../public/assets/instaJam.png';



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase py-2 text-2xl tracking-widest text-[#FE7F2D] border-b border-[#F5F3E0] w-[35%]'>Projects</p>
            <h2 className='py-4'>Some of the things I have built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title='E-commerce' backgroundImage={eCom} projectURL='/ecommerce'/>
              <ProjectItem title='Shogun Battle' backgroundImage={fight} projectURL='/fightgame'/>
              <ProjectItem title='instaJam' backgroundImage={jam} projectURL='/instajam' />
              <ProjectItem title='Expense tracker' backgroundImage={expense} projectURL='/expensetracker'/>
            </div>
        </div>
    </div>
  )
};

export default Projects;