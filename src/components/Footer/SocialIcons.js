import React from "react";
import { BsFacebook,BsGithub,BsLinkedin } from 'react-icons/bs';
import { FiInstagram,FiTwitter } from 'react-icons/fi';

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          
          <BsFacebook></BsFacebook>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FiInstagram></FiInstagram>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FiTwitter></FiTwitter>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsGithub></BsGithub>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsLinkedin></BsLinkedin>
        </span>
        
      
      
    </div>
  );
};

export default SocialIcons;