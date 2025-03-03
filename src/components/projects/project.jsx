import React from "react";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link } = props; // Add 'link' to props

	return (
		<div className="project">
			<div className="project-container">
				<div className="project-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="project-title">{title}</div>
				<div className="project-description">{description}</div>

				{/* Add a button only if the project has a link */}
				{link && (
					<a href={link} target="_blank" rel="noopener noreferrer">
						<button className="project-button">View Project</button>
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
