import "./styles/landing.css";
import React from "react";
import { Link } from "react-router-dom";

function Landing() {
	return (
		<div className="ui vertical masthead center aligned segment">
			<div className="ui text container">
				<h1 className="ui header">Welcome to Coffee Shop</h1>
				<h2>Great attitude is like a perfect cup of coffee.</h2>
				<h2>Don't start your day without it.</h2>
				<Link to="/order" className="ui huge primary button">
					Get Started
					<i className="right arrow icon"></i>
				</Link>
			</div>
		</div>
	);
}

export default Landing;
