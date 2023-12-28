import React from "react";
import { motion } from "framer-motion";
import './App.css';

function ProjectCard({ data }) {

    const scroll = {
        initial: {
            x: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeOut",
            },
        }
    }


    return (
        <a href={data.url} target="_blank">
            <motion.div className="ProjectCard"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}
                whileHover={{
                    y: -10,
                    transition: {
                        duration: 0.5,
                    },
                }}>
                {data.img}
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <span>{data.tools}</span>
            </motion.div>
        </a>
    );
}

export default ProjectCard;