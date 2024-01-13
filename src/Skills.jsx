import React from "react";
import { motion } from "framer-motion";
import { DiJava, DiReact, DiNodejs, DiHtml5, DiCss3, DiPython, DiMongodb, DiMysql, DiAws, DiDocker, DiGithubBadge } from "react-icons/di";
import { SiJavascript, SiRedux, SiJquery, SiFirebase, SiNotion, SiExpress, SiCplusplus, SiTailwindcss, SiMui } from "react-icons/si";
import './App.css';

function Skills() {
    const scroll = {
        initial: {
            scale: 1.1,
            y: 50,
            opacity: 0,
        },
        animate: {
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 2,
            },
        }
    }
    const skillsData = [
        {
            category: "Programming Languages", skills: [
                { label: "C++", icon: <SiCplusplus /> },
                { label: "JavaScript", icon: <SiJavascript /> },
                { label: "Java", icon: <DiJava /> },
                { label: "Python", icon: <DiPython /> },
            ]
        },
        {
            category: "Frontend", skills: [
                { label: "React", icon: <DiReact /> },
                { label: "Redux", icon: <SiRedux /> },
                { label: "HTML", icon: <DiHtml5 /> },
                { label: "CSS", icon: <DiCss3 /> },
                { label: "MaterialUI", icon: <SiMui /> },
                { label: "TailwindCSS", icon: <SiTailwindcss /> },
                { label: "jQuery", icon: <SiJquery /> },
            ]
        },
        {
            category: "Backend", skills: [
                { label: "Node", icon: <DiNodejs /> },
                { label: "Express", icon: <SiExpress /> },
                { label: "MySQL", icon: <DiMysql /> },
                { label: "MongoDB", icon: <DiMongodb /> },
            ]
        },
        {
            category: "Tools", skills: [
                { label: "AWS", icon: <DiAws /> },
                { label: "Docker", icon: <DiDocker /> },
                { label: "Github", icon: <DiGithubBadge /> },
                { label: "Firebase", icon: <SiFirebase /> },
                { label: "Notion", icon: <SiNotion /> },
            ]
        },
    ];

    const flexContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "60px 0",
        backgroundColor: "#000000",
        color: "#ffffff",
        textAlign: 'center',
    };
    const flexContainers = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // padding: "60px 0",
        backgroundColor: "#000000",
        color: "#ffffff",
        
    };
    const iconStyle = {
        fontSize: "2em",
        marginRight: "5px",
    };

    return (
        <motion.div id="skills" style={flexContainer} variant={scroll}>
            <h1>🪛Skills</h1>

            {skillsData.map((category, index) => (
                <div key={index} className="skills">
                    <h2>{category.category}</h2>
                    <div style={flexContainers}>
                        {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="skill-icon">
                                {React.cloneElement(skill.icon, { style: { ...iconStyle, color: '#ffffff' } })}
                                <p>{skill.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default Skills;
