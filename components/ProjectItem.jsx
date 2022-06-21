import React from "react";
import Image from "next/image";
import eCom from "../public/assets/eCommerce.png";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImage, projectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#006AA3] to-[#0092E0]">
      <Image className="rounded-xl group-hover:opacity-10" src={backgroundImage} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">React.js</p>
        <Link href={projectURL}>
          <p className="text-center py-3 rounded-lg bg-white text-[#003552] text-lg cursor-pointer">
            more info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
