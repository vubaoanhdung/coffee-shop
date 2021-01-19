import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeItemFromCart } from "../actions";
import Payment from "./Payment";

class Cart extends React.Component {
	render() {
		if (this.props.user === null) {
			return "";
		} else if (this.props.user === false) {
			return (
				<div className="ui icon message">
					<div className="content">
						<h2 className="ui header">Welcome!</h2>
						<h3>Please sign in and start to order</h3>
					</div>
				</div>
			);
		}

		if (this.props.user.cart.length === 0) {
			return (
				<div className="ui placeholder segment">
					<div className="ui icon header">
						<i className="cart icon"></i>
						Empty Cart. Please Go To Menu To Start Order
					</div>
					<Link to="order" className="ui primary button">
						See Menu
					</Link>
				</div>
			);
		}

		const itemTotal = parseFloat(
			this.props.user.cart
				.reduce((total, item) => total + item.price, 0)
				.toFixed(2)
		);
		const tax = parseFloat((itemTotal * 0.11).toFixed(2));
		const orderTotal = parseFloat((itemTotal + tax).toFixed(2));

		const renderItems = this.props.user.cart.map((item) => {
			const itemIndex = this.props.user.cart.indexOf(item);
			return (
				<div key={itemIndex} className="item">
					<div className="right floated content">
						<div
							onClick={() => this.props.removeItemFromCart(itemIndex)}
							className="ui tiny inverted orange button"
						>
							Remove
						</div>
					</div>
					<img
						src={item.imageSource}
						alt={item.name}
						className="ui avatar image"
					/>
					<div className="content">
						<h3 className="ui header">{item.name}</h3>
						<div
							style={{ textAlign: "left" }}
							className="description"
						>{`$ ${item.price}`}</div>
					</div>
				</div>
			);
		});

		return (
			<div className="ui huge very relaxed middle aligned celled list">
				{renderItems}
				<div
					className="content"
					style={{ display: "flex", justifyContent: "center" }}
				>
					<div className="ui card">
						<div className="content">
							<div className="header">Order Summary</div>
						</div>
						<div style={{ paddingLeft: "20px" }} className="summary">
							<h3>{`Items: ${itemTotal}`}</h3>
							<h3>{`Tax: ${tax}`}</h3>
							<h2>{`Total: ${orderTotal}`}</h2>
						</div>
						<div className="extra content">
							{/* <div className="ui yellow button">Proceed to Checkout</div> */}
							<Payment amount={orderTotal} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
export default connect(mapStateToProps, { removeItemFromCart })(Cart);
