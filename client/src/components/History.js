import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class History extends React.Component {
	render() {
		if (!this.props.user) {
			return null;
		}

		for (let i = 0; i < this.props.user.history.length; i++) {
			if (this.props.user.history[i].ready === false) {
				setTimeout(() => {
					this.props.fetchUser();
				}, 4000);
				break;
			}
		}

		const renderItemList = this.props.user.history.map((item) => {
			return (
				<div className="item" key={this.props.user.history.indexOf(item)}>
					<div className="right floated content">
						{item.ready ? (
							<div className="ui green button">Ready For Pickup</div>
						) : (
							<div className="ui blue button">Preparing</div>
						)}
					</div>
					<img
						src={item.imageSource}
						alt={item.name}
						className="ui avatar image"
					/>
					<div className="content">
						<b>{item.name}</b>
					</div>
				</div>
			);
		});

		return (
			<div className="ui middle aligned divided list">{renderItemList}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps, { fetchUser })(History);
