import React from "react";
import ProjectData from './ProjectData';
import ProjectCard from './ProjectCard';
import './App.css';

function ProjectGallery() {
    return (
        ProjectData.length > 0 && (
            <div className="Gallery">
                <h1>🤖Projects</h1>
                <div className="ProjectGallery">
                    {ProjectData.map((data, index) => (
                        <ProjectCard data={data} key={index} />
                    ))}
                </div>
            </div>
        )
    );
}

export default ProjectGallery;