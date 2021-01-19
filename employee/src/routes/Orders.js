import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { fetchOrders, serveOrder } from "../actions";

function Orders({ orders, fetchOrders, serveOrder }) {
	const firstRender = useRef(true);
	useEffect(() => {
		firstRender.current = false;
		fetchOrders();
		const timerId = setInterval(() => {
			fetchOrders();
		}, 4000);

		// clear the timeInterval when user navigate to other pages
		return function cleanup() {
			clearInterval(timerId);
		};
	}, [fetchOrders]);

	// if it is the first render
	// display nothing
	if (firstRender.current) {
		return "";
	}

	if (orders.length === 0) {
		return (
			<div className="ui placeholder segment">
				<div className="ui icon header">
					<i className="clock icon"></i>
					No Orders. Please wait!
				</div>
			</div>
		);
	} else {
		const renderList = orders.map((order) => {
			return (
				<div key={order._id} className="item">
					<div className="right floated content">
						<div
							onClick={() => {
								serveOrder(order._id, order.customer);
							}}
							className="ui tiny blue button"
						>
							Done
						</div>
					</div>
					<img
						className="ui avatar image"
						src={order.imageSource}
						alt="something"
					/>
					<div className="content">
						<h3 className="ui header">{order.name}</h3>
					</div>
				</div>
			);
		});
		return (
			<div className="ui huge very relaxed middle aligned celled list">
				{renderList}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		orders: Object.values(state.orders),
	};
};
export default connect(mapStateToProps, { fetchOrders, serveOrder })(Orders);
