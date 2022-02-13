import React, { useEffect } from "react";
import "./mainPage.css";
import projects from "./projects";
import ProjectCard from "../common/ProjectCard";
import DirectionReveal from 'direction-reveal';
import directionRevealOptions from "../../config/lib/directionRevealOptions";
import { Flip } from 'react-reveal';

const MainPage = () => {
  useEffect(() => DirectionReveal(directionRevealOptions))

	return (
		<div className="mainDiv">
			<div className="mainTitleDiv">
        <Flip top>
				  <h1 className="mainTitle">Simplpe React Projects</h1>
        </Flip>
			</div>

			<div className="container allProjectss direction-reveal direction-reveal--demo-roll-out">
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 g-5" key={project.name}>
              <Flip bottom>
                <ProjectCard project={project} />
              </Flip>
            </div>
          ))}
        </div>
      </div>

		</div>
	);
};

export default MainPage;
