import React from "react";
import './App.css';

function SideLink(props) {
    return (
        <div className="SideLink">
            {props.children}
        </div>
    );
}

export default SideLink;
