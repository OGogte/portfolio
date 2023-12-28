import React from "react";
import { motion } from "framer-motion";
import './App.css';

function Timeitem({ data }) {

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

    return (
        <div className="Timeitem">
            <div class="Timeitem_line"></div>
            <motion.ul class="Timeitem_items" variants={scroll}>
                <div class="Timeitem_circle"></div>
                <a href={data.url} target="_blank">
                    <motion.li class="Timeitem_item"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={scroll}
                        whileHover={{
                            x: 20,
                            transition: {
                                duration: 0.5,
                            },
                        }}>
                        <div class="Timeitem_top">
                            <div class="Timeitem_title">
                                <h3>{data.title}</h3>
                            </div>
                        </div>
                        <div class="Timeitem_date">
                            {data.date}
                        </div>
                        <div class="Timeitem_desc">
                            {data.text}
                        </div>
                    </motion.li>
                </a>
            </motion.ul>
        </div>
    );
}

export default Timeitem;

