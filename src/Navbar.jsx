import React from "react";
import { motion } from "framer-motion";
import './App.css';
import Hamburger from './assets/hamburger.svg'
import { Link } from 'react-scroll'
import NavLink from "./NavLink";
import NavBtn from "./NavBtn";
import logo from './assets/logo.svg'
const fadeDown = {
  initial: {
    y: -40,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  }
};

function Navbar(props) {


  return (
    <motion.div className="Nav"
      initial="initial"
      animate="animate"
      variants={fadeDown}
    >
      <NavLink>
        <Link to="/" spy={true} smooth={true} className="brand">
         <img src={logo} className="logo" alt="O"></img>
          <h1>m</h1>
        </Link>
      </NavLink>
      <div className="NavMenu">
        <NavLink>
          <Link to="about" spy={true} smooth={true}>About</Link>
        </NavLink>
        <NavLink>
          <Link to="experience" spy={true} smooth={true}>Experience</Link>
        </NavLink>
        <NavLink >
          <Link to="projects" spy={true} smooth={true}>Projects</Link>
        </NavLink>
        <NavLink>
          <Link to="skills" spy={true} smooth={true}>Skills</Link>
        </NavLink>

        <NavBtn>
          <a href='https://drive.google.com/file/d/1bwIvOq_g69eOs6A7CbwujPjrLMKIwIwR/view?usp=sharing' rel="noreferrer" target='_blank'>Resume</a>
        </NavBtn>
      </div>
      <img src={Hamburger} className="Hamburger" alt="Hamburger" onClick={props.toggle} />
    </motion.div>
  );
}

export default Navbar;
