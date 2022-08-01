import React from "react";
import '../styles/ProjectCard.css'

const ProjectCard = ({data}) => {

    const projectData = data.map(project => {
        return (
            <div className="card">
                <img className="card-image" src={project.projectImage} alt="project" />
                <div className="card-content">
                    <h2 className="card-title">{project.projectName}</h2>
                    <p className="card-body">
                        Made with: {project.projectDescription}
                    </p>
                    <h3>{project.date}</h3>
                    <div className="card-button-container">
                        <a href={project.projectDemoLink} target="blank" className="card-button">
                            Demo
                        </a>
                        <a href={project.projectCodeLink} target="blank" className="card-button">
                            Code
                        </a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {projectData}
        </>
    )
}

export default ProjectCard;