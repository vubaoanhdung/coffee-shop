import "./styles/menu.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMenu } from "../actions";
import ItemCard from "./Item/ItemCard";

const Menu = ({ menu, fetchMenu }) => {
	useEffect(() => {
		fetchMenu();
	}, [fetchMenu]);

	const renderList = menu.map((item) => {
		return <ItemCard key={item._id} item={item} />;
	});

	return (
		<div>
			<Link
				to="/menu/create"
				style={{ marginBottom: "30px" }}
				className="ui top attached green button"
			>
				Add item
			</Link>
			<div style={{ alignedItems: "center" }} className="ui centered grid">
				{renderList}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		menu: Object.values(state.menu),
	};
};
export default connect(mapStateToProps, { fetchMenu })(Menu);
