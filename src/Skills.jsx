import React from "react";
import { motion } from "framer-motion";
import bootstrap from "./assets/bootstrap.svg";
import cpp from "./assets/cpp.svg";
import css from "./assets/css.svg";
import notion from "./assets/notion.svg";
import flask from "./assets/flask.svg";
import angular from "./assets/angular.svg";
import firebase from "./assets/firebase.svg";
// import digitalOcean from "./assets/digitalOcean.png";
// import scss from "./assets/scss.png";
import heroku from "./assets/heroku.svg";
import html from "./assets/html.svg";
import java from "./assets/java.svg";
import javascript from "./assets/javascript.svg";
import jquery from "./assets/jquery.svg";
import mongodb from "./assets/mongodb.svg";
import mysql from "./assets/mysql.svg";
import node from "./assets/node.svg";
import python from "./assets/python.svg";
import reacticon from "./assets/reacticon.svg";
import wordpress from "./assets/wordpress.svg";
import django from "./assets/django.svg";
import redis from "./assets/redis.svg";
import graphql from "./assets/graphql.svg";
import github from "./assets/github-mark.svg";
import aws from "./assets/aws.svg";
import docker from "./assets/docker.svg";
import jenkins from "./assets/jenkins.svg";
import redux from "./assets/redux.svg";
import nextjs from "./assets/nextjs.svg";
import tailwindcss from "./assets/tailwindcss.svg";
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
    return (
        <motion.div id="skills" className="skills" variant={scroll}>
            <h1>🪛Skills</h1>
            <motion.div className="skill-row" initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}>
                <h3>Programming Languages</h3>
                <div className="skill-icons">
                    <img title='C++' src={cpp}></img>
                    <img title='JavaScript' src={javascript}></img>
                    <img title='Java' src={java}></img>
                    <img title='Python' src={python}></img>
                </div>
            </motion.div>
            <motion.div className="skill-row"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}>
                <h3>Frontend</h3>
                <div className="skill-icons">
                    <img title='React' src={reacticon}></img>
                    <img title='Redux' src={redux}></img>
                    <img title='HTML' src={html}></img>
                    <img title='CSS' src={css}></img>
                    <img title='Bootstrap' src={bootstrap}></img>
                    <img title='jQuery' src={jquery}></img>
                </div>
            </motion.div>
            <motion.div className="skill-row"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}>
                <h3>Backend</h3>
                <div className="skill-icons">
                    <img title="Node" src={node}></img>
                    <img title="MySQL" src={mysql}></img>
                    <img title="MongoDB" src={mongodb}></img>
                </div>
            </motion.div>
            <motion.div className="skill-row"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scroll}>
                <h3>Tools</h3>
                <div className="skill-icons">
                    <img title='AWS' src={aws}></img>
                    <img title='Docker' src={docker}></img>
                    <img title='Github' src={github}></img>
                    <img title='Firebase' src={firebase}></img>
                    <img title='Heroku' src={heroku}></img>
                    <img title='Notion' src={notion}></img>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Skills;