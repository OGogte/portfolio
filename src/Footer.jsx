import React from "react";
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/mail.svg'
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://twitter.com/ayegogte" target="_blank"><img src={twitter}></img></a>
                <a href="https://linkedin.com/in/om-gogte" target="_blank"><img src={linkedin}></img></a>
                <a href="https://github.com/OGogte" target="_blank"><img src={github}></img></a>
                <a href="mailto: omgogte18@gmail.com" target="_blank"><img src={mail}></img></a>
            </div>
        </div>
    );
}

export default Footer;
