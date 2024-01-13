import React from "react";
import './App.css';
import Close from './assets/close.svg'
import { Link } from 'react-scroll'
import SideLink from "./SideLink";
import SideBtn from "./Sidebtn";

function Sidebar(props) {


    return (
        props.navOpen ? <div className="Sidebar">
            <div className="SideMenu">
                <SideLink>
                    <Link to="about" spy={true} smooth={true} onClick={props.toggle}>About</Link>
                </SideLink>
                <SideLink>
                    <Link to="experience" spy={true} smooth={true} onClick={props.toggle}>Experience</Link>
                </SideLink>
                <SideLink >
                    <Link to="projects" spy={true} smooth={true} onClick={props.toggle}>Projects</Link>
                </SideLink>
                <SideLink>
                    <Link to="skills" spy={true} smooth={true} onClick={props.toggle}>Skills</Link>
                </SideLink>
                { /* <SideLink>
                    <Link to="achievement" spy={true} smooth={true} onClick={props.toggle}>Achievement</Link>
                </SideLink> */}
                <SideBtn>
                    <a href='https://drive.google.com/file/d/1bwIvOq_g69eOs6A7CbwujPjrLMKIwIwR/view?usp=sharing' target='_blank' rel="noreferrer">Resume</a>
                </SideBtn>
            </div>
            <img src={Close} className="close" alt="close" onClick={props.toggle} />
        </div> : null
    );
}

export default Sidebar;
