import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import { handlePaymentToken } from "../actions";

class Payment extends Component {
	render() {
		return (
			<StripeCheckout
				name="Coffee Shop"
				amount={this.props.amount * 100}
				currency="CAD"
				token={(token) => this.props.handlePaymentToken(token)}
				stripeKey="pk_test_51HmWsxHsKSaBrlITJVSYsjLpfyYNb7uY3cBUsTUyKU7d0A37Uc8kVG5Ba2b4hMSDd6vdSuBuzSi49tKKNQ8S5sl700tWIEbpsi"
			>
				<button className="btn btn-primary">Proceed to Checkout</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, { handlePaymentToken })(Payment);
