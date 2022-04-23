import './About.css';
import React from 'react';

function About() {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img
						src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="a-img"
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About me</h1>
				<p className="a-sub">i am the best at what i do</p>
				<p className="a-desc">
					A tiny VS Code extension made up of a few commands that generate and
					insert lorem ipsum text into a text file. To use the extension, open
					the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and
					select to insert either a line or paragraph.
				</p>
				<div className="a-award">
					<img
						src="https://images.pexels.com/photos/7005693/pexels-photo-7005693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="a-award-img"
					/>
					<div className="a-award-text">
						<h4 className="a-award-title">International Design</h4>
						<p className="a-award-desc">
							A tiny VS Code extension made up of a few commands that generate
							and insert lorem ipsum
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
