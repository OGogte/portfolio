import React from "react";
import './App.css';

function SideBtn(props) {
    return (
        <div className="SideBtn">
                {props.children}
        </div>
    );
}

export default SideBtn;
