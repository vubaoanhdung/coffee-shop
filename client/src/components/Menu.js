import "./styles/menu.css";
import React from "react";
import { fetchMenu } from "../actions";
import { connect } from "react-redux";

import Item from "./Item";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { timer: null };
	}
	componentDidMount() {
		this.props.fetchMenu();
		const timerId = setInterval(() => {
			this.props.fetchMenu();
		}, 5000);
		this.setState({ timer: timerId });
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	render() {
		const renderList = this.props.menu.map((item) => {
			return <Item key={item._id} item={item} />;
		});
		return (
			<div style={{ alignItems: "center" }} className="ui centered grid">
				{renderList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		menu: Object.values(state.menu),
	};
};

export default connect(mapStateToProps, { fetchMenu })(Menu);
