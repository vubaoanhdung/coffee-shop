import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="ui placeholder segment">
			<div className="ui icon header">
				<i className="calendar check outline icon"></i>
				Welcome Employee Name
			</div>
			<Link to="/orders" className="ui primary button">
				Go to ORDERS
			</Link>
		</div>
	);
}
