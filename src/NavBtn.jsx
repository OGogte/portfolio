import React from "react";
import './App.css';

function NavBtn(props) {
    return (
        <div className="NavBtn">
                {props.children}
        </div>
    );
}

export default NavBtn;
