const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

const Order = require("../models/Order");

module.exports = (app) => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const totalAmountBeforeTax = req.user.cart.reduce(
			(total, item) => total + item.price,
			0
		);
		const totalAmountAfterTax = parseFloat(
			(totalAmountBeforeTax * 1.11).toFixed(2)
		);

		const charge = await stripe.charges.create({
			amount: totalAmountAfterTax * 1000,
			currency: "cad",
			source: req.body.id,
		});

		// req.user.history.unshift(...req.user.cart);
		for (let i = 0; i < req.user.cart.length; i++) {
			const item = req.user.cart[i];
			const newOrder = new Order({
				name: item.name,
				ready: item.ready,
				customer: req.user.id,
				imageSource: item.imageSource,
			});
			req.user.history.unshift(newOrder);
			await newOrder.save();
		}
		req.user.cart = [];
		const user = await req.user.save();
		res.send(user);
	});
};
