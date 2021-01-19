import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchItem, editItem, deleteItem } from "../actions";
import ItemForm from "./Item/ItemForm";

class ItemEdit extends Component {
	componentDidMount() {
		this.props.fetchItem(this.props.match.params.id);
		if (!this.props.item) {
			return "";
		}
	}

	onSubmit = (formData) => {
		this.props.editItem(this.props.match.params.id, formData);
	};

	onDelete = () => {
		this.props.deleteItem(this.props.match.params.id);
	};
	render() {
		return (
			<div>
				<ItemForm
					initialData={this.props.item}
					onSubmit={this.onSubmit}
					onDelete={this.onDelete}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		item: state.menu[ownProps.match.params.id],
	};
};
export default connect(mapStateToProps, { fetchItem, editItem, deleteItem })(
	ItemEdit
);
