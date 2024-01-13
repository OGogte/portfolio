import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import avatar from './assets/profile.jpg'
import { SiX, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import './App.css'

function About() {
    const fadeUp = {
        initial: {
            y: 50,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.5,
                ease: "easeOut",
            },
        }
    };

    const drop = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
            },
        }
    };

    return (
        <div>
            <div className="about" id="about">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={drop}>
                    <motion.div>
                        <img src={avatar} className="avatar" alt="Om Gogte"></img>
                    </motion.div>
                </motion.div>
                <motion.div className="content"
                    initial="initial"
                    animate="animate"
                    variants={fadeUp}>
                    <motion.p variants={fadeUp}>Hey👋, my name is</motion.p>
                    <motion.h1 variants={fadeUp}>Om Gogte</motion.h1>
                    <motion.p variants={fadeUp}>I am an IT student based in India, learning and exploring about <span>Web development</span> and <span>Coding</span>.<br></br>I enjoy talking about startups, technology, sports, and life in general.</motion.p>
                    <motion.div className="icons" variants={fadeUp}>
                        <hr></hr>
                        <a href="https://twitter.com/ayegogte" target="_blank" rel="noreferrer" ><SiX /></a>
                        <a href="https://linkedin.com/in/om-gogte" target="_blank" rel="noreferrer"><SiLinkedin /></a>
                        <a href="https://github.com/OGogte" target="_blank" rel="noreferrer"><SiGithub /></a>
                        <a href="mailto: omgogte18@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
                        <hr></hr>
                    </motion.div>
                </motion.div>
            </div>
            <Marquee gradient={false} speed={100} className="marquee">
                <h1>Developer</h1>
                <h1>Chess</h1>
                <h1>Competitive Programmer</h1>
                <h1>Startups</h1>
            </Marquee>
        </div>
    );
}

export default About;