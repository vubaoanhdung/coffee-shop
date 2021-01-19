import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="left menu">
				<div className="item">
					<i className="icon large coffee"></i>
				</div>
				<div className="item">
					<h2 className="ui brown header">Coffee Shop</h2>
				</div>
			</Link>

			<div className="right menu">
				<Link to="/orders" className="item">
					<b className="ui header">Orders</b>
				</Link>

				<Link to="/menu" className="item">
					<b className="ui header">Menu</b>
				</Link>
			</div>
		</div>
	);
};

export default Header;
