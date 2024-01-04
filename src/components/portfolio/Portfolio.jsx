import { useState, useRef } from 'react';
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Sync Vibes App",
    job: "(Project Manager and Front-end Developer)",
    img: "./colour-logo.png",
    desc: "This react app provides a centralized platform for event organizers to seamlessly promote their events, manage attendees, and gather actionable insights. For attendees, Sync Vibes offers a user-friendly interface to discover, register, and engage with tech-related events, fostering a vibrant community and facilitating meaningful connections with industry professionals. ",
  },
  {
    id: 2,
    title: "MASS Platform",
    job: "(Project and Product Manager)",
    img: "./LoginAdmin.png",
    desc: "Master Assessment Scheduling System (MASS) is a web-based platform to simplify the process of scheduling student module assessments, prevent conflicts, and improve student preparation and performance. This group project was achieved by the joined efforts of the UJ Technopreneurship Centre and the Applied Information Systems Department at the University of Johannesburg.",
  },
  {
    id: 3,
    title: "UJ Incident Reporting Platform",
    job: "(UX Designer and User Tester)",
    img: "./gbvplatform.png",
    desc: "This platform is an initiative to address and combat instances of bullying, harassment, rape, and other forms of gender-based violence within the university community. It's used to prioritize the safety and confidentiality of students by allowing them to report incidents anonymously.",
  },
  {
    id: 4,
    title: "UJ SCiiS Newsletter",
    job: "(Editor)",
    img: "./newsletter.jpeg",
    desc: "The University of Johannesburg's School of Consumer Intelligence and Information Systems (SCiiS) November 2023 Newsletter showcases the Technopreneurship Centre's hackathon wins, UJ events with departments from the College of Business Economics (CBE), multiple student news, guest lecturers, staff news and visiting professors. This edition featured the new Director of the SCiiS, Dr Stella Bvuma.",
  },
];

const Single = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = () => {
    
    switch (item.id) {
      case 1:
        window.open("/video.mp4", "_blank");
        break;
      case 2:
        window.open("/massvideo.mp4");
        break;
      case 3:
        window.location.href = "https://gbvreporting.co.za/";
        break;
      case 4:
        window.location.href = "https://mydigitalpublication.co.za/uj/cbe/SCiiS/vol13-newsletter/";
        break;
      default:
        break;
    }
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p className="job">{item.job}</p>
            <p>{item.desc}</p>
            <button onClick={handleButtonClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;