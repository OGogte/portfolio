import React from "react";
import './App.css';

function NavLink(props) {
    return (
        <div className="NavLink">
                {props.children}
        </div>
    );
}

export default NavLink;
