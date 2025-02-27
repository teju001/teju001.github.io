import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./stuhrling-new-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Stuhrling Original</div>
							<div className="work-subtitle">
								Web Admin
							</div>
							<div className="work-duration">Jan 2024 — Dec 2024</div>
						</div>

						<div className="work">
							
							<div className="work-title">R Tech Technologies</div>
							<div className="work-subtitle">
							Junior Cloud Engineer, 
							</div>
							<div className="work-duration">Jun 2022 - Nov 2022</div>
						</div>
						<div className="work">
							
							<div className="work-title">KriSemi Design Technologies Pvt. Ltd</div>
							<div className="work-subtitle">
							Project Intern
							</div>
							<div className="work-duration">Apr 2021 — May 2021</div>
						</div>
						<div className="work">
							
							<div className="work-title">Verzeo</div>
							<div className="work-subtitle">
							Machine Learning Intern
							</div>
							<div className="work-duration">Apr 2021 — May 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
