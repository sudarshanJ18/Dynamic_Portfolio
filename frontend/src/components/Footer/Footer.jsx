import React from 'react'
import "./Footer.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {BsGithub, BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"; 


const Footer = () => {
  return <div className="footer">
    <div>
        <Typography variant="h5"> ABOUT ME</Typography>
        <Typography>
        Welcome to my portfolio! I'm Jalla Sudarshan Reddy,
         a passionate undergraduate student pursuing a Bachelor's in
         <b> Computer Science and Engineering </b> with a focus on
         <b> Full-Stack Development </b> at <u>Lovely Professional University</u>.
          With a keen interest in both front-end and back-end technologies, 
          I thrive on crafting seamless and user-friendly digital experiences.
           Through my projects and experiences, I aim to blend creativity 
           with functionality to build innovative solutions that make a difference. 
           Explore my work and let's embark on a journey of innovation together!
        </Typography>
        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Me</Typography>
        </Link>
    </div>
    <div>
        <Typography variant="h6">Technical Aspects</Typography>
        <a href='https://github.com/sudarshanJ18' target='black'>
            <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/j-sudharshan-reddy/' target='black'>
            <BsLinkedin />
        </a>
        <a href='https://www.facebook.com/sudharshanreddy.sudharshanreddy.92/' target='black'>
            <BsFacebook />
        </a>
        <a href='https://www.instagram.com/sudarshan_reddy___/' target='black'>
            <BsInstagram />
        </a>
        <a href='https://twitter.com/JSudarshan0' target='black'>
            <BsTwitter />
        </a>

    </div>
  </div>
    
  
}

export default Footer
