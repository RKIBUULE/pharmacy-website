/** @format */

import React from "react";
import './Landing.css';
import landing  from './assets/landing.jpg'
import Nav from "./Nav";

function Landing() {
	return (
		<section>
			<Nav />
			<header>
				<div className="landing__container">
					<h1> PHARMACY LANDING PAGE </h1>
					<p>
						lorloern sljbfs fs jslnflsfn lbsfs fsl osbfls flsgbsg sglsg section
						nsfnsfs sfnslf sl sgslm sg s gslg sljgbslgbs gslgs g
					</p>
					<button>LEARN MORE</button>
				</div>
				<img src={landing} alt='' />
			</header>
		</section>
	);
}

export default Landing;
