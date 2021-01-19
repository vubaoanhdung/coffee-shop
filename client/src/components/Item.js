import "./styles/item.css";
import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../actions";

const Item = ({ item, addItemToCart, user }) => {
	const { name, description, price, imageSource, calories } = item;
	const renderButton = () => {
		if (!user) {
			return <div className="ui grey button">Please log in to order</div>;
		} else {
			return (
				<button
					onClick={() =>
						addItemToCart({ name, price, imageSource, ready: false })
					}
					className="ui secondary button"
				>
					Add to cart
				</button>
			);
		}
	};
	return (
		<div className="five wide center aligned column">
			<div className="ui card">
				<div className="image">
					<img src={imageSource} alt={description} />
				</div>
				<div className="content">
					<div style={{ fontSize: "24px" }} className="header">
						<b>{name}</b>
					</div>
					<div
						style={{ fontSize: "16px" }}
						className="meta"
					>{`${calories} calories`}</div>
					<div style={{ fontSize: "16px" }} className="description">
						{description}
					</div>
					<h4 className="ui header">{`$ ${price}`}</h4>
					{renderButton()}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps, { addItemToCart })(Item);
