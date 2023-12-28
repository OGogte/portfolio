import React from "react";
import './App.css';
import TimelineData from './TimelineData';
import Timeitem from './Timeitem';

function Timeline() {
    return (
        TimelineData.length > 0 && (
            <div className="Timeline">
                {TimelineData.map((data, index) => (
                    <Timeitem data={data} key={index} />
                ))}
            </div>
        )
    );
}

export default Timeline;

