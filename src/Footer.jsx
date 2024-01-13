import React from "react";
import { SiX, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://twitter.com/ayegogte" target="_blank" rel="noreferrer"><SiX /></a>
                <a href="https://linkedin.com/in/om-gogte" target="_blank" rel="noreferrer"><SiLinkedin /></a>
                <a href="https://github.com/OGogte" target="_blank" rel="noreferrer"><SiGithub /></a>
                <a href="mailto: omgogte18@gmail.com" target="_blank" rel="noreferrer"><SiGmail /></a>
            </div>
        </div>
    );
}

export default Footer;
