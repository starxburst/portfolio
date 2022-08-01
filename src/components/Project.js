import React from "react";
import '../styles/Project.css'
import ProjectCard from "./ProjectCard";
import data from "../projectData";

const Project = () => {
    return (
        <div className="project-container">
            <div className="project-page-header">
                <h1>Projects</h1>
            </div>
            <div className="project-content-section">
                <ProjectCard data={data}/>
            </div>

        </div>
    )

}

export default Project;