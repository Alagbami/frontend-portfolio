import React from 'react';
import {  BsInstagram } from 'react-icons/bs';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { FaBeer } from "react-icons/fa";



const SocialMedia = () => (

  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/abiodun-adeleke-37614323a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/adeleke.abiodun.549" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/i.am.alagbami/" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.w3profile.com/LekTech" target="_blank" rel="noopener noreferrer">
        <FaBeer />
      </a>
    </div>
  </div>
);
export default SocialMedia;