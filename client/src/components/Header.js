import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";
import { fetchUser } from "../actions";

class Header extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
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
					<Link to="/order" className="item">
						<b className="ui header">Menu</b>
					</Link>
					{this.props.user ? (
						<Link to="/history" className="item">
							<b className="ui header">History</b>
						</Link>
					) : (
						""
					)}

					<Link to="/cart" className="item">
						<i className="large shopping cart icon"></i>
						<p style={{ color: "#FE9A76" }}>
							<b>{this.props.totalItems}</b>
						</p>
					</Link>

					<div className="item">
						<GoogleAuth />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	if (!state.user) {
		return {
			totalItems: 0,
		};
	}
	return {
		totalItems: state.user.cart.length,
		user: state.user,
	};
};
export default connect(mapStateToProps, { fetchUser })(Header);
