import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const scrollToContact = () => {
    document.getElementById('Portfolio').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Tech Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button onClick={scrollToContact}>See Portfolio</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development Skills</h2>
          <p>
            Proficiency in HTML, CSS, React Native, and Ionic. I specialize in 
            creating user-centric interfaces and employing various frameworks to 
            ensure seamless user experiences.   
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>User Experience (UX) Design Skills</h2>
          <p>
            Equipped in User Research methodologies, usability testing, feedback implementation,
            data analysis, and design decision-making with proficiency in prototyping 
            such as Figma.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Multimedia and Design Skills</h2>
          <p>
            Mastery in multimedia software such as Adobe Photoshop, InDesign, and Premiere Pro.
            Ability to create visually appealing posters, flyers & videos using 
            Canva and Adobe Creative Suite.
          </p>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business Analytic Skills</h2>
          <p>
            Proficiency in business analysis tools and techniques, including SWOT analysis, 
            process flow diagrams, and data modeling with strong analytical and problem-solving skills.
          </p>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;