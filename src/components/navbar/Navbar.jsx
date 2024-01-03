import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Karabo Reitumetse Maloka
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/karaboraymond.snoogimaloka">
            <img src="./facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/snogi_k/">
            <img src="./instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/karabo-maloka/">
            <img src="./linkedIn.png" alt="" />
          </a>
          <a href="https://twitter.com/snogi_karabo">
            <img src="./xeet.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;