import React from "react";
import { connect } from "react-redux";

function GoogleAuth({ user }) {
	switch (user) {
		case null:
			return "";
		case false:
			return (
				<div style={{ marginLeft: "20px" }}>
					<a className="ui red google button" href="/auth/google">
						<i className="google icon"></i>
						Sign In With Google
					</a>
				</div>
			);
		default:
			return (
				<div style={{ marginLeft: "15px" }}>
					<a className="ui red inverted google button" href="/api/logout">
						Log out
					</a>
				</div>
			);
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps)(GoogleAuth);
