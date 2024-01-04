// AboutMe.js

import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.scss';

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
const AboutMe = () => {
  const scrollToContact = () => {
    document.getElementById('Contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="about-me-page">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="about-me-container"
            >
            <div className='Abouttitle'>
                <h1>About Me</h1>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src="./Karabo.jpg"
                        alt="Karabo Maloka"
                        className="profile-image"
                    />
                </div>
                <div className='text-container'>
                    <p>
                    Recent graduate in Business Information Technology from the University of Johannesburg, passionate about 
                    leveraging technology for optimal business outcomes. Possess a unique blend of technical expertise and 
                    insights from my Diploma in Journalism and Media Studies from Damelin. Proven ability in UX Design, Mobile App development, 
                    event coordination, and adept at serving as an MC for hackathons.

                    </p>
                    <p>
                        My education has equipped me with a solid foundation in web and mobile app development, database management, 
                        digital business strategy, and business analytics. 
                        Additionally, my coursework in Journalism and Media Studies, complemented by proficiency in multimedia software 
                        such as Figma, Adobe Photoshop and InDesign, has honed my creativity and ability to produce engaging content.
                    </p>
                    <p>I am eager to contribute my skills and experience to a team that values cutting-edge 
                        solutions and shares a passion for making a meaningful difference.
                    </p>
                </div>
            </div>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants} onClick={scrollToContact} >
                  Contact Me
                </motion.button>              
              
              <a href="./KaraboMaloka_Resume.pdf" download="KaraboMaloka_Resume.pdf">
                <motion.button variants={textVariants} >
                    Download CV
                </motion.button>
              </a>
            </motion.div>
        </motion.div>
        

        
    </div>
    
  );
};

export default AboutMe;
