import About from './About';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import './App.css';
import Experience from './Experience';
import Projects from './Projects'
import Skills from './Skills';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
function App() {
  const [navOpen, SetNavOpen] = useState(false)

  function toggleNav() {
    SetNavOpen(!navOpen);
    console.log(navOpen);
  }

  const [mousep, setmousep] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = e => {
      setmousep({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
  const cursor = {
    default: {
      x: mousep.x - 12,
      y: mousep.y - 12
    }
  }
  return (
    <div id="/">
      <motion.div className="cursor" variants={cursor} animate="default">
      </motion.div>
      <Navbar navOpen={navOpen} toggle={toggleNav} />
      <Sidebar navOpen={navOpen} toggle={toggleNav} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
