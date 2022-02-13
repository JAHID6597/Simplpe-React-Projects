import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
	return (
		<>
			<Link to={ project.link } className="direction-reveal__card">
				<img
					src={project.img}
					alt={project.name}
					className="direction-reveal__img"
				/>

				<div className="direction-reveal__overlay direction-reveal__anim--enter">
					<h3 className="direction-reveal__title d-flex align-items-center justify-content-center h-100 text-uppercase fw-bold">
						{project.name}
					</h3>
				</div>
			</Link>
		</>
	);
};

export default ProjectCard;
