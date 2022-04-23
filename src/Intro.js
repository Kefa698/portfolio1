import React from 'react';
import './Intro.css';
import me from './img/me.png';
import Switch from '@mui/material/Switch';

function Intro() {
	return (
		<div className="intro">
			<Switch className="i-scroll" />
			<div className="intro_left">
				<div className="intro_left_wrapper">
					<h2 className="i-intro">Hello my name is Kefa</h2>
					<h1 className="i-name"> Kefa Isaboke</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Web Developer</div>
							<div className="i-title-item">UI/UX Designer</div>
							<div className="i-title-item">Photographer</div>
							<div className="i-title-item">Writer</div>
							<div className="i-title-item">Content Creator</div>
						</div>
					</div>
					<p className="i-description">
						I design and develop services for customers of all sizes,
						specializing in creating stylish, modern websites, web services
						online stores.
					</p>
				</div>
			</div>
			<div className="intro_right">
				<div className="i-bg"></div>
				<img src={me} alt="" className="i-image" />
			</div>
		</div>
	);
}

export default Intro;
